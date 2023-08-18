import axios from "axios";
import { Children, createContext, useContext, useEffect, useState } from "react";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user : null,
        token: ""
    })

    // default Axios
    axios.defaults.headers.common["Authorization"] = auth?.token;

    const setTokenInLocalStorage = () => {
        const data  = localStorage.getItem('auth');
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user : parseData.user,
                token : parseData.token
            })
        }
    }

    useEffect(()=>{
        setTokenInLocalStorage()
    }, [])

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


// custom Hook

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider}