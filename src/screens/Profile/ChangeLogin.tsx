import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import { Input } from "../../components/Input";
import { StatusBar } from "expo-status-bar";
import api from "../../api/api";

const ChangeLogin = (): React.JSX.Element => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [newEmail, setNewEmail] = useState<string>("");
    const [newEmailClone, setNewEmailClone] = useState<string>("");

    const updateEmail = async () => {
        if (newEmail != newEmailClone) {
            Alert.alert("Dados incorretos", "Os emails digitados não são iguais");
            return;
        }

        const status = (await api.put("/api/v1/users/updateEmail", {email: newEmail})).status;

        if (status == 200) {
            Alert.alert("Email atualiado!", "Seu email foi atualizado com sucesso!");
            navigation.goBack();
        }
    }

    return (
        <ContainerScreen>
            {isFocused && <StatusBar backgroundColor="#3BC9DB" style="light" animated={true} />}
            <View>
                <Text style={style.titleUpdateEmail}>Mudança de Login (Email)</Text>
                <Text style={style.descriptionUpdateEmail}>Siga o passo a passo para mudar seu login</Text>
            </View>
            <Input
                placeholder={"Digite o novo e-mail"}
                title={"Novo e-mail"}
                value={newEmail}
                onChange={setNewEmail}
            />
            <Input
                placeholder={"Digite o novo e-mail novamente"}
                title={"Confirmar e-mail"}
                onChange={setNewEmailClone}
                value={newEmailClone}
            />
            <TouchableOpacity
                style={style.sendButton}
                onPress={() => {
                    updateEmail();
                }}
            >
                <Text style={style.sendButtonText}>Atualizar Email</Text>
            </TouchableOpacity>
        </ContainerScreen>
    )
}

const style = StyleSheet.create({
    titleUpdateEmail: {
        fontFamily: "Montserrat_700Bold",
        color: "#fff",
        fontSize: 18,
        marginBottom: 5
    },
    descriptionUpdateEmail: {
        fontFamily: "Montserrat_400Regular",
        color: "#fff",
        marginBottom: 15
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

export default ChangeLogin;