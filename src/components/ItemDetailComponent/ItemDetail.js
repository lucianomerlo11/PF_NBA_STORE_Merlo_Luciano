import bootstrap from "bootstrap";
import { useEffect, useState } from "react";
import { getSizeByProductId } from "../Data/Products";
import "./ItemDetail.css"
const ItemDetail = ({id, name, image, category, description, price, stock, size}) => {

    
    const [tamanios, setTamanios] = useState([]);
    
    useEffect(()=>{
        getSizeByProductId(id).then(sizes =>{
            setTamanios(sizes.size)
        }).catch(error =>{
            console.log(error)
        })
    }, [id])

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
                            {tamanios.map(talle => 
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

    )
}

export default ItemDetail;