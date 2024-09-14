import { ParamListBase, useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import api from "../../api/api";
import ContainerScreen from "../../components/ContainerScreen";
import FloatButton from "../../components/FloatButton";
import FloatMessage from "../../components/FloatMessage";
import OcurrencePopUp from "../../components/OcurrencePopUp";
import Ocurrence from "../../interfaces/Ocurrence";

interface Region {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "Map">
}

const Map = ({ navigation }: Props) => {
    const isFocused = useIsFocused();
    const [location, setLocation] = useState<Region>(null);
    const [ocurrences, setOcurrences] = useState<Ocurrence[]>([]);
    const [openOcurrencePopUp, setOpenOcurrencePopUp] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLocation({
                    latitude: -15.849943888368829,
                    longitude: -47.44408408207241,
                    latitudeDelta: 10,
                    longitudeDelta: 10
                })
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            });
        })();

        (async () => {
            const ocurrencesApi: Ocurrence[] = (await api.get("api/v1/ocurrences")).data;
            setOcurrences(ocurrencesApi);
        })();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isFocused && <StatusBar hidden />}
            {location ? (
                <>
                    <FloatMessage message="Atualize a página para carregar os crimes" />
                    <MapView
                        style={styles.Map}
                        initialRegion={location}
                        showsUserLocation
                    >
                        {ocurrences.map((ocurrence) => (
                            <Marker
                                key={ocurrence.id}
                                title={ocurrence.title}
                                description={ocurrence.description}
                                coordinate={ocurrence}
                                onPress={() => {
                                    setOpenOcurrencePopUp(true)
                                }}
                            >
                                <OcurrencePopUp ocurrence={ocurrence} open={openOcurrencePopUp} onRequestClose={() => setOpenOcurrencePopUp(false)} />
                            </Marker>
                        ))}
                    </MapView>
                    <FloatButton iconName="add-outline" onPress={() => navigation.navigate("Report")} />
                </>
            ) : (
                <ContainerScreen>
                    <></>
                </ContainerScreen>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Map: {
        flex: 1
    }
});

export default Map;