import { Text, View, Image, StyleSheet } from "react-native";

const StatisticCard = ({icon, title, amount}) => {
    return (
        <View style={style.container}>
            <View style={style.upSubContainer}>
                <View style={style.iconContainer}>
                    <Image source={icon} style={style.icon}/>
                </View>
                <Text style={style.title}>{title}</Text>
            </View>
            <View style={style.amountContainer}>
                <Text style={style.amount}>{amount}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 170,
        height: 130, 
        backgroundColor: '#464646',
        borderRadius: 10,
        borderTopColor: '#3BC9DB',
        borderTopWidth: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    upSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3BC9DB',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20
    },
    title: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        color: '#fff',
        width: '50%'
    },
    amountContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    amount: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 36,
        color: '#fff',
    }
});

export { StatisticCard };