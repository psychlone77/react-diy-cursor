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
    mouse: { x: number; y: number },
    previousMouse: { x: number; y: number },
    circle: { x: number; y: number },
    currentScale: number,
    currentAngle: number,
    speed: number
) => {
    const animate = () => {
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
        const scaleTransform = `scale(${1 - currentScale}, ${1 + currentScale})`;

        const angle = Math.atan2(deltaY2, deltaX2) + Math.PI / 2;
        currentAngle = angle;
        const rotateTransform = `rotate(${currentAngle}rad)`;

        const width = cursor.offsetWidth;
        const height = cursor.offsetHeight;
        if (cursor) {
            cursor.style.transform = `${rotateTransform} ${scaleTransform}`;
            const top = circle.y - height / 2;
            const left = circle.x - width / 2;
            cursor.style.top = `${top}px`;
            cursor.style.left = `${left}px`;
        }

        window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
};
