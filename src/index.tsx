import React, { useState, useEffect, ReactNode } from "react";

type CustomCursorProps = {
  children?: ReactNode; // Define children prop type
};

const CustomCursor = (props: CustomCursorProps): JSX.Element => {
  // State to store cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Effect to add mouse move event listener
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  // Inline styles for the custom cursor
  const cursorStyles = {
    cursor: "none",
    position: "fixed",
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transform: "translate(-50%, -50%)", // Center the cursor
    pointerEvents: "none",
    mixBlendMode: "difference", // Blend with background
  };

  return (
    <div style={cursorStyles}>
      {props.children} {/* Render children passed to CustomCursor */}
    </div>
  );
};

export default CustomCursor;