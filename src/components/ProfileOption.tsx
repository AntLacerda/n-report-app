import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"

interface Props {
    iconName: any,
    title: string,
    onPress: () => void
}

const ProfileOption = ({ iconName, title, onPress }: Props): React.JSX.Element => {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.ProfileOption}>
                <Ionicons
                    name={iconName}
                    color={'#3BC9DB'}
                    size={24}
                />
                <Text style={{fontSize: 16, color: '#FFFFFF'}}>{title}</Text>
                <Ionicons
                    name={"arrow-forward-sharp"}
                    color={'#FFFFFF'}
                    size={24}
                />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    ProfileOption: {
        width: 320,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    }
})

export default ProfileOption;