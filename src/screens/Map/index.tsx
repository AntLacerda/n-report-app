import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

interface Region {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

const Map = () => {
    const [location, setLocation] = useState<Region>(null);

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
    }, []);

    return (
        <>
            <MapView
                style={styles.Map}
                initialRegion={location}
            />
        </>
    );
};

const styles = StyleSheet.create({
    Map: {
        flex: 1
    }
});

export default Map;