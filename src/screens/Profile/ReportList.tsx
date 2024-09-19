import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import { useEffect, useState } from "react";
import Ocurrence from "../../interfaces/Ocurrence";
import api from "../../api/api";
import OcurrenceCard from "../../components/OcurrenceCard";

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
                    renderItem={({ item }) => (
                        <OcurrenceCard key={item.id} ocurrence={item} />
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.Text}>Você não possui nenhum reporte!</Text>
                    )}
            />
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    Content: {
        paddingBottom: 50,
        alignItems: 'center',
        gap: 15
    },
    Text: {
        fontSize: 15.89,
        fontWeight: "400",
        color: "#FFFFFF"
    }
});

export default ReportList;