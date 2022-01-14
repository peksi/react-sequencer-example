import { useEffect, useState } from "react";
import Switch from "./Switch";

const Row = (props) => {
  const steps = [true, false, false, false, true, false, false, false];

  console.log({ steps });

  const [playingStep, setPlayingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.playing) {
        console.log("This will be called every 2 seconds");
        setPlayingStep((playingStep + 1) % 8);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playingStep, props.playing]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "3rem",
        }}
      >
        {props.name}
      </div>
      {steps.map((step, index) => {
        return (
          <Switch
            key={("switch-", index)}
            active={step}
            playing={index === playingStep}
            soundFile={props.soundFile}
          />
        );
      })}
    </div>
  );
};

export default Row;
