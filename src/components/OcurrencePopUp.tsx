import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Ocurrence from "../interfaces/Ocurrence";

interface Props {
    ocurrence: Ocurrence;
    open: boolean;
    onRequestClose: () => void;
}

const OcurrencePopUp = ({ ocurrence, open, onRequestClose }: Props): React.JSX.Element => {
    return (
        <Modal
            visible={open}
            onRequestClose={onRequestClose}
            animationType="fade"
            statusBarTranslucent
            transparent
        >
            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={styles.Overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.Modal}>
                            <Text style={styles.Title}>{ocurrence.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    Overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Modal: {
        borderColor: "#3BC9DB",
        borderTopWidth: 5,
        backgroundColor: "#464646",
        width: 277,
        height: 209,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF"
    }
});

export default OcurrencePopUp;
