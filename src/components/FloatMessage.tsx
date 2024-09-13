import { StyleSheet, Text, View } from "react-native";

interface Props {
    message: string
}

const FloatMessage = ({ message }: Props): React.JSX.Element => {
    return (
        <View style={styles.FloatMessage}>
            <Text style={styles.Text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FloatMessage: {
        backgroundColor: "#3BC9DB",
        zIndex: 1,
        position: "absolute",
        top: 40,
        alignSelf: "center",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        paddingHorizontal: 23
    },
    Text: {
        fontWeight: "400",
        color: "#FFFFFF"
    }
})

export default FloatMessage;