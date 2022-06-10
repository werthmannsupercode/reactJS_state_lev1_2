import { useState } from 'react';
import './App.css';

function App() {

  const [answer, setAnswer] = useState(true)
  const [answer2, setAnswer2] = useState(true)

  return (
    <div className="container">
      <div className="innerContainer">
        <p>Why ist React great?</p>
        <button onClick={() => setAnswer(!answer)}>+</button>
      </div>
      <div style={answer ? { display: 'none' } : { display: 'flex' }} className="innerContainer">
        <p className="answerP">Fast Learning Curve</p>
        <button onClick={() => setAnswer2(!answer2)}>+</button>
      </div>
      <div style={answer2 ? { display: 'none' } : { display: 'block' }} >
        <p className="answer2P">React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
          As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
        </p>
      </div>
    </div >
  );
}

export default App;