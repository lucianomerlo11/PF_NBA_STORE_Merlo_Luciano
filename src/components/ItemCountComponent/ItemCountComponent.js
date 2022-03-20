import { useState } from "react"
import './ItemCountComponent.css'
export const ItemCount = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        count < props.stock ? setCount(count + 1) : setCount(props.stock);
    }

    const decrement = () => {
        count == 0 ? setCount(0) : setCount(count - 1);
    }

    const btnGroupStyle = {
        display: 'block'
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example" style={btnGroupStyle}>
            <div className="btnGroup d-flex justify-content-center mb-3">
                <button type="button" className="btn btn-outline-primary" onClick={decrement}>-</button>
                <p className="counter">{count}</p>
                <button type="button" className="btn btn-outline-primary" onClick={increment}>+</button>
            </div>
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
    )
}

// 