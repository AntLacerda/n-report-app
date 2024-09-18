import { Text } from "react-native"
import ContainerScreen from "../../components/ContainerScreen"
import { useIsFocused } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";

const ReportList = () => {
    const isFocused = useIsFocused();

    return (
        <ContainerScreen>
            {isFocused && <StatusBar backgroundColor="#3BC9DB" style="light" animated={true} />}
            <Text>ReportList</Text>
        </ContainerScreen>
    )
}

export default ReportList;