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
            <li><a href="mailto:mvinzangelo@gmail.com">Email</a></li>
            <li><a href="https://drive.google.com/file/d/1O5BncBAm-c0WXiU9TzefGFHqYHZ4SBdx/view?usp=sharing" target="_blank">Resume</a></li>
            <li><a href="https://linkedin.com/in/vinzmadrigal" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/mvinzangelo" target="_blank">GitHub</a></li>
            <li><a href="https://www.instagram.com/mellowjelo/" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
