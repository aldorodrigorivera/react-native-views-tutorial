import {Alert, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "./HomeStyles";

export const HomeScreen = ({ navigation }) => {
    const {container, buttonContainer, emoji, optionsContainer, optionText, subtitle, title} = styles;

    const alert = (title) => {
        // Alert.alert(title);
        navigation.navigate('Details')
    }

    return (
        <SafeAreaView style={container}>
            <Text style={title}>Hey!</Text>
            <Text style={subtitle}>Let me see how are you doing?</Text>
            <View style={optionsContainer}>
                <TouchableOpacity
                    style={buttonContainer}
                    onPress={() => alert("Not bad!")}
                >
                    <Text style={optionText}>Not bad!</Text>
                    <Text style={emoji}>😉</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert("Great!")}
                    style={buttonContainer}
                >
                    <Text style={optionText}>Great! </Text>
                    <Text style={emoji}>😎</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert("So so!")}
                    style={buttonContainer}
                >
                    <Text style={optionText}>So so! </Text>
                    <Text style={emoji}>🙃</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

