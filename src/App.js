import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, []);
  const handleKeyPress = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 81:
        return playAudio('Q');
      case 87:
        return playAudio('W');
      case 69:
        return playAudio('E');
      case 65:
        return playAudio('A');
      case 83:
        return playAudio('S');
      case 68:
        return playAudio('D');
      case 90:
        return playAudio('Z');
      case 88:
        return playAudio('X');
      case 67:
        return playAudio('C');
      default:
        return;
    }
  };

  const playAudio = (audioID) => {
    console.log('id', audioID);
    const audioSelect = document.querySelector(`#${audioID}`);
    if (audioID.length > 0) {
      setText(audioID);
      console.log('zelect', audioSelect);
      audioSelect.play();
    }
  };

  return (
    <div
      id="drum-machine"
      className="bg-primary d-flex justify-content-center"
      style={{ height: '100vh' }}
    >
      <div
        id="display"
        className=" d-flex justify-content-center flex-column align-items-center"
      >
        <div>
          <div
            id="q"
            className="drum-pad btn btn-dark btn-lg"
            onClick={() => playAudio('Q')}
          >
            Q
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
          </div>

          <div
            id="w"
            onClick={() => playAudio('W')}
            className="drum-pad btn btn-dark btn-lg"
          >
            W
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
          </div>
          <div
            id="e"
            onClick={() => playAudio('E')}
            className="drum-pad btn btn-dark btn-lg"
          >
            E
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
          </div>
        </div>
        <div>
          <div
            id="a"
            onClick={() => playAudio('A')}
            className="drum-pad btn btn-dark btn-lg"
          >
            A
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
          </div>
          <div
            id="s"
            onClick={() => playAudio('S')}
            className="drum-pad btn btn-dark btn-lg"
          >
            S
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
          </div>
          <div
            id="d"
            onClick={() => playAudio('D')}
            className="drum-pad btn btn-dark btn-lg"
          >
            D
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
          </div>
        </div>
        <div>
          <div
            id="z"
            onClick={() => playAudio('Z')}
            className="drum-pad btn btn-dark btn-lg "
          >
            Z
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
          </div>
          <div
            id="x"
            onClick={() => playAudio('X')}
            className="drum-pad btn btn-dark btn-lg"
          >
            X
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
          </div>
          <div
            id="c"
            onClick={() => playAudio('C')}
            className="drum-pad btn btn-dark btn-lg"
          >
            C
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
          </div>
        </div>
        q<p>{text}</p>
      </div>
    </div>
  );
}

export default App;
