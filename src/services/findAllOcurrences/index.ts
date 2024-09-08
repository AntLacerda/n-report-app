import api from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const findAllOcurrences = async () => {
    const token = await AsyncStorage.getItem('token');

    try {
        const response = await api.get('/api/v1/ocurrences/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const ocurrences = response.data;

        return ocurrences;
    } catch (error) {
        console.log("Error on try find all ocurrences: ", error);
    }
}

export { findAllOcurrences };