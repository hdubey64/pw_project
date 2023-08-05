import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useState_And_Hooks";
import ConditionalRendring from "./components/useState_And_Hooks/002_index";

function App() {
   return (
      <div className="App">
         <Counter />
         <ConditionalRendring />
      </div>
   );
}

export default App;
