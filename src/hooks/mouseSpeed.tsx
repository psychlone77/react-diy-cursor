// import { useState, useEffect, useRef } from "react";

// const useMouseSpeed = () => {
//     // State to store mouse speed
//     const [mouseSpeed, setMouseSpeed] = useState(0);
//     let curMousePosition = { x: 0, y: 0 };
//     let prevMousePosition = { x: 0, y: 0 };
//     console.log(mouseSpeed);
//     // Effect to add mouse move event listener
//     useEffect(() => {
//         const updateCursorPosition = (e: MouseEvent) => {
//             curMousePosition = { x: e.clientX, y: e.clientY };
//         };

//         const tick = () => {
//             const tickHelper = () => {
//                 const deltaX = curMousePosition.x - prevMousePosition.x;
//                 const deltaY = curMousePosition.y - prevMousePosition.y;
//                 prevMousePosition.x = curMousePosition.x;
//                 prevMousePosition.y = curMousePosition.y;
//                 const speedCalc = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 150);
//                 setMouseSpeed(speedCalc);
//                 window.requestAnimationFrame(tickHelper);
//             };
//             window.requestAnimationFrame(tickHelper);
//         };
//         tick();

//         // window.addEventListener("mousemove", updateCursorPosition);

//         // Cleanup function to remove event listener when component unmounts
//         return () => {
//             window.removeEventListener("mousemove", updateCursorPosition);
//         };
//     }, []);

//     return mouseSpeed;
// };

// export {useMouseSpeed};

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
