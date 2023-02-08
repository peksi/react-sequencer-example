import { useState } from "react";
import "./App.css";

import Row from "./components/Row";

function App() {
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);

  return (
    <div className="container">
      <div className="App">
        <Row
          playing={playing}
          tempo={tempo}
          name="bass"
          soundFile="./kick.wav"
        />
        <Row
          playing={playing}
          tempo={tempo}
          name="snare"
          soundFile="./snare.wav"
        />
        <Row
          playing={playing}
          tempo={tempo}
          name="hihat"
          soundFile="./hh.wav"
        />
      </div>
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "⏸️" : "▶️"}
      </button>
      &nbsp;Tempo:
      <input
        onChange={(e) => {
          setTempo(parseInt(e.target.value));
        }}
        placeholder="Set tempo"
      ></input>
    </div>
  );
}

export default App;
