import { Image, StyleSheet, Text, View } from "react-native";

const HeaderWithLogo = ({image, title}) => {
    return (
        <>
            <View style={styles.logoContainer}>
                <Image source={image} style={styles.logoImage} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60,
    },
    logoImage: {
        width: 40,
        height: 40,
    },
    title: {
        fontFamily: "Montserrat_800ExtraBold",
        color: "#fff",
        fontSize: 40,
        lineHeight: 40,
    }
});

export default HeaderWithLogo;