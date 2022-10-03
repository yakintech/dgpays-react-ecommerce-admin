import { createContext, useEffect, useState } from "react";
import { storageHelper } from "../utils/localStorageService/storageHelper";



export const favoritesProductContext = createContext(null);


export const FavoritesProductProvider = ({ children }) => {

    //Global state
    const [favorites, setfavorites] = useState([]);

    useEffect(() => {

        var favorites = storageHelper.getFavoritesFromStorage();
        if (favorites)
            setfavorites([...favorites]);

    }, [])


    const values = {
        favorites,
        setfavorites
    }



    return <favoritesProductContext.Provider value={values}>{children}</favoritesProductContext.Provider>

}