import { useState, useEffect } from 'react';
import { getProducts, getProductsById } from "../Data/Products";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemListComponent/ItemList';


function ItemListContainer() {

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

    return (
        <div className='ItemListContainer'>
            {
                loading ?
                    <h1>Cargando...</h1>:
                products.length ?
                    <ItemList key={products.id} products = {products}/> :
                    <h1>No se encontraron productos</h1>
            }
        </div>
    )
}

export default ItemListContainer;