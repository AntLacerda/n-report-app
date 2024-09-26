import { useContext, useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from '../../assets/images/logo.png';
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPasswordButton } from "../../components/inputPasswordButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import HeaderWithLogo from "../../components/HeaderWithLogo";
import api from "../../api/api";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "signup">
}

const Signup = ({ navigation }: Props) => {
    const {setIsAuth} = useContext(AuthContext);
    const [name, setName] = useState();
    const [CPF, setCPF] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSignup = async () => {
        if (!name || !CPF || !email || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
    
        try {
            const response = await api.post("/auth/signup", {name, cpf: CPF, email, password}).then(response => {
                return response;
            }); 
            if (response.status) {
                Alert.alert("Cadastro feito com sucesso!", "Faça login...")
                navigation.navigate("login")
            } else {
                Alert.alert("Erro", "Credenciais inválidas.");
            }
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Algo deu errado. Tente novamente.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderWithLogo image={logo} title={`Vamos${`\n`}Começar!`} />
                <View style={styles.inputContainer}>
                    <Input title={"Nome"} placeholder={"Digite o seu nome..."} value={name} onChange={setName} />
                    <Input title={"CPF"} placeholder={"Digite o seu cpf..."} value={CPF} onChange={setCPF} />
                    <Input title="E-mail" placeholder="Digite o seu email..." value={email} onChange={setEmail} />
                    <InputPasswordButton title="Senha" place="Digite a sua senha..." state={setPassword} valuePassword={password} />
                </View>
                <View>
                    <View style={styles.loginButton}>
                        <Button title={"Cadastrar"} onPress={handleSignup} />
                    </View>
                    <View style={styles.underlineTextContainer}>
                        <Text style={styles.underlineText}>Já possui uma conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("login")}><Text style={styles.linkUnderlineText}>Login</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        marginTop: 20,
        padding: 15,
        display: "flex",
        gap: 5
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