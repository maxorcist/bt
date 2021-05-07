import UserCardList from "../UserCardList/UserCardList";
import {getUsers} from "../../utils/httpGet";
import {useEffect, useState} from "react";
import {getFavorites, storeFavorites} from "../../utils/localstorage";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const UsersPage = () => {
    const [users, setUsers] = useState([])
    const [fave, setFave] = useState(getFavorites())
    useEffect(() => {
        getUsers().then(setUsers)
    }, [])
    useEffect(() => {
        storeFavorites(fave);
    }, [fave])
    const toggleFave = (id) => {
        if (!fave.includes(id)) {
            setFave([...fave, id])
        } else {
            setFave(fave.filter(x => x !== id))
        }
    }

    return (
        <main>
            <Breadcrumbs />
            <h2>Favorites</h2>
            <hr />
            <UserCardList
                items={users.filter(x => fave.includes(x.id))}
                toggleFave={toggleFave}
            />
            <h2>Users</h2>
            <hr />
            <UserCardList
                items={users.filter(x => !fave.includes(x.id))}
                toggleFave={toggleFave}
            />
        </main>
    )
};

export default UsersPage;