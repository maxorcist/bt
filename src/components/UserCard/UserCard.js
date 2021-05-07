import './UserCard.css';

const UserCard = ({ id, name, company, email, toggleFave }) => {
    return (
        <div className="UserCard">
            <button className="UserCard__Star" onClick={() => toggleFave(id)} />
            <p>{name}</p>
            <p>{company.name}</p>
            <p>{email}</p>
            <a href={`/users/${id}`} className="UserCard__Link" />
        </div>
    )
}

export default UserCard;