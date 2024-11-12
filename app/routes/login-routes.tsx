import { Tabs } from 'expo-router';

const ROUTE = '../src/login/';

export default function TabLayout() {
  return (
        <Tabs>
            <Tabs.Screen name={`${ROUTE}login`} options={{ title: 'Login' }} />
            <Tabs.Screen name={`${ROUTE}create-account`} options={{ title: 'CreateAccount' }} />
        </Tabs>
  );
}