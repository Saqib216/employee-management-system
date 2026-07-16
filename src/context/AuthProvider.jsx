import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"; // since we exported this function 

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Only seed data if localStorage is empty (first time)
        if (!localStorage.getItem('employees')) {
            setLocalStorage();
        }
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    // Save updated userData to localStorage whenever it changes
    useEffect(() => {
        if (userData) {
            localStorage.setItem('employees', JSON.stringify(userData.employees));
            localStorage.setItem('admin', JSON.stringify(userData.admin));
        }
    }, [userData]);

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider