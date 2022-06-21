import './App.css';
import NavBars from "./components/NavBars/NavBars";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemListContainer/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const onAdd = () => {
    console.log('Hola');
  };

  return (
    <div className="App">
      <header className="App-headrer">
        <NavBars></NavBars>
      </header>
      <ItemListContainer greeting="¡Bienvenidos!"/>
      <ItemCount stock={8} initial={1} onAdd={onAdd} />
      <ItemDetailContainer itemId={2} greeting="Detalle del producto" />
    </div>
  )
}
export default App;
