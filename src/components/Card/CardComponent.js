import './CardComponent.css';


function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." key={props.id}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{`Precio: ${props.price}`}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )

}


export default Card;