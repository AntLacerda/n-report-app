import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import Enter from '../../screens/Enter';
import Home from "../../screens/Home";
import Map from "../../screens/Map";
import Profile from "../../screens/Profile";
import Report from "../../screens/Report";
import { Notice } from '../../screens/Notice';
import OcurrenceSummary from '../../screens/OcurrenceSummary';


const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const Tabs = () => {
    return (
        <Navigator initialRouteName="Home" screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#3BC9DB",
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { fontSize: 13, fontWeight: '400' },
            tabBarStyle: {
                backgroundColor: "#464646",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderStyle: "dashed",
                position: 'absolute',
                overflow: 'hidden',
                height: 60,
            },
            tabBarButton: (props) => (
                <TouchableOpacity
                    {...props}
                    style={[
                        props.style,
                        props.accessibilityState.selected
                            ? { borderTopColor: "#3BC9DB", borderTopWidth: 2 }
                            : { borderTopColor: "#292929", borderTopWidth: 2},
                    ]}
                />
            ),
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

const PrivateRouters = () => {
    return (
        <Stack.Navigator initialRouteName="enter" screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="enter" component={Enter} />
            <Stack.Screen name="tabs" component={Tabs} />
            <Stack.Screen name="notice" component={Notice} />
            <Stack.Screen name="map" component={Map}/>
            <Stack.Screen name='ocurrenceSummary' component={OcurrenceSummary} options={{
                animation: "slide_from_bottom",
                title: null,
                headerShown: true,
                headerTintColor: "#FFFFFF",
                statusBarColor: "#292929",
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: "#292929"
                }
            }} />

        </Stack.Navigator>
    )
}

export default PrivateRouters;