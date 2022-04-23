import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // console.log(cart)

    const addItem = (product, quantity)=>{
        const objItemCart = {
            ...product,
            quantity
        }


        let resultado = cart.some(prod => prod.id == objItemCart.id)    
        
        if(resultado){
            for (let i = 0; i < cart.length; i++) {
                if(cart[i].id == objItemCart.id){
                    cart[i].quantity += objItemCart.quantity
                }
            }
            setCart([...cart])
        }
        else{
            setCart([...cart, objItemCart])
        }

    }

    const removeItem = (id)=>{
        let newCart = cart.filter(prod => prod.id != id);
        setCart(newCart)
        console.log(cart)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const getQuantity = ()=>{
        let count = 0;

        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count;
    }

    const getTotal = () =>{
        return cart.reduce((acc, prod) => {
            return acc = acc + (prod.price * prod.quantity)
        }, 0)
    }


    return(
        <Context.Provider value={{
            cart,
            addItem,
            clearCart,
            getQuantity,
            removeItem,
            getTotal
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;