import { Image, StyleSheet, View, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const backgroundColor = colorScheme === 'dark' ? '#171717' : '#ffffff';

	return (
		<View style={[styles.container, { backgroundColor }]}>
			<ThemedView style={styles.content}>
				<ThemedText type="title">Welcome to Marcel!</ThemedText>
				<Image source={require('@/assets/images/favicon.png')} style={styles.image} />
			</ThemedView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		alignItems: 'center',
		flex: 1,
		justifyContent: "center",
		flexDirection: 'column',
		gap: 8,
	},
	image: {
		alignSelf: 'center',
		marginTop: 8,
		width: 150,
		height: 150,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingTop: 20,
	},
});
