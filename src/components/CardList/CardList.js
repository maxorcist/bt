import './CardList.css';

const CardList = ({ CardType, items, toggleFave = ""}) => {
    return (
        <div className="CardList">
        {items.map(( user, i ) =>
            <CardType {...user} toggleFave={toggleFave} key={i} />
        )}
        </div>
    )
}

export default CardList;