import { createContext, useState } from "react";
import { Roles } from "../models/roles";
import { User } from "../models/User";

interface AuthContextI {
    user: null  | User;
    userRole: null | Roles;
    setUser: (user: User | null) => void;
    setUserRole: (role: Roles | null) => void;
}

export const AuthContext = createContext<AuthContextI | null>(null);


const authContextInitialState: AuthContextI = {
    user: null,
    userRole: null,
    setUser: () => {},
    setUserRole: () => {}
};

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [userRole, setUserRole] = useState<Roles | null>(null);

    return (
        <AuthContext.Provider value={{user, userRole, setUser, setUserRole}}>
            {children}
        </AuthContext.Provider>
    )
}