import {getAlbum, getPictures, getUser} from "../../utils/httpGet";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./AlbumPage.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const AlbumPage = () => {
    const { albumId } = useParams();
    const [albumName, setAlbumName] = useState()
    const [pics, setPics] = useState();
    const [zoomPic, setZoomPic] = useState();
    useEffect(() => {
        getAlbum(albumId).then(x => setAlbumName(x.title));
        getPictures(albumId).then(setPics);
    }, [albumId])

    return (
        <main className="AlbumPage">
            <Breadcrumbs />
            <header className="AlbumPage__Header">
                <h2>{albumName}</h2>
                <p>{pics?.length}</p>
            </header>
            {!!pics &&
                <div className="AlbumPage__Container">
                {pics.map((pic, i) =>
                    <div
                        className="AlbumPage__Pic"
                        style={{backgroundImage: `url(${pic.thumbnailUrl})`}}
                        onClick={() => setZoomPic(pic)}
                        key={i}>
                    </div>
                )}
                </div>
            }
            {zoomPic &&
                <div
                    className="AlbumPage__ZoomPic"
                    style={{backgroundImage: `url(${zoomPic.url})`}}
                    onClick={() => setZoomPic()}
                >
                    <p className="AlbumPage__ZoomPicName">{zoomPic.title}</p>
                </div>
            }
        </main>
    )
}

export default AlbumPage;