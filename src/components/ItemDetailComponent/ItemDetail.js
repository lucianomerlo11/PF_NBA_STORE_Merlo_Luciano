import bootstrap from "bootstrap";
import { useEffect, useState } from "react";
import { getSizeByProductId } from "../Data/Products";
import { ItemCount } from "../ItemCountComponent/ItemCountComponent";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
const ItemDetail = ({ id, name, image, category, description, price, stock, size }) => {


    const [tamanios, setTamanios] = useState([]);
    const [quantity, setCuantity] = useState(0);

    const handleOnAdd = (count)=>{
        setCuantity(count);
    }

    useEffect(() => {
        getSizeByProductId(id).then(sizes => {
            setTamanios(sizes.size)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-7">
                    <img src={image} className="img-fluid imgProduct" alt="..." />
                </div>
                <div className="col-md-5 descriptionProduct">
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
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                {quantity === 0 ? <ItemCount id={id} stock={stock} onAdd={handleOnAdd}></ItemCount> : <Link to={'/cart'} type='button' className="btn btn-outline-success btnComprar">Comprar</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;