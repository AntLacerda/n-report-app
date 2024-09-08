import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import personImage from "../../assets/images/personImage.png";
import { StatisticCard } from "../../components/statisticCard";
import megafoneIcon from "../../assets/icons/megafoneIcon.png";
import groupIcon from "../../assets/icons/groupIcon.png";
import cineIcon from "../../assets/icons/cineIcon.png";
import crimeIcon from "../../assets/icons/crimeIcon.png";
import logo  from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "enter">
}


const Home = ({navigation}: Props): React.JSX.Element => {
    const { userName } = useContext(AuthContext);

    return (
        <ContainerScreen>
            <View style={style.container}>
                <View>
                    <Image source={logo} style={style.logoContainer}/>
                </View>
                <View>
                    <Text style={style.welcome}>Olá, {userName}</Text>
                    <Text style={style.welcomeDescription}>Ajude a comunidade a reportar {`\n`}crimes em sua região.</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("notice")}>
                    <View style={style.noticeContainer}>
                        <View style={style.noticeTextContainer}>
                            <Text style={style.noticeType}>Notícia</Text>
                            <Text style={style.noticeTitle}>Funciona mesmo?</Text>
                            <Text style={style.noticeDescription}>Descubra a importância de reportar um crime no N-Report.</Text>
                        </View>
                        <Image source={personImage} style={style.noticeImage}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={style.statisticTitle}>Estatísticas</Text>
                    <View style={style.statisticCardsContainer}>
                        <StatisticCard icon={megafoneIcon} title="Reportes Individuais" amount="03"/>
                        <StatisticCard icon={groupIcon} title="Total de Reportes" amount="25"/>
                        <StatisticCard icon={cineIcon} title="Total de Homicídios" amount="06"/>
                        <StatisticCard icon={crimeIcon} title="Reportes de furtos" amount="11"/>
                    </View>
                </View>
            </View>
        </ContainerScreen>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 5,
        gap: 30
    },
    logoContainer: {
        width: 30,
        height: 30,
        marginTop: 20
    },
    welcome: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 24,
    },
    welcomeDescription: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14, 
    },
    noticeContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#3BC9DB',
        width: '100%',
        height: 120,
        alignItems: 'center',
        padding: 15
    },
    noticeTextContainer: {
        width: '70%'
    },
    noticeType: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular'
    },
    noticeTitle: {
        fontSize: 22,
        fontFamily: 'Montserrat_700Bold'
    },
    noticeDescription: {
        fontSize: 13,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 10
    },
    noticeImage: {
        width: 100,
        height: 100,
    },
    statisticTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 24,
        color: '#fff',
        marginBottom: 20
    },
    statisticCardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10
    }
})

export default Home;