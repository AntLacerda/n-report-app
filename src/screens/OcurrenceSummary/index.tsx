import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import ContainerScreen from "../../components/ContainerScreen"
import { RouteProp, useIsFocused, useRoute } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import Ocurrence from "../../interfaces/Ocurrence";

type OcurrenceSummaryProp = RouteProp<{ OcurrenceSummary: { ocurrence: Ocurrence } }, 'OcurrenceSummary'>;

const OcurrenceSummary = (): React.JSX.Element => {
    const { ocurrence } = useRoute<OcurrenceSummaryProp>().params;
    const isFodused = useIsFocused();

    return (
        <ContainerScreen>
            {isFodused && <StatusBar hidden />}
            <View style={styles.Badge}>
                <Text style={styles.BadgeText}>{ocurrence.type}</Text>
            </View>
            <Text style={styles.Title}>{ocurrence.title}</Text>
            <View>
                <Text style={styles.Text}>{ocurrence.date}</Text>
                <Text style={styles.Text}>{ocurrence.time}</Text>
                <Text style={styles.Text}>{ocurrence.description}</Text>
            </View>
            <Text style={styles.SubTitle}>Imagens</Text>
            <FlatList
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    columnWrapperStyle={styles.columnWrapper}
                    data={ocurrence.Images}
                    renderItem={({ item, index }) => (
                        <Image
                            key={index}
                            style={styles.Image}
                            src={item.path}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.Text}>A ocorrência não possui nenhuma imagem!</Text>
                    )}
                />
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    Badge: {
        width: 70,
        height: 25,
        borderRadius: 3,
        backgroundColor: "#3BC9DB",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        marginTop: 10
    },
    Info: {
        width: "100%",
    },
    Title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 20,
        fontWeight: "600",
        color: "#FFFFFF",
        marginBottom: 10
    },
    SubTitle: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 18,
        fontWeight: "600",
        color: "#FFFFFF",
        marginVertical: 10
    },
    BadgeText: {
        fontSize: 9.89,
        fontWeight: "400",
        color: "#FFFFFF"
    },
    Text: {
        fontSize: 15.89,
        fontWeight: "400",
        color: "#FFFFFF"
    },
    Image: {
        width: 180,
        height: 180
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 16
    },
});

export default OcurrenceSummary;