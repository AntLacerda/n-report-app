import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import Ocurrence from "../interfaces/Ocurrence";

interface Props {
    ocurrence: Ocurrence;
    open: boolean;
    onRequestClose: () => void
}

const OcurrencePopUp = ({ ocurrence, open, onRequestClose }: Props): React.JSX.Element => {
    return (
        <Modal
            visible={open}
            onRequestClose={onRequestClose}
            animationType="fade"
            transparent
        >
            <View style={styles.Modal}>
                <Text>{ocurrence.title}</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    Modal: {
        borderColor: "#3BC9DB",
        borderTopWidth: 5,
        backgroundColor: "#464646",
        width: 277,
        height: 209,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        top: Dimensions.get("screen").height / 2.7
    },
    Title: {
        fontSize: 16,
        fontWeight: 600,
        color: "#FFFFFF"
    }
})

export default OcurrencePopUp;