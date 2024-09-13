import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ContainerScreen from "../../components/ContainerScreen";
import Ocurrence from "../../interfaces/Ocurrence";
import api from "../../api/api";

interface Region {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

const Map = () => {
    const [location, setLocation] = useState<Region>(null);
    const [ocurrences, setOcurrences] = useState<Ocurrence[]>([]);

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
        <SafeAreaView style={{flex: 1}}>
            {location ? (
                <MapView
                    style={styles.Map}
                    initialRegion={location}
                >
                    {ocurrences.map((ocurrence) => (
                        <Marker key={ocurrence.id} description={ocurrence.description} coordinate={{latitude: ocurrence.latitude, longitude: ocurrence.longitude}} />
                    ))}
                </MapView>
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