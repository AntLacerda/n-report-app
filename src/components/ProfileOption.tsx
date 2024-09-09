import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"

interface Props {
    iconName: any,
    title: string,
    hasBorderBottom?: boolean,
    isAllRedColor?: boolean
    onPress: () => void
}

const ProfileOption = ({ iconName, title, hasBorderBottom, isAllRedColor, onPress }: Props): React.JSX.Element => {
    const color = isAllRedColor ? '#F24E1E' : '#FFFFFF'

    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.ProfileOption, hasBorderBottom ? {borderBottomColor: color, borderBottomWidth: 0.2} : {}]}>
                <Ionicons
                    name={iconName}
                    color={isAllRedColor ? color : '#3BC9DB'}
                    size={24}
                />
                <Text style={{fontSize: 16, color: color}}>{title}</Text>
                <Ionicons
                    name={"arrow-forward-sharp"}
                    color={color}
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
        display: 'flex',
        flexDirection: 'row'
    }
})

export default ProfileOption;