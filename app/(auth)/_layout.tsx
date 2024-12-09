import { Stack } from 'expo-router';

export enum AuthRoutes {
  INDEX = 'index',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const AUTH_ROUTES = {
  [AuthRoutes.INDEX]: 'Welcome',
  [AuthRoutes.LOGIN]: 'Login',
  [AuthRoutes.REGISTER]: 'Register',
} as const;

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={AuthRoutes.INDEX}
    >
      <Stack.Screen 
        name={AuthRoutes.INDEX}
        options={{ title: AUTH_ROUTES[AuthRoutes.INDEX] }}
      />
      <Stack.Screen 
        name={AuthRoutes.LOGIN}
        options={{ title: AUTH_ROUTES[AuthRoutes.LOGIN] }}
      />
      <Stack.Screen 
        name={AuthRoutes.REGISTER}
        options={{ title: AUTH_ROUTES[AuthRoutes.REGISTER] }}
      />
    </Stack>
  );
} 