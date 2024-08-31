import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
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
            tabBarHideOnKeyboard: true,
        })}>
            <Screen name="Home" component={Home} options={{
                tabBarLabel: "Início",
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? "home-outline" : "home-sharp"}
                        color={color}
                        size={size}
                    />
                )
            }} />
            <Screen name="Map" component={Map} options={{
                tabBarLabel: "Mapa",
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? "location-outline" : "location-sharp"}
                        color={color}
                        size={size}
                    />
                )
            }} />
            <Screen name="Report" component={Report} options={{
                tabBarLabel: "Reportar",
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? "megaphone-outline" : "megaphone"}
                        color={color}
                        size={size}
                    />
                )
            }} />
            <Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Perfil",
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? "person-outline" : "person-sharp"}
                        color={color}
                        size={size}
                    />
                )
            }} />
        </Navigator>
    )
}

export default PrivateBottomTabNavigation;