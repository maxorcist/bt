import './AlbumList.css';
import {Link} from "react-router-dom";

const AlbumList = ({ userId, items = [] }) => {


    return (
        <div className="AlbumList">
            {items.map(( item, i )  =>
                <div className="AlbumCard" key={i}>
                    {item.title}
                    <a
                        className="AlbumCard__Link"
                        href={`/users/${userId}/${item.id}`} />
                </div>
                )}
        </div>
    )
};

export default AlbumList;