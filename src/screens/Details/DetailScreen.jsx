import {Button, Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export const DetailsScreen = ({ navigation, route }) => {
    const { userId } = route.params;
    const Tab = createBottomTabNavigator();

    const goBack = () => {
        navigation.navigate("Home");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>THIS IS THE PARAMETER: ${userId}</Text>
            <Button title={"Go back"} onPress={() => goBack()}/>
            <Button title={"Go to Menu options"} onPress={() => navigation.navigate("Settings")}/>
        </View>
    );

}