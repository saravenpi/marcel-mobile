import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Profile</ThemedText>
			</ThemedView>
			<ThemedText>Here is your character</ThemedText>
			<Image source={require('@/assets/images/favicon.png')} style={styles.image} />
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	image: {
		alignSelf: 'auto',
		marginTop: 8,
		width: 150,
		height: 150,
	},
});