import { useParams } from 'react-router-dom';
import {getAlbums, getUser} from "../../utils/httpGet";
import {useEffect, useState} from "react";
import AlbumList from "../AlbumList/AlbumList";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const UsersPage = ({ setLocation }) => {
    const { id } = useParams();
    const [user, setUser] = useState()
    const [albums, setAlbums] = useState()
    useEffect(() => {
        getUser(id).then(setUser);
        getAlbums(id).then(setAlbums);
    }, [id])

    return (
        <main className="UserPage">
            <Breadcrumbs user={user} />
            {!!user &&
            <div className="UserPage__Header">
                <h2>{user.name}</h2>
                <div className="UserPage__HeaderInfo">
                    <p>{user.company.name} - {user.email} - {user.address.street}</p>
                </div>
            </div>
            }
            {!!albums &&
            <div>
                <h2>Albums</h2>
                <AlbumList userId={id} items={albums} />
            </div>}
        </main>
    )
};

export default UsersPage;