import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import api from "../../api/api";
import ContainerScreen from "../../components/ContainerScreen";
import OcurrenceCard from "../../components/OcurrenceCard";
import { AuthContext } from "../../contexts/AuthContext";
import Ocurrence from "../../interfaces/Ocurrence";

const ReportList = () => {
    const { isAdmin } = useContext(AuthContext);
    const [ocurrences, setOcurrences] = useState<Ocurrence[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        (loadOcurrences)();
    }, []);

    const loadOcurrences = async () => {
        let ocurrencesApi: Ocurrence[] = [];

        if (isAdmin) {
            ocurrencesApi = (await api.get("api/v1/ocurrences")).data;
        } else {
            ocurrencesApi = (await api.get("api/v1/ocurrences/self")).data;
        }

        setOcurrences(ocurrencesApi);
    }

    const deleteOcurrence = async (id: string) => {
        const { status } = await api.delete(`/api/v1/ocurrences/${id}`)

        if (status === 200) {
            loadOcurrences();
        }
    }

    return (
        <ContainerScreen>
            {isFocused && <StatusBar backgroundColor="#3BC9DB" style="light" animated={true} />}
            <FlatList
                contentContainerStyle={styles.Content}
                data={ocurrences}
                renderItem={({ item }) => (
                    <OcurrenceCard
                        key={item.id}
                        ocurrence={item}
                        onDeleteOcurrence={() => deleteOcurrence(item.id)}
                    />
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