import { Text, StyleSheet, View } from "react-native";
import ContainerScreen from "../../components/ContainerScreen";

const Notice = () => {
    return(
        <ContainerScreen>
            <View style={style.container}>
                <Text>Noticias</Text>
            </View>
        </ContainerScreen>
    )
}

const style = StyleSheet.create({
    container: {
        
    }
})

export { Notice };