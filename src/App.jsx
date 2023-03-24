import "./App.css";
import Animacao from "./Components/animação";
import Comex from "./Components/comex";
import Importacao from "./Components/importação";
import Navbar from "./Components/navbar";
import Invoice from "./Components/invoice";
import InvoiceEx from "./Components/InvoiceEx.jsx";
import Packinglist from "./Components/packinglist";
import PackinglistEx from "./Components/packinglistEx";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Animacao></Animacao>
			<Comex></Comex>
			<Importacao></Importacao>
			<Invoice></Invoice>
			<InvoiceEx></InvoiceEx>
			<Packinglist></Packinglist>
			<PackinglistEx></PackinglistEx>
		</div>
	);
}

export default App;
