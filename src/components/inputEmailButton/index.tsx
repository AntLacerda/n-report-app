import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const InputEmailButton = ({title, place}) => {
    const [text, onChangeText] = useState('');

    return(
        <View>
            <Text style={styles.title}> {title}:</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={onChangeText} 
                value={text} 
                placeholder={place} 
                placeholderTextColor="#fff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: "Montserrat_700Bold",
        marginBottom: 5,
        color: "#fff",
        fontSize: 18
    },
    input: {
        height: 55,
        width: "100%",
        backgroundColor: "#464646",
        borderRadius: 5,
        borderBottomColor: "#3BC9DB",
        borderBottomWidth: 5,
        padding: 10,
        color: "#fff",
        fontFamily: "Montserrat_400Regular",
    }
})

export { InputEmailButton };