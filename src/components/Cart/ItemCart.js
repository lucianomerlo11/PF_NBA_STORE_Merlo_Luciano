import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './itemCart.css';
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch, getDoc } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import Swal from 'sweetalert2';
function ItemCart() {



    const { cart, clearCart, getQuantity, removeItem, getTotal } = useContext(CartContext);
    const Swal = require('sweetalert2')


    useEffect(() => {
        getQuantity()
    }, [getQuantity()])

    const createOrder = () =>{
        
        const objOrder = {
            buyer: {
                name: 'Luciano',
                phone: '3512315712',
                email: 'merlo1411@gmail.com'
            },
            items: cart,
            total: getTotal()
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        const ids = cart.map(prod => prod.id)
        const collectionRef = collection(firestoreDb, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(() => {
                batch.commit()
                Swal.fire({
                    title: 'Compra realizada con exito',
                    text: 'Que disfrutes tu compra',
                    icon: 'success'
                })
                clearCart()
            }).catch(error => {
                console.log(error)
            })
    }

    return (

        <>
            {getQuantity() == 0 ? <div className='emptyCart'>
                <h1>No hay productos seleccionados</h1>
                <NavLink className='btn btn-primary' to={'/'}>Volver</NavLink>
            </div>
                :
                <div>
                    <h1>Mis productos</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <h5 style={{ textAlign: 'center' }}>Nombre</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5 style={{ textAlign: 'center' }}>Precio</h5>
                            </div>
                            <div className='col-md-2'>
                                <h5 style={{ textAlign: 'center' }}>Cantidad</h5>
                            </div>
                            <div className='col-md-2'>
                                <h5 style={{ textAlign: 'center' }}>Accion</h5>
                            </div>
                            {cart.map(prod =>
                                <>
                                        <div className='col-md-5 col-sm-5'>
                                            <p style={{ textAlign: 'center' }} key={prod.id}>{prod.name}</p>
                                        </div>
                                        <div className='col-md-3 col-sm-3'>
                                            <p style={{ textAlign: 'center' }} key={prod.id}>{prod.price * prod.quantity}</p>
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                            <p style={{ textAlign: 'center' }} key={prod.id}>{prod.quantity}</p>
                                        </div>
                                        <div className='col-md-2 col-sm-2'>
                                            <button id={`btnEliminar${prod.id}`} key={prod.id} onClick={() => removeItem(prod.id)} type="button" className="btn btn-outline-danger">Eliminar</button>
                                        </div>
                                        <hr></hr>
                                </>
                            )}
                            <div className='col-md-12'>
                                <h3 style={{ textAlign: 'end' }}>Total: ${getTotal()}</h3>
                                <div className='btnTransation'>
                                    <button onClick={() => clearCart()} className='btn btn-outline-primary'>Cancelar</button>
                                    <button onClick={() => createOrder()} className='btn btn-primary'>Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )


}


export default ItemCart;