import { useState, useEffect } from 'react';
import { getProducts, getProductsById } from "../Data/Products";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemListComponent/ItemList';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';




function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        if (categoryId) {
            setLoading(true);

            // getProductsById(categoryId).then(items => {
            //     setProducts(items)
            // }).catch(err => {
            //     console.log(err)
            // }).finally(() => {
            //     setLoading(false)
            // })

            const collectionRef = query(collection(firestoreDb, 'products'), where('category', '==', categoryId))

            getDocs(collectionRef).then(querySnapShot =>{
                const products = querySnapShot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            }).catch(error =>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            setLoading(true);

            /**
             * Sin Firebase
             *             getProducts().then(item => {
                setProducts(item)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
             */

            /**
             * Con Firebase
             */

            const collectionRef = collection(firestoreDb, 'products')

            getDocs(collectionRef) //Retornar una promesa
                .then(querySnapShot => {
                    const products = querySnapShot.docs.map(doc => {
                        return{
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setProducts(products)
                }).catch(error => {
                    console.log(error)
                }).finally(()=>{
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
                    <h1>Cargando...</h1> :
                    products.length ?
                        <ItemList key={products.id} products={products} /> :
                        <h1>No se encontraron productos</h1>
            }
        </div>
    )
}

export default ItemListContainer;