import { Text, TouchableOpacity } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "profile">
}

const Profile = ({ navigation }: Props) => {
    const { setIsAuth } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
        } catch(error) {
            console.error("Error on try get token from async storage");
        }

        setIsAuth(false);
    }

    return (
        <ContainerScreen>
            <Text>Profile</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </ContainerScreen>
    )
}

export default Profile;