// cursorUtils.ts
export const handleMouseOut = (setIsCursorVisible: (visible: boolean) => void) => (e: MouseEvent) => {
    if (!e.relatedTarget) {
        setIsCursorVisible(false);
    }
};

export const handleMouseEnter = (setIsCursorVisible: (visible: boolean) => void) => () => {
    setIsCursorVisible(true);
};

export const handleMouseMove = (mouse: { x: number; y: number }) => (event: MouseEvent) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
};

export const tick = (
    cursor: HTMLElement,
    curMousePosition: { x: number; y: number },
    prevMousePosition: { x: number; y: number },
    cursorPosition: { x: number; y: number },
    currentScale: number,
    currentAngle: number,
    speed: number
) => {
    const animate = () => {
        cursorPosition.x += (curMousePosition.x - cursorPosition.x) * speed;
        cursorPosition.y += (curMousePosition.y - cursorPosition.y) * speed;

        const deltaX = curMousePosition.x - prevMousePosition.x;
        const deltaY = curMousePosition.y - prevMousePosition.y;
        const deltaX2 = curMousePosition.x - cursorPosition.x;
        const deltaY2 = curMousePosition.y - cursorPosition.y;
        prevMousePosition.x = curMousePosition.x;
        prevMousePosition.y = curMousePosition.y;
        const mouseSpeed = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
        const scaleValue = (mouseSpeed / 150) * 0.5;
        currentScale += (scaleValue - currentScale) * speed;
        const scaleTransform = `scale(${1 - currentScale}, ${1 + currentScale})`;

        const angle = Math.atan2(deltaY2, deltaX2) + Math.PI / 2;
        currentAngle = angle;
        const rotateTransform = `rotate(${currentAngle}rad)`;

        const width = cursor.offsetWidth;
        const height = cursor.offsetHeight;
        if (cursor) {
            cursor.style.transform = `${rotateTransform} ${scaleTransform}`;
            const top = cursorPosition.y - height / 2;
            const left = cursorPosition.x - width / 2;
            cursor.style.top = `${top}px`;
            cursor.style.left = `${left}px`;
        }

        window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
};
