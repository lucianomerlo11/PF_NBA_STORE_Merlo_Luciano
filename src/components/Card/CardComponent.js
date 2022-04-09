import './CardComponent.css';
import {ItemCount} from '../ItemCountComponent/ItemCountComponent';

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." key={props.id}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{`Precio: ${props.price}`}</p>
                    <ItemCount id={props.id} stock={props.stock}></ItemCount>
                </div>
        </div>
    )

}


export default Card;