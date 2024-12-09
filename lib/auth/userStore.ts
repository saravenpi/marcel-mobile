import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface UserState {
  isLoading: boolean;
  isAuthenticated: boolean;
  userData: any | null;
  setIsLoading: (loading: boolean) => void;
  setUserData: (data: any) => void;
  loadUserData: () => Promise<void>;
  clearUserData: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  isLoading: true,
  isAuthenticated: false,
  userData: null,
  setIsLoading: (loading) => set({ isLoading: loading }),
  setUserData: (data) => set({ userData: data, isAuthenticated: true }),
  loadUserData: async () => {
    try {
      const authDataString = await AsyncStorage.getItem('authData');
      if (authDataString) {
        const authData = JSON.parse(authDataString);
        set({ userData: authData, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      set({ isLoading: false });
    }
  },
  clearUserData: async () => {
    try {
      await AsyncStorage.removeItem('authData');
      set({ userData: null, isAuthenticated: false });
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  },
})); 