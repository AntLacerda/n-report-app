import { StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.button}>
            <Text style={style.text}>{title}</Text>
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

export default Button;