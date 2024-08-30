// import { useState, useEffect } from "react";

// const useMouseSpeed = () => {
//     // State to store mouse speed
//     const [mouseSpeed, setMouseSpeed] = useState(0);

//     // Refs to store previous position and time
//     let prevPosition = { x: 0, y: 0 };
//     let prevTime = Date.now();
//     // Effect to add mouse move event listener
//     useEffect(() => {
//         const measureMouseSpeed = (e: MouseEvent) => {
//             const currentTime = Date.now();
//             let timeDiff = currentTime - prevTime;
//             // Euclidean distance between two points
//             if (timeDiff < 100) {
//                 return;
//             }
//             if (timeDiff > 1000) {
//                 timeDiff = 10;
//             }
//             const distance = Math.sqrt(Math.pow(e.clientX - prevPosition.x, 2) + Math.pow(e.clientY - prevPosition.y, 2));
//             const speed = distance / timeDiff; // pixels per millisecond
//             setMouseSpeed(speed);
//             prevPosition = { x: e.clientX, y: e.clientY };
//             prevTime = currentTime;
//         };

//         window.addEventListener("mousemove", measureMouseSpeed);

//         // Cleanup function to remove event listener when component unmounts
//         return () => {
//             window.removeEventListener("mousemove", measureMouseSpeed);
//         };
//     }, []);

//     return mouseSpeed;
// };

// export default useMouseSpeed;
import { useState, useEffect } from "react";

const useMouseSpeed = (interval:number) => {
    // State to store mouse speed
    const [mouseSpeed, setMouseSpeed] = useState(0);
    let currentPosition = { x: 0, y: 0 };
    let prevPosition = { x: 0, y: 0 };
    let prevTime = Date.now();
    // Effect to add mouse move event listener
    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            // setPrevPosition({ x: e.clientX, y: e.clientY });
            currentPosition = { x: e.clientX, y: e.clientY };
        };
        
        const intervalId = setInterval(() => {
            const distance = Math.sqrt(Math.pow(currentPosition.x - prevPosition.x, 2) + Math.pow(currentPosition.y - prevPosition.y, 2));
            const speed = distance / interval; // pixels per millisecond
            console.log(prevPosition, speed);
            setMouseSpeed(speed);
        }, interval);

        window.addEventListener("mousemove", updateCursorPosition);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
            clearInterval(intervalId);
        };
    }, []);

    return mouseSpeed;
};

export default useMouseSpeed;
