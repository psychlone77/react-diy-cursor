import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import { useMouseSpeed } from "./hooks/useMouseSpeed";
import { useMouseRotation } from "./hooks/useMouseRotation";
import { useCursorManager } from "./hooks/useCursorManager";

type CustomCursorProps = {
  children?: ReactNode; // Define children prop type
  customStyles?: CSSProperties; // Define customStyles prop type
  parentElement: string;
};

// Function to generate a unique class name
const generateUniqueClassName = () => {
  return `react-diy-cursor-${Math.random().toString(36).substring(2, 9)}`;
};

const CustomCursor = ({ children, customStyles, parentElement }: CustomCursorProps): JSX.Element => {
  const [uniqueClassName] = useState(generateUniqueClassName);
  useCursorManager(`.${parentElement}`, `.${uniqueClassName}`);

  // Inline styles for the custom cursor
  const defaultCursorStyles: CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    display: "none",
  };

  // Merge default styles with custom styles
  const cursorStyles = { ...defaultCursorStyles, ...customStyles };

  return (
    <div className={uniqueClassName} style={cursorStyles}>
      {children}
    </div>
  );
};

export { CustomCursor, useMouseSpeed, useMouseRotation };