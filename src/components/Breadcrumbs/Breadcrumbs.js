import "./Breadcrumbs.css";
import {useEffect, useState} from "react";
import {getAlbum, getUser} from "../../utils/httpGet";
import {
    Link,
    useParams
} from "react-router-dom";


const Breadcrumbs = () => {
    const location = useParams();
    const [user, setUser] = useState();
    const [album, setAlbum] = useState();

    useEffect(() => {
        location.albumId && getAlbum(location.albumId).then(setAlbum)
        location.id && getUser(location.id).then(setUser);
    }, [location])

    return (
        <div className="Breadcrumbs">
            {user
                ? <Link to="/users/">Users /</Link>
                : <span>Users</span>
            }
            {(user && !album) &&
                <span>{` ${user?.name}`}</span>
            }
            {(user && album) &&
                <Link to={`/users/${user?.id}`}> {user?.name} /</Link>
            }
            {!!album &&
                <span>{` ${album?.title}`}</span>
            }
        </div>
    )
}

export default Breadcrumbs;