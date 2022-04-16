import NavbarComponent from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListConteiner/ItemListComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCartContainer from "./components/Cart/ItemCartContainer";
import { useState, createContext } from 'react';
import { CartContextProvider } from "./context/CartContext";


export const CartContext = createContext()


function App() {

  // const [cart, setCart] = useState([]);
  // console.log(cart)
  return (
    <div className="App">
      {/* <CartContext.Provider value={{cart, setCart}}> */}
      <CartContextProvider>
        <header className="App-header">
          <BrowserRouter>
            <NavbarComponent></NavbarComponent>
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<ItemCartContainer />} />
            </Routes>
          </BrowserRouter>
        </header>
      </CartContextProvider>
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
