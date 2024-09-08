import React, { createContext, useState, ReactNode } from "react";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    setIsAuth: () => {
        throw new Error("Function not implemented.");
    },
    userName: ' ',
    setUserName: () => {
        throw new Error("Function not implemented.");
    }
});

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>(" ");

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};
