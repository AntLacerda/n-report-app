import React, { createContext, useState, ReactNode } from "react";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    setIsAuth: () => {
        throw new Error("Function not implemented.");
    }
});

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
