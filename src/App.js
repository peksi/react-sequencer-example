import Row from "./components/Row";
import "./App.css";
import { useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div className="App">
        <Row playing={playing} name="bd" soundFile="./kick.wav" />
        <Row playing={playing} name="sn" soundFile="./snare.wav" />
        <Row playing={playing} name="hh" soundFile="./hihat.wav" />
      </div>
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "playing" : "paused"}
      </button>
    </>
  );
}

export default App;
