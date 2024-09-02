import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import { handleMouseOut, handleMouseEnter, handleMouseMove, tick } from "./cursorUtils";
// import {useMouseSpeed} from "./hooks/mouseSpeed";

type CustomCursorProps = {
    children?: ReactNode; // Define children prop type
    customStyles?: CSSProperties; // Define customStyles prop type
};

const CustomCursor = ({ children, customStyles }: CustomCursorProps): JSX.Element => {
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const curMousePosition = { x: 0, y: 0 };
    const prevMousePosition = { x: 0, y: 0 };
    const cursorPosition = { x: 0, y: 0 };
    let currentScale = 0; // Track current scale value
    let currentAngle = 0; // Track current angle value

    useEffect(() => {
        const cursor = document.querySelector(".react-diy-cursor") as HTMLElement;

        window.addEventListener("mousemove", handleMouseMove(curMousePosition));
        document.addEventListener("mouseout", handleMouseOut(setIsCursorVisible));
        document.addEventListener("mouseover", handleMouseEnter(setIsCursorVisible));

        if (cursor) {
            tick(cursor, curMousePosition, prevMousePosition, cursorPosition, currentScale, currentAngle, 0.17);
        }

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("mousemove", handleMouseMove(curMousePosition));
            document.removeEventListener("mouseout", handleMouseOut(setIsCursorVisible));
            document.removeEventListener("mouseover", handleMouseEnter(setIsCursorVisible));
        };
    }, []);

    // Inline styles for the custom cursor
    const defaultCursorStyles: CSSProperties = {
        position: "fixed",
        // left: `${cursorPosition.x}px`,
        // top: `${cursorPosition.y}px`,
        // transform: "translate(-50%, -50%)", // Center the cursor
        pointerEvents: "none",
        display: isCursorVisible ? "block" : "none",
    };

    // Merge default styles with custom styles
    const cursorStyles = { ...defaultCursorStyles, ...customStyles };

    return (
        <div className="react-diy-cursor" style={cursorStyles}>
            {children} {/* Render children passed to CustomCursor */}
        </div>
    );
};

export { CustomCursor };
