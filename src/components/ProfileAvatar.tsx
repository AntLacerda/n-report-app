import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import api from "../api/api";

const ProfileAvatar = (): React.JSX.Element => {
    const [avatar, setAvatar] = useState<string>("https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg");

    useEffect(() => {
        async function getAvatar() {
            const userAvatar = (await api.get('/api/v1/users/profile')).data.avatar;
            if (userAvatar != null) {
                setAvatar(userAvatar);
            }
        }

        getAvatar();
    }, [])

    return (
        <View style={styles.ProfileAvatar}>
            <Image src={avatar} style={styles.Avatar} />
            <Ionicons
                style={styles.IconEdit}
                name={"pencil-outline"}
                color={'white'}
                size={22}
                onPress={() => console.log('to edit user screen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ProfileAvatar: {
        flexGrow: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Avatar: {
        borderRadius: 100,
        width: 120,
        height: 120
    },
    IconEdit: {
        position: 'relative',
        bottom: 35,
        left: 40,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#3BC9DB'
    }
})

export default ProfileAvatar;