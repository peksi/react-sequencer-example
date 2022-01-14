import Row from "./components/Row";
import "./App.css";
import { useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div className="App">
        <Row playing={playing} name="bass" soundFile="./kick.wav" />
        <Row playing={playing} name="snare" soundFile="./snare.wav" />
        <Row playing={playing} name="hihat" soundFile="./hh.wav" />
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
