import './App.css';
import GetRandom from './components/Gather';
import GetRandomDog from './components/GatherDog';


function App() {

  return (
    <div className="App">
      <div className="App-header">
        <h1>Random Cat Facts and Pictures</h1>
        <GetRandom />
        <h2>Random Dog Facts and Pictures</h2>
        <GetRandomDog/>
      </div>
    </div>
  );
}

export default App;