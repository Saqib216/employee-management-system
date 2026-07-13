import { createContext, useEffect } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    useEffect(() => {

    })
    return (
        <div>
            <AuthContext.Provider value={"Saqib"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider