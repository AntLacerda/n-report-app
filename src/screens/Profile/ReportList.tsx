import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import { useEffect, useState } from "react";
import Ocurrence from "../../interfaces/Ocurrence";
import api from "../../api/api";

const ReportList = () => {
    const [ocurrences, setOcurrences] = useState<Ocurrence[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            const ocurrencesApi: Ocurrence[] = (await api.get("api/v1/ocurrences")).data;
            setOcurrences(ocurrencesApi);
        })();
    }, []);

    return (
        <ContainerScreen>
            {isFocused && <StatusBar backgroundColor="#3BC9DB" style="light" animated={true} />}
            <FlatList
                    contentContainerStyle={styles.Content}
                    data={ocurrences}
                    renderItem={({ item, index }) => (
                        <Text style={styles.Text}>{item.title}</Text>
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.Text}>Você não possui nehum reporte!</Text>
                    )}
            />
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    Content: {
        alignItems: 'center'
    },
    Text: {
        fontSize: 15.89,
        fontWeight: "400",
        color: "#FFFFFF"
    }
});

export default ReportList;