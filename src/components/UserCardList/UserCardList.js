import './UserCardList.css';
import UserCard from "../UserCard/UserCard";

const UserCardList = ({ items, toggleFave }) => {
    return (
        <div className="UserCardList">
        {items.map(( user, i ) =>
            <UserCard {...user} toggleFave={toggleFave} key={i} />
        )}
        </div>
    )
}

export default UserCardList;