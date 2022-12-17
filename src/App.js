import './App.css';
import mainPicture from './photos/main.jpg'

function App() {
  return (
    <div className="App">
      <div className="InitialContainer">
        <img className="MainPicture" src={mainPicture} alt="Man on a beach"></img>
      </div>
    </div>
  );
}

export default App;
