const fetchFromEndpoint = (endpoint = "users") =>
    fetch('https://jsonplaceholder.typicode.com/' + endpoint)
        .then(response => response.json())
        .catch(e => console.log(e.message))

const getUsers = () => fetchFromEndpoint("users")
const getUser = (id) => fetchFromEndpoint(`users/${id}`)
const getAlbums = (userId) => fetchFromEndpoint(`users/${userId}/albums`)
const getAlbum = (albumId) => fetchFromEndpoint(`albums/${albumId}`)
const getPictures = (albumId) => fetchFromEndpoint(`albums/${albumId}/photos`)

export { getUsers, getUser, getAlbum, getAlbums, getPictures }
