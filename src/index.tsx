import React, { useState, useEffect, ReactNode, CSSProperties } from "react";

type CustomCursorProps = {
  children?: ReactNode; // Define children prop type
  customStyles?:CSSProperties; // Define customStyles prop type
};

const CustomCursor = ( { children, customStyles }:CustomCursorProps): JSX.Element => {
  // State to store cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  //state to store cursor visibility
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  // Effect to add mouse move event listener
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setIsCursorVisible(false);
      }
    };
    const handleMouseEnter = () => {
      setIsCursorVisible(true);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseEnter);
   

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseEnter);
      
    }
    
  }, []);

  // Inline styles for the custom cursor
  const defaultCursorStyles: CSSProperties = {
    cursor: "none",
    position: "fixed",
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transform: "translate(-50%, -50%)", // Center the cursor
    pointerEvents: "none",
    display: isCursorVisible ? "block" : "none",
  };

  // Merge default styles with custom styles
  const cursorStyles = { ...defaultCursorStyles, ...customStyles };

  return (
    <div style={cursorStyles}>
      {children} {/* Render children passed to CustomCursor */}
    </div>
  );
};

export default CustomCursor;