import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../Data/Products";
import ItemDetail from "../ItemDetailComponent/ItemDetail";
import {firestoreDb} from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ({addToCart}) => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState();
    const {productId} = useParams();

    useEffect(() => {
        setLoading(true);


        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(()=>{
        //     setLoading(false)
        // })

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(querySnapShot => {
            const product = {id: querySnapShot.id, ...querySnapShot.data()}
            setProduct(product)
        }).catch((error) =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })


    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }
    
    return(
        <ItemDetail {...product} addToCart={addToCart}></ItemDetail>
    )
}

export default ItemDetailContainer