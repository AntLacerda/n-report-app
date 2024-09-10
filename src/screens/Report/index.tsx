import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { 
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject
} from "expo-location";
import { useState, useEffect } from "react";

const Report = () => {
    const [location, setLocation] = useState<LocationObject | null>(null);

    const requestLocationPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    return (
        <View>
            <View style={style.containerMap}>
                {location ? (
                    <MapView 
                        style={style.map}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}
                        />
                    </MapView>
                ) : (
                    <Text>Carregando mapa...</Text>
                )}
            </View>
            <Text>Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerMap: {
        width: '100%',
        height: 300,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});

export default Report;
