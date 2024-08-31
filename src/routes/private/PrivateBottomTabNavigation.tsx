import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Map from "../../screens/Map";
import Report from "../../screens/Report";
import Profile from "../../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

const PrivateBottomTabNavigation = () => {
    return (
        <Navigator initialRouteName="Remider" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#3BC9DB",
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { fontSize: 13, fontWeight: '400' },
            tabBarStyle: {
                backgroundColor: "#464646"
            },
            // tabBarHideOnKeyboard: true,
        })}>
            <Screen name="Home" component={Home} />
            <Screen name="Map" component={Map} />
            <Screen name="Report" component={Report} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    )
}

export default PrivateBottomTabNavigation;