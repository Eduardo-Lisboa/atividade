import { NavigationContainer } from "@react-navigation/native";
import login from "../pages/login";
import Tab from "./Tab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "../context/auth";

const navegacaoStack = createNativeStackNavigator();

export default function Stack() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <navegacaoStack.Navigator>
                    <navegacaoStack.Screen
                        name="Login"
                        component={login}
                        options={{ title: "Login" }}
                    />
                    <navegacaoStack.Screen
                        name="Tab"
                        component={Tab}
                        options={{ headerShown: false }}
                    />
                </navegacaoStack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
