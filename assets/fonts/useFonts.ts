import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";

export default function useCustomFonts(){
    return useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    });
}