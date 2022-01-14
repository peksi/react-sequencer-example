import { useEffect, useState } from "react";
import { Howl } from "howler";

const Switch = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    const sound = new Howl({
      src: [props.soundFile],
    });

    if (props.playing && active) {
      sound.play();
    }
  }, [props.playing, active, props.soundFile]);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
      }}
    >
      <div
        onClick={() => setActive(!active)}
        style={{
          transitionDuration: "100ms",
          width: props.playing ? "30px" : "10px",
          height: props.playing ? "30px" : "10px",
          margin: props.playing ? "5px" : "15px",
          borderRadius: "15px",
          background: active ? "magenta" : "darkgray",
        }}
      ></div>
    </div>
  );
};

export default Switch;
