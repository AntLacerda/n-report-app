import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import ChangeLogin from "./ChangeLogin";
import ReportList from "./ReportList";
import EditReport from "../EditReport";

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <Navigator initialRouteName="profile" screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
            <Screen name="profile" component={Profile} />
            <Screen
                name="reportList"
                component={ReportList}
                options={{
                    title: "Lista de Reportes",
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
            <Screen name="editReport" component={EditReport} />
        </Navigator>
    )
}

export default ProfileStackNavigation;