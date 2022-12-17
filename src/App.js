import './App.css';
import mainPicture from './photos/main.jpg'

function App() {
  return (
    <div className="App">
      <div className="InitialContainer">
        <img className="MainPicture" src={mainPicture} alt="Man on a beach"></img>
        <div className="AboutInfoContainer">
          <p className='AboutText'>
            Vinz Angelo Madrigal is a Filipino Computer Science undergraduate based in Corona, CA currently studying at the University of California, Riverside pursuing a Bachelors in Computer Science. He is expected to graduate with a B.S in Computer Science in Fall of 2024.
          </p>
          <p className='AboutText'>
            He is passionate about creating valuable experiences through software, whether by creating time saving applications or time sinking video games. He’s currently trying to find his place in the expansive world of technology by passionately trying to find what he’s passionate about.
          </p>
          <ul className='Links'>
            <li>Email</li>
            <li>Resume</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
