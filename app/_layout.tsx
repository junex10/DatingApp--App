import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="routes/login-routes" options={{ headerShown: false }} />
        </Stack>
    )
}