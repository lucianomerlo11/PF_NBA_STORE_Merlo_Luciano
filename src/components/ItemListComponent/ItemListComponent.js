import { getCamisetas } from "../Data/CamisetasData";
import Card from "../Card/CardComponent";
import { useState, useEffect } from 'react';
import bootstrap from "bootstrap";

function ItemList() {

    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {
        getCamisetas().then((response) => {
            setCamisetas(response);
        })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <h1>CAMISETAS NBA</h1>
                {camisetas.map(camiseta =>
                    <div className="col-md-3 mt-3" key={camiseta.id}>
                        <Card image={camiseta.image} title={camiseta.name} price={camiseta.price} description={camiseta.description}></Card>
                    </div>          
                )}
            </div>
        </div>
    )
}

export default ItemList;