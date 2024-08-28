import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import icon from "../../assets/icons/passIcon.png";

const InputPasswordButton = ({title, place}) => {
    const [text, onChangeText] = useState('');
    const [status, onChangeStatus] = useState(true);

    const handleStatus = () => {
        onChangeStatus(!status);
    }

    return(
        <View>
            <Text style={style.title}> {title}:</Text>
            <View style={style.containerInput}>
                <TextInput style={style.input} onChangeText={onChangeText} 
                    value={text} 
                    placeholder={place} 
                    placeholderTextColor="#fff"
                    secureTextEntry={status}    
                />
                <TouchableOpacity onPress={handleStatus} style={style.passIcon}><Image source={icon}/></TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontFamily: "Montserrat_700Bold",
        marginBottom: 5,
        color: "#fff",
        fontSize: 18
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
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
    },
    passIcon: {
        position: 'absolute',
        right: 30,
        height: 24,
        width: 24,
        tintColor: '#fff',
    }
})

export { InputPasswordButton };