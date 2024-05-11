import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabNavigation() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
        <Tabs.Screen 
            name="index"
            options={{
                title: 'Home'
            }}/>
            
            <Tabs.Screen 
            name="tab-two"
            options={{
                title: 'Tab2'
            }}/>

        <Tabs.Screen 
            name="tab-three"
            options={{
                title: 'Tab3'
            }}/>
            
        </Tabs>
    )
}