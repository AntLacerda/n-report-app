import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from "react-native"

interface Props {
    iconName: any,
    onPress: () => void
}

const FloatButton = ({ iconName, onPress }: Props): React.JSX.Element => {
    return (
        <TouchableOpacity style={styles.FloatButton} onPress={onPress}>
            <Ionicons
                name={iconName}
                color={'white'}
                size={50}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    FloatButton: {
        backgroundColor: "#3BC9DB",
        zIndex: 1,
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 100,
        bottom: 86,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})

export default FloatButton;