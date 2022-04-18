import React, {useContext} from "react";
import { Button, Badge } from 'react-bootstrap';
import carrito from '../resources/images/IMG_CART_ICON.png'
import CartContext from "../../context/CartContext"
function Cart() {

    const {getQuantity} = useContext(CartContext)

    return (
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Button className='d-flex align-items-center' variant="primary">
                    Comprar <img src={carrito} width='35' height='35' className='me-1 d-inline-block align-text-top'></img> <Badge bg="secondary">{getQuantity()}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </li>
        </ul>
        )
}

export default Cart;