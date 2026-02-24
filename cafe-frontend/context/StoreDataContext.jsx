import React, {useState, useEffect, createContext} from 'react'


export const StoreDataContext = createContext(null);

const StoreDataContextProvider = (props) => {
    const [token , setToken] = useState('');
    const backendUrl = "http://localhost:4000";

    useEffect(()=>{
        const storeToken = localStorage.getItem("token");
        if(storeToken){
            setToken(storeToken);
        }
    },[])

    const contextValue = {
        token,
        setToken,
        backendUrl
    }

    return (
        <StoreDataContext.Provider value={contextValue}>
            {props.children}
        </StoreDataContext.Provider>
    )

}

export default StoreDataContextProvider;