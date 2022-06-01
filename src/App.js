import NavBar from "./components/NavBars/NavBars";
import React from "react";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p style={ { marginTop: '200px' } }>¡Bienvenidos!</p>
      </header>
    </div>
  );
}

export default App;
