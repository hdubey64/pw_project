import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
   return (
      <>
         <h1 className="headTag">Pokedex</h1>
         <CustomRoutes />
      </>
   );
}

export default App;
