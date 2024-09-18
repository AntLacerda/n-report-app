import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import MyReports from "./MyReports";
import ChangePassword from "./ChangePassword";
import ChangeLogin from "./ChangeLogin";

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <Navigator initialRouteName="profile" screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
            <Screen name="profile" component={Profile} />
            <Screen
                name="myReports"
                component={MyReports}
                options={{
                    title: "Meus reportes",
                    headerTitleAlign: "center",
                    headerShown: true,
                    headerTintColor: "#FFFFFF",
                    headerStyle: {
                        backgroundColor: "#3BC9DB"
                    }
                }}
            />
            <Screen name="changePassword" component={ChangePassword} />
            <Screen name="chnageLogin" component={ChangeLogin} />
        </Navigator>
    )
}

export default ProfileStackNavigation;