import React, { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(email, password) {
        if (email !== "" && password !== "") {
            setUser({ email: "email", status: "ATIVO" });
            navigation.navigate("Tab");
        }

        return (
            <AuthContext.Provider value={{ nome: "Eduardo", signIn, user }}>
                {children}
            </AuthContext.Provider>
        );
    }
}
