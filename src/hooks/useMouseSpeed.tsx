import { useEffect, useState } from "react";
import MouseManager from "../MouseManager";

const useMouseSpeed = (interval:number) => {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const mouseManager = MouseManager.getInstance();

    const updateSpeed = () => {
      setSpeed(mouseManager.speed);
    };

    const intervalId = setInterval(updateSpeed, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return speed;
};

export { useMouseSpeed };

