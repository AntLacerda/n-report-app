import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from '../../assets/images/logo.png';
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPasswordButton } from "../../components/inputPasswordButton";

const Signup = () => {
    const [name, setName] = useState();
    const [CPF, setCPF] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logoImage} />
            </View>
            <View>
                <Text style={styles.title}>Vamos{`\n`}Começar!</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input title={"Nome"} placeholder={"Digite o seu nome..."} value={name} onChange={setName} />
                <Input title={"CPF"} placeholder={"Digite o seu cpf..."} value={CPF} onChange={setCPF} />
                <Input title="E-mail" placeholder="Digite o seu email..." value={email} onChange={setEmail} />
                <InputPasswordButton title="Senha" place="Digite a sua senha..." state={setPassword} valuePassword={password} />
            </View>
            <View>
                <View style={styles.loginButton}>
                    <Button title={"Cadastrar"} onPress={() => console.log({ CPF, name, email, password })} />
                </View>
                <View style={styles.underlineTextContainer}>
                    <Text style={styles.underlineText}>Já possui uma conta? </Text>
                    <TouchableOpacity><Text style={styles.linkUnderlineText}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 5
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
        marginTop: 20,
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

export default Signup;