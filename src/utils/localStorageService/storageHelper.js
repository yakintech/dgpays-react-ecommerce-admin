export const storageHelper = {

    setFavoriteToStorage: (data) => {
        //JSON.stringify ile javascript objesini json string e çeviriyorum.
        localStorage.setItem('favorites', JSON.stringify(data))
    },
    getFavoritesFromStorage: () => {
        var favorites = localStorage.getItem('favorites');
        if (favorites)
            //JSON.parse ile json objesini javascript objesine çeviriyorum.
            return JSON.parse(favorites);
        else
            return null
    }

}