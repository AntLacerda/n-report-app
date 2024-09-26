import { Text, StyleSheet, View, Image, SafeAreaView, TextComponent } from "react-native";
import back from "../../assets/images/background.png";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

const Notice = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={style.container}>
            <View>
                <Image source={back} style={style.backgroundImg}/>
            </View>
            <View style={style.arrowIcon}>
                <Ionicons
                    name={"arrow-back-outline"}
                    color={'white'}
                    size={32}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
            </View>
            <View style={style.titleNoticeContainer}>
                <View style={style.typeNotice}>
                    <Text style={style.titleTextNotice}>Notícias</Text>
                </View>
                <Text style={style.titleNotice}>Funciona mesmo?</Text>
                <Text style={style.descriptionNotice}>Descubra a importância de  {"\n"}reportar um crime no N-Report.</Text>
            </View>
            <View style={style.noticeContainer}>
                <Text style={style.noticeInit}>A importância do registro de crimes em plataformas compartilhadas</Text>
                <Text style={style.noticeText}>Em um mundo cada vez mais conectado, a segurança pública é uma preocupação constante. Nesse contexto, o registro de crimes em uma plataforma compartilhada emerge como uma ferramenta crucial na luta contra a criminalidade.</Text>
                <Text style={style.noticeText}>A importância desse registro reside na sua capacidade de fornecer dados precisos e em tempo real sobre incidentes, auxiliando as autoridades na prevenção e investigação de delitos.</Text>
                <Text style={style.noticeText}>Uma das principais vantagens de uma plataforma compartilhada para registro de crimes é a centralização das informações.</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#292929",
        marginTop: 20,
    },
    backgroundImg: {
        width: "100%",
    },
    arrowIcon: {
        position: "absolute",
        top: 20,
        left: 20
    },
    titleNoticeContainer: {
        padding: 20,
        gap: 5,
        position: "absolute",
        top: 130
    },
    typeNotice: {
        backgroundColor: "#3BC9DB",
        width: 80,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    titleNotice: {
        color: "#FFF",
        fontFamily: "Montserrat_700Bold",
        fontSize: 24
    },
    titleTextNotice: {
        color: "#FFF",
        fontFamily: "Montserrat_400Regular"
    },
    descriptionNotice: {
        color: "#FFF",
        fontFamily: "Montserrat_400Regular",
    },
    noticeContainer: {
        padding: 20,
        gap: 15,
        
    },
    noticeInit: {
        color: "#fff",
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        marginBottom: 20
    },
    noticeText: {
        color: "#fff",
        fontFamily: "Montserrat_400Regular"
    }
})

export { Notice };