import { Text } from "react-native"
import ContainerScreen from "../../components/ContainerScreen"
import { useIsFocused } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";

const MyReports = () => {
    const isFocused = useIsFocused();

    return (
        <ContainerScreen>
            {isFocused && <StatusBar backgroundColor="#3BC9DB" style="light" />}
            <Text>MyReports</Text>
        </ContainerScreen>
    )
}

export default MyReports;