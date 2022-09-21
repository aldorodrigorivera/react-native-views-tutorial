import {StyleSheet} from "react-native";

export default StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
    subtitle:{
        paddingTop:8,
        fontSize:20,
        fontWeight:"300"
    },
    optionText:{
        color:"#1766ea",
        fontWeight:"700"
    },
    optionsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        paddingTop:8,
        paddingHorizontal:15
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        justifyContent:"center"
    },
    emoji:{
        width:"100%",
        textAlign:"center"
    }

});