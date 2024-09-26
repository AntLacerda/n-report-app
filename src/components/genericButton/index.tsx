import { Text, TouchableOpacity, StyleSheet } from "react-native";

const GenericButton = ({label, url, data}) => {
    const callback = async () => {
        const response = await url("http://172.23.160.1:3000/auth/login",data);
        console.log(response)
    }
    
    return(
        <TouchableOpacity onPress={callback} style={style.button}>
            <Text style={style.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        width: "100%",
        backgroundColor:"#3BC9DB",
        height: 55,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"

    },
    text: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 18
    }
})

export { GenericButton };