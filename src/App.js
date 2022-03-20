import NavbarComponent from "./components/Navbar/Navbar";
import ItemList from "./components/ItemListComponent/ItemListComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent></NavbarComponent>
      </header>
      <main>
        <ItemList></ItemList>
      </main>
    </div>
  );
}

export default App;
