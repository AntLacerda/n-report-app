import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, Button, Image, ScrollView, Alert } from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { 
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject
} from "expo-location";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import imageIcon from '../../assets/icons/imageIcon.png';
import { findAllPoliceStations } from "../../services/findAllPoliceStations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createOcurrenceRoute } from "../../services/createOcurrenceRoute";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "enter">
}

const Report = ({navigation}:Props) => {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [position, setPosition] = useState({latitude: 0, longitude: 0});
    const [selectedType, setSelectedType] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState(new Date());
    const [show, setShow] = useState(false);
    const [exibe, setExibe] = useState(false);
    const [showDate, setShowDate] = useState("dd/mm/yyyy");
    const [showHour, setShowHour] = useState("00:00");
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState("");
    const [policeStations, setPoliceStations] = useState([]);
    const [policeStationId, setPoliceStationId] = useState("");

    const [imagesPath, setImagesPath] = useState([]);

    const createOcurrence = async () => {
        try {
            const data = new FormData();
    
            data.append('title', title);
            data.append('description', description);
            data.append('type', selectedType);
            data.append('latitude', String(location.coords.latitude));
            data.append('longitude', String(location.coords.longitude));
            data.append('date', showDate);
            data.append('time', showHour);
            data.append('user_id', await AsyncStorage.getItem('userId'));
            data.append('policeStation_id', policeStationId);
            
            imagesPath.forEach((imageURI, index) => {
                data.append('images', {
                    name: `image_${index}.jpg`,
                    type: 'image/jpg',
                    uri: imageURI,
                } as any);
            });
            
            //await createOcurrenceRoute(data, await AsyncStorage.getItem('token'));

            navigation.reset({
                index: 0,
                routes: [{name: 'Report'}]
            });
            
            navigation.navigate("Map");
        } catch (error) {
            if (error.response) {
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Error request:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
        }
    }

    const handleSelectImages = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status !== 'granted'){
            alert('É necessário acesso à câmera!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if(!result.canceled) {
            setImagesPath([...imagesPath, result.assets[0].uri]);
        }
    }

    const removeImage = (index: number) => {
        const updatedImages = imagesPath.filter((_, i) => i !== index);
        setImagesPath(updatedImages);
    }

    const requestLocationPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    const requestPoliceStations = async () => {
        const policeStations = await findAllPoliceStations();

        setPoliceStations(policeStations);
    }

    const handleSelectMapPosition = (event: MapPressEvent) => {
        setPosition(event.nativeEvent.coordinate);
    }

    const onChangeDate = (event, date) => {
        if (date) {
            const currentDate = date || selectedDate;
            setShow(false); 
            setSelectedDate(currentDate);
            setShowDate(currentDate.toLocaleDateString()); 
        }
    }

    const onChangeHour = (event, hour) => {
        if (hour) {
            const currentHour = hour || selectedHour;
            setExibe(false); 
            setSelectedHour(currentHour);
            setShowHour(currentHour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    }

    const showDatePicker = () => {
        setShow(true); 
    }

    const showHourPicker = () => {
        setExibe(true); 
    }

    useEffect(() => {
        requestLocationPermissions();
        requestPoliceStations();
    
    }, []);

    return (
        <View style={style.container}>
            <ScrollView style={{marginBottom: 50}}>
            <View style={style.topContainer}>
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
                                onPress={handleSelectMapPosition}
                            >
                                {
                                    position.latitude != 0 ? (
                                        <Marker
                                            coordinate={{
                                                latitude: position.latitude,
                                                longitude: position.longitude,
                                            }}
                                        />
                                    ) : (
                                        <Marker
                                            coordinate={{
                                                latitude: location.coords.latitude,
                                                longitude: location.coords.longitude,
                                            }}
                                        />
                                    ) 
                                }
                                
                            </MapView>
                        ) : (
                            <Text>Carregando mapa...</Text>
                        )}
                    </View>
                    <View style={style.containerMessage}>
                        <Text style={style.message}>Utilize o mapa para definir o local do crime</Text>
                    </View>
                </View>
                <View style={style.formContainer}>
                    <Text style={style.formTitle}>Reportar</Text>
                    <Text style={style.formDescription}>Utilize as informações para reportar o crime.</Text>
                    <View style={style.inputContainer}>
                        <TextInput 
                            style={style.genericInput} 
                            placeholder="Título do Reporte" 
                            placeholderTextColor="#fff"
                            value={title}
                            onChangeText={text=>setTitle(text)}
                        />
                        <View>
                            <TouchableOpacity onPress={showDatePicker} style={style.dateInput}>
                                <Text style={style.dateText}>{showDate}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={showHourPicker} style={style.dateInput}>
                                <Text style={style.dateText}>{showHour}</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            show && (
                                <DateTimePicker
                                    value={selectedDate}
                                    mode="date" 
                                    display={Platform.OS === 'android' ? 'default' : 'spinner'}
                                    onChange={onChangeDate}
                                    minimumDate={new Date(2000, 0, 1)}
                                />
                            )
                        }
                        {
                            exibe && (
                                <DateTimePicker
                                    value={selectedHour}
                                    mode="time" 
                                    display={Platform.OS === 'android' ? 'default' : 'spinner'}
                                    onChange={onChangeHour}
                                    minimumDate={new Date(2000, 0, 1)}
                                />
                            )
                        }
                        <TextInput 
                            style={style.genericInput} 
                            placeholder="Descrição" 
                            placeholderTextColor="#fff"
                            value={description}
                            onChangeText={text=>setDescription(text)}
                        />

                        <Picker
                            selectedValue={selectedType}
                            onValueChange={(itemValue, itemIndex)=>setSelectedType(itemValue)}    
                            style={style.genericInput}
                            dropdownIconColor="#3BC9DB"
                        >
                            <Picker.Item label="Tipo do crime" value="" enabled={false}/>
                            <Picker.Item label="Furto" value="furto"/>
                            <Picker.Item label="Assalto" value="Assalto"/>
                        </Picker>

                        <Picker
                            selectedValue={policeStationId}
                            onValueChange={(itemValue, itemIndex)=>setPoliceStationId(itemValue)}    
                            style={style.genericInput}
                            dropdownIconColor="#3BC9DB"
                        >
                            <Picker.Item label="Delegacia" value="" enabled={false}/>
                            {
                                policeStations.map((pStation, index)=>(
                                    <Picker.Item label={pStation.name} value={pStation.id} key={pStation.id}/>
                                ))
                            }
                        </Picker>

                        <View style={style.imageContainer}>
                            {
                                imagesPath.map((imgUri, index) => (
                                    <View key={index} style={style.imageWrapper}>
                                        <Image style={style.imageReport} source={{uri: imgUri}}/>
                                        <TouchableOpacity onPress={() => removeImage(index)}>
                                            <Text style={style.removeText}>Remover</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </View>
                        <TouchableOpacity
                            onPress={handleSelectImages}
                            style={style.updateImageButton}
                        >
                            <Image style={style.updateImageButtonIcon} source={imageIcon}></Image>
                            <Text style={style.updateImageButtonText}>Add imagem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.reportButton} onPress={createOcurrence}>
                            <Text style={style.reportButtonText}>Reportar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#292929",
        height: "100%"
    },
    topContainer:{
        alignItems: 'center'
    },
    containerMessage: {
        width:'85%',
        height: 35,
        backgroundColor: "#3BC9DB",
        position: 'absolute',
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.50, 
        shadowRadius: 4,
        elevation: 4, 
    },
    message: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular'
    },
    containerMap: {
        width: '100%',
        height: 300,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    formContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24 
    },
    formTitle: {
        fontSize: 18,
        fontFamily: "Montserrat_700Bold",
        color: "#fff",
    },
    formDescription: {
        fontFamily: "Montserrat_400Regular",
        color: "#fff",
        marginBottom: 20
    },
    inputContainer: {
        gap: 10,
    },
    genericInput: {
        height: 55,
        width: "100%",
        backgroundColor: "#464646",
        borderRadius: 5,
        borderBottomColor: "#3BC9DB",
        borderBottomWidth: 5,
        padding: 10,
        color: "#fff",
        fontFamily: "Montserrat_400Regular",
        fontSize: 16
    },
    dateInput: {
        height: 55,
        padding: 10,
        backgroundColor: "#464646",
        borderRadius: 5,
        borderBottomColor: "#3BC9DB",
        borderBottomWidth: 5,
        justifyContent: 'center'
    },
    dateText: {
        color: '#fff',
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,

    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 10,

    },
    imageWrapper: {
        alignItems: 'center'
    },
    imageReport: {
        width: 64,
        height: 64,
        borderRadius: 10,
    },
    removeText: {
        color: '#ff4d4d',
        fontFamily: "Montserrat_700Bold",
        marginTop: 5
    },
    updateImageButton: {
        height: 80,
        padding: 10,
        backgroundColor: "#464646",
        borderRadius: 5,
        borderColor: "#3BC9DB",
        borderBottomWidth: 5,
        alignItems: "center",
        justifyContent:"center"
    },
    updateImageButtonIcon: {
        width: 20,
        height: 20
    },
    updateImageButtonText: {
        color: "#fff",
        fontFamily: "Montserrat_400Regular"
    },
    reportButton: {
        width: '100%',
        height: 55,
        backgroundColor: '#3BC9DB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    reportButtonText: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
    }
});

export default Report;
