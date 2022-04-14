import NavbarComponent from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListConteiner/ItemListComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCartContainer from "./components/Cart/ItemCartContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavbarComponent></NavbarComponent> 
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<ItemCartContainer />} />
            </Routes> 
        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;
