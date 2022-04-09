import NavbarComponent from "./components/Navbar/Navbar";
import ItemList from "./components/ItemListComponent/ItemListComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavbarComponent></NavbarComponent> 
            <Routes>
              <Route path='/' element={<ItemList />}></Route>
              <Route path='/category/:categoryId' element={<ItemList />}></Route>
              <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            </Routes> 
        </BrowserRouter>
         
      </header>
      <main>
        <ItemList></ItemList>
      </main>
    </div>
  );
}

export default App;
