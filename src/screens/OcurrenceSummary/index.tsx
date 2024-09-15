import { Text } from "react-native"
import ContainerScreen from "../../components/ContainerScreen"
import { useIsFocused } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";

const OcurrenceSummary = (): React.JSX.Element => {
    const isFodused = useIsFocused();

    return (
        <ContainerScreen>
            {isFodused && <StatusBar hidden />}
            <Text>OcurrenceSummary</Text>
        </ContainerScreen>
    )
}

export default OcurrenceSummary;