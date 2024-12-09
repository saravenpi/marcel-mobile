import { Image, StyleSheet, View, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { useUserStore } from '@/lib/auth/userStore';
import { TabRoutes } from '@/app/(tabs)/_layout';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#171717' : '#ffffff';
    const { isAuthenticated } = useUserStore();

    useEffect(() => {
        if (isAuthenticated) {
            requestAnimationFrame(() => {
                router.replace(`/(tabs)/${TabRoutes.PROFILE}`);
            });
        }
    }, [isAuthenticated]);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <ThemedView style={styles.content}>
                <ThemedText type="title">Welcome to Marcel!</ThemedText>
                <Image source={require('@/assets/images/favicon.png')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <Button onPress={() => router.push("/(auth)/login")} variant="secondary">
                        Login
                    </Button>
                    <Button onPress={() => router.push("/(auth)/register")}>
                        Get Started
                    </Button>
                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
}); 