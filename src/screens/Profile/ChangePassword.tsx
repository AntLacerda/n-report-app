import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import ContainerScreen from "../../components/ContainerScreen"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { InputPasswordButton } from "../../components/inputPasswordButton";
import api from "../../api/api";

const ChangePassword = () => {
    const navigation = useNavigation();
    const [actualPass, setactualPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPassAgain, setNewPassAgain] = useState("");

    const resetPassword = async () => {
        if(newPass!=newPassAgain) {
            return alert("Nova senha diferente. Confira os dois campos!");
        }

        try {
            const response = await api.put("api/v1/users/updatePass", {actualPass: actualPass, newPass: newPass}).then(response=>{
                return response;
            });

            return alert(response.data);
        } catch (error) {
            alert("Não deu certo resetar a senha! Tente novamente!");
        }
    }

    return (
        <View style={style.resetPasswordContainer}>
            <View style={style.initResetPassword}>
                <Text style={style.textInitResetPassword}>Mudar senha</Text>
            </View>
            <View style={style.arrowInitResetPassword}>
                <Ionicons
                    name={"arrow-back-outline"}
                    color={'white'}
                    size={28}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
            </View>
            <View style={style.bottonContainer}>
                <View>
                    <Text style={style.titleResetPassword}>Mudar ou Recuperar Senha</Text>
                    <Text style={style.descriptionResetPassword}>Siga o passo a passo para mudar sua senha.</Text>
                </View>
                <InputPasswordButton place="******" state={setactualPass} title="Digite a sua senha atual" valuePassword={actualPass}/>
                <InputPasswordButton place="******" state={setNewPass} title="Digite a nova senha" valuePassword={newPass}/>
                <InputPasswordButton place="******" state={setNewPassAgain} title="Digite a nova senha novamente" valuePassword={newPassAgain}/>
                <TouchableOpacity
                    style={style.sendButton}
                    onPress={()=>{
                        resetPassword();
                        navigation.goBack();
                    }}
                >
                    <Text style={style.sendButtonText}>Atualizar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    resetPasswordContainer: {
        marginTop: 20,
        backgroundColor: "#292929",
        height: "100%"
    },
    initResetPassword: {
        backgroundColor: "#3BC9DB",
        height: 65,
        justifyContent: "center",
        alignItems: "center", 
    },
    textInitResetPassword: {
        color: "#fff",
        fontFamily: "Montserrat_700Bold",
        fontSize: 18
    },
    arrowInitResetPassword: {
        position: "absolute",
        top: 20,
        left: 20
    },
    bottonContainer: {
        padding: 20,
        gap: 10
    },
    titleResetPassword: {
        fontFamily: "Montserrat_700Bold",
        color: "#fff",
        fontSize: 18,
        marginBottom: 5
    },
    descriptionResetPassword: {
        fontFamily: "Montserrat_400Regular",
        color: "#fff",
        marginBottom: 15
    },
    inputStyle: {
        width: "100%",
        height: 55,
        backgroundColor: "#494949",
        borderRadius: 5,
        borderBottomColor: "#3BC9DB",
        borderBottomWidth: 5,
        fontFamily: "Montserrat_400Regular",
        paddingLeft: 20
    },
    sendButton: {
        width: "100%",
        backgroundColor: "#3BC9DB",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    sendButtonText: {
        color: "#fff",
        fontFamily: "Montserrat_700Bold"
    }
    
});

export default ChangePassword;