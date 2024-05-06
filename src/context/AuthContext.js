import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null);

    const setAuthToken = (token) => {
        setJwt(token);
    };

    return (
        <AuthContext.Provider value={{ jwt, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
