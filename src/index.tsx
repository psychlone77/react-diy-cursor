import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
// import {useMouseSpeed, useMouseRotation} from "./hooks/mouseSpeed";

type CustomCursorProps = {
    children?: ReactNode; // Define children prop type
    customStyles?: CSSProperties; // Define customStyles prop type
};

const CustomCursor = ({ children, customStyles }: CustomCursorProps): JSX.Element => {
    // const [cursor, setCursor] = useState<HTMLElement | null>(null);
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let currentScale = 0; // Track current scale value
    let currentAngle = 0; // Track current angle value

    useEffect(() => {
        const handleMouseOut = (e: MouseEvent) => {
            if (!e.relatedTarget) {
                setIsCursorVisible(false);
            }
        };
        const handleMouseEnter = () => {
            setIsCursorVisible(true);
        };
        const cursor = document.querySelector(".react-diy-cursor") as HTMLElement;
        // setCursor(cursorElement);

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const speed = 0.12;
        const tick = () => {
            circle.x += (mouse.x - circle.x) * speed;
            circle.y += (mouse.y - circle.y) * speed;

            const deltaX = mouse.x - previousMouse.x;
            const deltaY = mouse.y - previousMouse.y;
            const deltaX2 = mouse.x - circle.x;
            const deltaY2 = mouse.y - circle.y;
            previousMouse.x = mouse.x;
            previousMouse.y = mouse.y;
            const mouseSpeed = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
            const scaleValue = (mouseSpeed / 150) * 0.5;
            currentScale += (scaleValue - currentScale) * speed;
            // 5. Create a transformation string for scaling
            const scaleTransform = `scale(${1 - currentScale}, ${1 + currentScale})`;

            // ROTATE
            // 1. Calculate the angle using the atan2 function
            const angle = Math.atan2(deltaY2, deltaX2) + Math.PI / 2;
            // 2. Check for a threshold to reduce shakiness at low mouse velocity
            // if (mouseSpeed > 20) {
                currentAngle = angle;
            // }
            // 3. Create a transformation string for rotation
            const rotateTransform = `rotate(${currentAngle}rad)`;
            const width = cursor.offsetWidth;
            const height = cursor.offsetHeight;
            if (cursor) {
                cursor.style.transform = `${rotateTransform} ${scaleTransform}`;
                // cursor.style.transform += ` scale(${1 + scaleValue})`;
                const top = circle.y - height / 2;
                const left = circle.x - width / 2;
                cursor.style.top = `${top}px`;
                cursor.style.left = `${left}px`;
            }

            window.requestAnimationFrame(tick);
        };

        window.requestAnimationFrame(tick);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseover", handleMouseEnter);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseover", handleMouseEnter);
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
