import { useEffect } from "react";
import { HomeScreen } from "./src/screens/Home/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from "./src/screens/Details/DetailScreen";
import { splash } from "./src/screens/Splash";
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
    useEffect(() => {splash(5) });
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
