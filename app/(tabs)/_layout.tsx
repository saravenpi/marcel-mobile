import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export enum TabRoutes {
	CALENDAR = 'calendar',
	NOTES = 'notes',
	GOALS = 'goals',
	SQUADS = 'squads',
	PROFILE = 'profile',
}

export const INITIAL_ROUTES = {
	[TabRoutes.CALENDAR]: 'Calendar',
	[TabRoutes.NOTES]: 'Notes',
	[TabRoutes.GOALS]: 'Goals',
	[TabRoutes.SQUADS]: 'Squads',
	[TabRoutes.PROFILE]: 'Profile',
} as const;

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarLabelStyle: { display: 'none' }
			}}
			initialRouteName={TabRoutes.PROFILE}
		>
			<Tabs.Screen
				name={TabRoutes.CALENDAR}
				options={{
					title: INITIAL_ROUTES[TabRoutes.CALENDAR],
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name={TabRoutes.NOTES}
				options={{
					title: INITIAL_ROUTES[TabRoutes.NOTES],
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name={TabRoutes.GOALS}
				options={{
					title: INITIAL_ROUTES[TabRoutes.GOALS],
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name={TabRoutes.SQUADS}
				options={{
					title: INITIAL_ROUTES[TabRoutes.SQUADS],
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name={TabRoutes.PROFILE}
				options={{
					title: INITIAL_ROUTES[TabRoutes.PROFILE],
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
					),
				}}
			/>

		</Tabs>
	);
}
