import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

function ProfileScreen() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>PROFILE!</Text>
            <Text>PROFILE!</Text>
            <Text>PROFILE!</Text>
            <Text>PROFILE!</Text>
            <Text>PROFILE!</Text>
            <Text>PROFILE!</Text>
        </ScrollView>
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
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#f5b901',
                    headerLargeTitle: true,
                }}>
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerLargeTitle: true,
                        tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                }}/>
                <Tab.Screen
                    name="Options"
                    component={OptionsScreen}
                    options={{
                        headerLargeTitle: true,

                        tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}/>
            </Tab.Navigator>
    );
}