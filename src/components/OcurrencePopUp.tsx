import Ionicons from '@expo/vector-icons/Ionicons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Ocurrence from "../interfaces/Ocurrence";

interface Props {
    ocurrence: Ocurrence;
    open: boolean;
    onRequestClose: () => void;
}

type NagivigationProps = NativeStackNavigationProp<ParamListBase, "Map">;

const OcurrencePopUp = ({ ocurrence, open, onRequestClose }: Props): React.JSX.Element => {
    const navigation = useNavigation<NagivigationProps>();

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
                            <View style={styles.Info}>
                                <Ionicons
                                    name={"arrow-back-outline"}
                                    color={'white'}
                                    size={22}
                                    onPress={onRequestClose}
                                />
                                <View style={styles.Badge}>
                                    <Text style={styles.Text}>{ocurrence.type}</Text>
                                </View>
                                <Text style={styles.Title}>{ocurrence.title}</Text>
                                <View>
                                    <Text style={styles.Text}>{ocurrence.date}</Text>
                                    <Text style={styles.Text}>{ocurrence.time}</Text>
                                    <Text style={styles.Text}>{ocurrence.description.length > 140 ? `${ocurrence.description.substring(0, 140).trim()}...` : ocurrence.description}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ocurrenceSummary")}>
                                <Text style={styles.Text}>Saiba mais</Text>
                            </TouchableOpacity>
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
        padding: 7,
        paddingLeft: 15,
        paddingBottom: 12,
        alignItems: "center",
        justifyContent: "space-between"
    },
    Badge: {
        width: 68,
        height: 20,
        borderRadius: 3,
        backgroundColor: "#3BC9DB",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        marginTop: 10
    },
    Info: {
        width: "100%",
    },
    Title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        marginBottom: 10
    },
    Text: {
        fontSize: 9.89,
        fontWeight: "400",
        color: "#FFFFFF"
    },
    button: {
        width: 156,
        backgroundColor: "#3BC9DB",
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"

    }
});

export default OcurrencePopUp;
