import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileAvatar from "../../components/ProfileAvatar";
import ProfileOption from "../../components/ProfileOption";

interface Props {
    navigation: NativeStackNavigationProp<ParamListBase, "profile">
}

const Profile = ({ navigation }: Props) => {
    const { setIsAuth } = useContext(AuthContext);

    const handleLogout = async () => {
        Alert.alert("Logout?", "Tem certeza que deseja fazer logout?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                isPreferred: true,
                text: "Sim",
                onPress: doLogout,
                style: "default"
            }
        ])
    }

    const doLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
        } catch(error) {
            console.error("Error on try get token from async storage");
        }

        setIsAuth(false);
    }

    return (
        <ContainerScreen>
            <ProfileAvatar />
            <View style={styles.Options}>
                <ProfileOption iconName='list-sharp' title="Meus reportes" hasBorderBottom onPress={() => navigation.navigate('myReports')} />
                <ProfileOption iconName='lock-closed' title="Mudar Senha" hasBorderBottom onPress={() => navigation.navigate('changePassword')} />
                <ProfileOption iconName='person' title="Mudar Login" hasBorderBottom onPress={() => navigation.navigate('chnageLogin')} />
                <ProfileOption iconName='log-out-outline' title="Sair da Conta" isAllRedColor onPress={handleLogout} />
            </View>
        </ContainerScreen>
    )
}

const styles = StyleSheet.create({
    Options: {
        paddingTop: 20,
        alignItems: 'center',
        borderRadius: 10,
        height: 570,
        backgroundColor: '#464646',
    }
})

export default Profile;