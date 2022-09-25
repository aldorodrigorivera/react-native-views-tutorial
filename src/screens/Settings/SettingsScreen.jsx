import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>PROFILE!</Text>
        </View>
    );
}

function OptionsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>OPTIONS!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export const SettingsScreen = () => {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#f5b901',
                }}>
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                }}/>
                <Tab.Screen
                    name="Options"
                    component={OptionsScreen}
                    options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}