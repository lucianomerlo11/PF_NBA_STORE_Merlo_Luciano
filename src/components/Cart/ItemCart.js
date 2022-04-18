import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './itemCart.css'
function ItemCart() {



    const { cart, cleanCart, getQuantity, removeItem } = useContext(CartContext);



    useEffect(() => {
        getQuantity()
    }, [getQuantity()])


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
                                <h3 style={{textAlign: 'end'}}>Total: ${cart.reduce((acc, prod) =>{
                                    return acc = acc + (prod.price * prod.quantity)
                                }, 0)}</h3>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )


}


export default ItemCart;