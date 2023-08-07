import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useState_And_Hooks";
import ConditionalRendring from "./components/useState_And_Hooks/002_index";
import ConditionalRendringCopy from "./components/useState_And_Hooks/002_indexCopy";
import Prop from "./section/Props/Props";

function App() {
   return (
      <div className="App">
         <Counter title="UseState and Hooks" />
         <ConditionalRendring title="Conditional Rendering" />
         <ConditionalRendringCopy title="Conditional Rendering prt-2" />
         <Prop title="Props Discussion" />
      </div>
   );
}

export default App;
