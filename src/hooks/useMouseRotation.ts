import { useEffect, useState } from "react";
import MouseManager from "../MouseManager";

const useMouseRotation = (interval:number) => {
    const [rotation, setRotation] = useState(0);
  
    useEffect(() => {
      const mouseManager = MouseManager.getInstance();
  
      const updateRotation = () => {
        setRotation(mouseManager.rotation);
      };
  
      const intervalId = setInterval(updateRotation, interval);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return rotation;
  };
  
  export { useMouseRotation };