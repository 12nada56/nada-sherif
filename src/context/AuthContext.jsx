import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => {
          return localStorage.getItem("token");
     });

     const [user, setUser] = useState(null);

     const login = (userData, userToken) => {
          setUser(userData);
          setToken(userToken);
                    
          localStorage.setItem("token", userToken);
     };

     const logout = () => {
          setUser(null);
          setToken(null);
                    
          localStorage.removeItem("token");
    };

    return (
          <AuthContext.Provider value={{ user, token, login, logout }}>
                    {children}
          </AuthContext.Provider>
    );
}

export function useAuth() {
       return useContext(AuthContext);
}