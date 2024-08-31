import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from '../../assets/images/logo.png';
import { GenericButton } from "../../components/genericButton";
import { InputEmailButton } from "../../components/inputEmailButton";
import { InputPasswordButton } from "../../components/inputPasswordButton";
import { login } from "../../services/login";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import HeaderWithLogo from "../../components/HeaderWithLogo";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "login">
}

export default function Login({ navigation }: Props) {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithLogo image={logo} title={`Hey, ${`\n`}Bem vindo Novamente!`}/>
            <View style={styles.inputContainer}>
                <InputEmailButton title="E-mail" place="Digite o seu email..." state={setInputEmail} valueEmail={inputEmail} />
                <InputPasswordButton title="Senha" place="Digite a sua senha..." state={setInputPassword} valuePassword={inputPassword} />
            </View>
            <View style={styles.loginButton}>
                <GenericButton label="Login" url={login} data={{ email: inputEmail, password: inputPassword }} />
            </View>
            <View style={styles.underlineTextContainer}>
                <Text style={styles.underlineText}>Não possui uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}><Text style={styles.linkUnderlineText}>Criar conta</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        marginTop: 20,
        padding: 15,
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
    inputContainer: {
        marginTop: 40,
        gap: 16,
    },
    loginButton: {
        marginTop: 40,
    },
    underlineTextContainer: {
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

