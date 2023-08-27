import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person";
import Button from "./Components/Button";
import Header from "./Components/Header";
import List from "./Components/List/indes";

function App() {
   const handleButtonClick = () => {
      return alert("Button Clicked");
   };
   return (
      <div className="App">
         <Header title="HEADER" />
         <Person name="Vishal" age="27" />
         <Button text="Click me" onClick={handleButtonClick} />
         <List items={["Shirts", "Jeans", "Perfume"]} />
      </div>
   );
}

export default App;
