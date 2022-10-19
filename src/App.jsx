import "./App.css";
import Animacao from "./Components/animação";
import Comex from "./Components/comex";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Animacao></Animacao>
      <Comex></Comex>
    </div>
  );
}

export default App;
