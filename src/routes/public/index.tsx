import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

const PublicStackNavigation = () => {
    return (
        <Navigator initialRouteName="login" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Screen name="login" component={Login} />
            <Screen name="signup" component={Signup} />
        </Navigator>
    )
}

export default PublicStackNavigation;