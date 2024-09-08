import { Text, StyleSheet, View } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";

const Notice = () => {
    return(
        <ContainerScreen>
            <View>
                <Text style={style.container}>Noticias</Text>
            </View>
        </ContainerScreen>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#292929"
    }
})

export { Notice };