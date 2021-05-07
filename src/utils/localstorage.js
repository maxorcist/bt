export const storeFavorites = (favorites) => {
    localStorage.setItem("favorites", favorites)
}

export const getFavorites = () => {
    let favorites = localStorage.getItem("favorites") || [];
    return JSON.parse("[" + favorites + "]");
}
