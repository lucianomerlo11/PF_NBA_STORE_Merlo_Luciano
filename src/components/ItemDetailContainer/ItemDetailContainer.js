import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../Data/Products";
import Item from "../Item/Item";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId).then((response) => {
            console.log(response)
            setProduct(response)
        })
    }, [productId])

    return(
        <Item {...product}></Item>
    )
}

export default ItemDetailContainer