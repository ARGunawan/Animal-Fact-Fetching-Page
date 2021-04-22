import "./App.css";
import GetRandom from "./components/Gather";
import DogPart from "./components/Dog";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Random Facts:</h1>
        <GetRandom />
        <DogPart />
      </div>
    </div>
  );
}

export default App;
