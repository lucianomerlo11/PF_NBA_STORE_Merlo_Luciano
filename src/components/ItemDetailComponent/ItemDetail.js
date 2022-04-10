import bootstrap from "bootstrap";
import "./ItemDetail.css"
const ItemDetail = ({id, name, image, category, description, price, stock, size}) => {

    console.log(id)

    return (

        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-7">
                    <img src={image} className="img-fluid imgProduct" alt="..." />
                </div>
                <div className="col-md-5">
                    <h3>{name}</h3>
                    <div className="sizeContainer">
                        <h6>Talles</h6>
                        <div className="talles">
                            {size.map(talle => 
                                <div className="talle me-1">
                                    <a className="itemTalle">
                                        {talle}
                                    </a>
                                </div>
                            )}
                            <div className="buy-stock col-md-12 mt-5">
                                <div className="col-md-3">
                                    <p><b>Stock:</b> {stock}</p>
                                </div>
                                <div className="col-md-9">
                                    <button type='button' className="btn btn-outline-success">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div key={id} className="card">
        //     <img src={image} className="card-img-top" alt="..."/>
        //         <div className="card-body">
        //             <h2 className="card-title">{name}</h2>
        //             <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        //             <p className="card-text">{description}</p>
        //             <p className="card-text">{stock}</p>
        //         </div>
        // </div>
    )
}

export default ItemDetail;