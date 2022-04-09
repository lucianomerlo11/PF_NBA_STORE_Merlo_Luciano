import React from "react"
import Card from "../Card/CardComponent";
function ItemList({products}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <h1>INDUMENTARIA NBA</h1>
                {products.map(product =>
                    <div className="col-md-3 mt-3" key={product.id}>
                        <Card id={product.id} image={product.image} title={product.name} stock={product.stock} price={product.price} description={product.description}></Card>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemList;