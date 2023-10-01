import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Pedidos from "../pages/pedidos";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default (props) => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pedidos" component={Pedidos} />
    </Tab.Navigator>
);
