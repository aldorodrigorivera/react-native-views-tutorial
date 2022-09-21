import {Button, Text, View} from "react-native";

export const DetailsScreen = ({ navigation }) => {
    const goBack = () => {
        navigation.navigate("Home");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title={"Go back"} onPress={() => goBack()}/>
        </View>
    );
}