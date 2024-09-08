import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import MyReports from "./MyReports";
import ChangePassword from "./ChangePassword";

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <Navigator initialRouteName="profile" screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
            <Screen name="profile" component={Profile} />
            <Screen name="myReports" component={MyReports} />
            <Screen name="changePassword" component={ChangePassword} />
        </Navigator>
    )
}

export default ProfileStackNavigation;