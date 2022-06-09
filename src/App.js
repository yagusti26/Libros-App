import NavBars from "./components/NavBars/NavBars";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-headrer">
        <NavBars></NavBars>
      </header>
      <ItemListContainer greeting="¡Bienvenidos!"/>
    </div>
  )
}
export default App;
