import { useState, useEffect } from 'react';
import Card from "../Card/CardComponent";
import { getProducts, getProductsById } from "../Data/Products";
import { useParams } from 'react-router-dom';


function ItemList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        if (categoryId) {
            setLoading(true);
            getProductsById(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true);
            getProducts().then(item => {
                setProducts(item)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setProducts([])
        })
    }, [categoryId])

    if (loading) {
        return <h1>Cargando productos...</h1>
    }

    if (products.length === 0) {
        return <h1>No hay productos</h1>
    }

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