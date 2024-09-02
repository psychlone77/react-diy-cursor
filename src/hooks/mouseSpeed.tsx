// import { useState, useEffect, useRef } from "react";

// const useMouseSpeed = (interval: number) => {
//     // State to store mouse speed
//     const [mouseSpeed, setMouseSpeed] = useState(0);
//     let currentPosition = { x: 0, y: 0 };
//     let prevPosition = { x: 0, y: 0 };
//     let prevTime = Date.now();
//     // Effect to add mouse move event listener
//     useEffect(() => {
//         const updateCursorPosition = (e: MouseEvent) => {
//             currentPosition = { x: e.clientX, y: e.clientY };
//         };

//         const intervalId = setInterval(() => {
//             const deltaX = currentPosition.x - prevPosition.x;
//             const deltaY = currentPosition.y - prevPosition.y;
//             const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
//             const speed = distance / interval; // pixels per millisecond
//             prevPosition = currentPosition;
//             setMouseSpeed(speed);
//         }, interval);

//         window.addEventListener("mousemove", updateCursorPosition);

//         // Cleanup function to remove event listener when component unmounts
//         return () => {
//             window.removeEventListener("mousemove", updateCursorPosition);
//             clearInterval(intervalId);
//         };
//     }, []);

//     return mouseSpeed;
// };

// const useMouseRotation = (interval: number) => {
//     const [mouseRotation, setMouseRotation] = useState(0);
//     let currentPosition = { x: 0, y: 0 };
//     let prevPosition = { x: 0, y: 0 };
//     const prevRotationRef = useRef(0);

//     useEffect(() => {
//         const updateCursorPosition = (e: MouseEvent) => {
//             if (prevPosition.x === e.clientX && prevPosition.y === e.clientY) return;
//             currentPosition = { x: e.clientX, y: e.clientY };
//         };

//         const intervalId = setInterval(() => {
//             const deltaX = currentPosition.x - prevPosition.x;
//             const deltaY = currentPosition.y - prevPosition.y;
//             if (deltaX !== 0 || deltaY !== 0) {
//                 const rotation = 90 + Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//                 prevRotationRef.current = rotation;
//                 setMouseRotation(rotation);
//                 prevPosition = { ...currentPosition };
//             } else {
//                 setMouseRotation(prevRotationRef.current);
//             }
//         }, interval);

//         window.addEventListener("mousemove", updateCursorPosition);

//         // Cleanup function to remove event listener when component unmounts
//         return () => {
//             window.removeEventListener("mousemove", updateCursorPosition);
//             clearInterval(intervalId);
//         };
//     }, []);

//     return mouseRotation;
// };

// export { useMouseSpeed, useMouseRotation };

