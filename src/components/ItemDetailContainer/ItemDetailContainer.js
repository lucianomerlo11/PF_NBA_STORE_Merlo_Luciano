import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../Data/Products";
import ItemDetail from "../ItemDetailComponent/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState();
    const {productId} = useParams();

    useEffect(() => {
        setLoading(true);


        getProductById(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

    console.log(product)

    if (loading) {
        return <h1>Cargando...</h1>
    }
    
    return(
        <ItemDetail {...product}></ItemDetail>
    )
}

export default ItemDetailContainer