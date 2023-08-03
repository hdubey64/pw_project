import "./App.css";
import DogCard from "./DogCard";

function App() {
   return (
      <div className="App">
         <DogCard
            name="Bruno"
            img="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
         />
         <DogCard
            name="Tommy"
            img="https://img.rawpixel.com/private/static/images/website/2022-05/ns8230-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b3961e17298745c0868eeef46211c3d0"
         />
      </div>
   );
}

export default App;
