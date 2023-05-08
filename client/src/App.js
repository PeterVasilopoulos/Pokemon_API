import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FetchPokemon from "./components/FetchPokemon";


function App() {
  return (
    <div className="App">
      <h1>Pokemon Fetcher</h1>
      <FetchPokemon />
    </div>
  );
}

export default App;