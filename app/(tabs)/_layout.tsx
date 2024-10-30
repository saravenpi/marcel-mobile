import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, headerShown: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="habits"
				options={{
					title: 'Habits',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="journeys"
				options={{
					title: 'Journeys',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'map' : 'map-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="events"
				options={{
					title: 'Events',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="friends"
				options={{
					title: 'Friends',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
					),
				}}
			/>

		</Tabs>
	);
}
