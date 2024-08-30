import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import logo from '../../assets/images/logo.png';
import { InputEmailButton } from "../../components/inputEmailButton";
import { InputPasswordButton } from "../../components/inputPasswordButton";
import { GenericButton } from "../../components/genericButton";
import { connectionTest } from "../../services/connectionTest";
import { login } from "../../services/login";
import { useState } from "react";

export default function Login(){
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    return(
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logoImage}/>
                    </View>
                    <View>
                        <Text style={styles.title}>Hey, {`\n`}Bem vindo Novamente!</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <InputEmailButton title="E-mail" place="Digite o seu email..." state={setInputEmail} valueEmail={inputEmail}/>
                        <InputPasswordButton title="Senha" place="Digite a sua senha..." state={setInputPassword} valuePassword={inputPassword}/>
                    </View>
                    <View style={styles.loginButton}>
                        <GenericButton label="Login" url={login} data={{email:inputEmail, password:inputPassword}}/>
                    </View>
                    <View style={styles.underlineTextContainer}>
                        <Text style={styles.underlineText}>Não possui uma conta? </Text>
                        <TouchableOpacity><Text style={styles.linkUnderlineText}>Criar conta</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60,    
    },
    logoImage: {
        width: 40,
        height: 40,
    },
    title: {
        fontFamily: "Montserrat_800ExtraBold",
        color: "#fff",
        fontSize: 40,
        lineHeight: 40,
    },
    inputContainer:{
        marginTop: 40,
        gap: 16,
    },
    loginButton: {
        marginTop: 40,
    },
    underlineTextContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
        
    },
    underlineText: {
        color: "#fff",
        fontFamily: "Montserrat_400Regular",
        fontSize: 16
    },
    linkUnderlineText: {
        color: "#3BC9DB",
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,
        textDecorationLine: "underline"
    }
});

