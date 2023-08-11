import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            // Fetch user details using the token or set the currentUser directly if you store it as well.
            // For simplicity, I'm just demonstrating with the token.
            setCurrentUser({ token: token }); // This is just an example, in a real-world scenario, you would probably fetch the user's data using this token.
        }
    }, [token]);

    const contextValue = {
        currentUser,
        setCurrentUser,
        token,
        setToken,
        signOut: () => {
            localStorage.removeItem('token');
            setToken(null);
            setCurrentUser(null);
        }
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
