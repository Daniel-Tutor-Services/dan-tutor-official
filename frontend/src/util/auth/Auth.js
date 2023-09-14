import { useEffect,useState } from "react";



export const Auth = () => {
    const[auth ,setAuth] = useState({})
    useEffect(()=>{
        setAuth(JSON.parse(localStorage.getItem('auth')))
    },[])

    if(auth) return auth.token

    return false
}
