import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import ContainerScreen from "../../components/ContainerScreen";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "enter">
}

const Enter = ({ navigation }: Props): React.JSX.Element => {
    return (
        <ContainerScreen>
            <View style={styles.Conteiner}>
                <View style={{marginBottom: 70}}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logoImage} />
                    </View>
                    <View>
                        <Text style={styles.title}>{`A maneira mais\nsimples de\nreportar\num crime!`}</Text>
                    </View>
                </View>
                <Button title={"Começar"} onPress={() => navigation.navigate("tabs")} />
                <Text onPress={() => console.log("Redirect to README.md")} style={styles.Link}>Acesse os termos de uso</Text>
            </View>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        paddingVertical: 60,
    },
    logoImage: {
        width: 200,
        height: 200,
    },
    title: {
        fontFamily: "Montserrat_800ExtraBold",
        color: "#fff",
        fontSize: 40,
        lineHeight: 40,
    },
    Conteiner: {
        paddingTop: 36
    },
    Link: {
        fontWeight: "300",
        fontSize: 16,
        textAlign: "center",
        color: "white",
        textDecorationLine: "underline"
    }
})

export default Enter;