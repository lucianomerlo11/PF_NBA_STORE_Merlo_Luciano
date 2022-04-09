import bootstrap from "bootstrap";
import "./ItemDetail.css"
const ItemDetail = ({id, name, image, category, description, price, stock}) => {
    return (
        <div key={id} className="card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{stock}</p>
                </div>
        </div>
    )
}

export default ItemDetail;