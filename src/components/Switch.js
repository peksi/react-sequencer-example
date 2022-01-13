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
        background: props.playing ? "yellow" : "",
      }}
    >
      <div
        onClick={() => setActive(!active)}
        style={{
          width: "30px",
          height: "30px",
          margin: "5px",
          borderRadius: "15px",
          background: active ? "green" : "red",
        }}
      ></div>
    </div>
  );
};

export default Switch;
