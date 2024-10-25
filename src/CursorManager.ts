class CursorManager {
  private parentElement: HTMLElement;
  private cursorElement: HTMLElement;
  private mouse = { x: 0, y: 0 };
  private previousMouse = { x: 0, y: 0 };
  private circle = { x: 0, y: 0 };
  private currentScale = 0;
  private currentAngle = 0;
  private speed = 0.17;

  constructor(parentElement: HTMLElement, cursorElement: HTMLElement) {
    this.parentElement = parentElement;
    this.cursorElement = cursorElement;
    this.init();
  }

  private init() {
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.parentElement.addEventListener("mouseout", this.handleMouseOut.bind(this));
    this.parentElement.addEventListener("mouseover", this.handleMouseEnter.bind(this));
    window.requestAnimationFrame(this.tick.bind(this));
  }

  private handleMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  private handleMouseOut(e: MouseEvent) {
    if (!e.relatedTarget || !this.parentElement.contains(e.relatedTarget as Node)) {
      this.cursorElement.style.display = "none";
    }
  }

  private handleMouseEnter(e: MouseEvent) {
    if (this.parentElement.contains(e.target as Node)) {
      this.cursorElement.style.display = "block";
    }
  }

  private tick() {
    this.circle.x += (this.mouse.x - this.circle.x) * this.speed;
    this.circle.y += (this.mouse.y - this.circle.y) * this.speed;

    const deltaX = this.mouse.x - this.previousMouse.x;
    const deltaY = this.mouse.y - this.previousMouse.y;
    const deltaX2 = this.mouse.x - this.circle.x;
    const deltaY2 = this.mouse.y - this.circle.y;
    this.previousMouse.x = this.mouse.x;
    this.previousMouse.y = this.mouse.y;
    const mouseSpeed = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
    const scaleValue = (mouseSpeed / 150) * 0.5;
    this.currentScale += (scaleValue - this.currentScale) * this.speed;
    const scaleTransform = `scale(${1 - this.currentScale}, ${1 + this.currentScale})`;

    const angle = Math.atan2(deltaY2, deltaX2) + Math.PI / 2;
    this.currentAngle = angle;
    const rotateTransform = `rotate(${this.currentAngle}rad)`;

    const width = this.cursorElement.offsetWidth;
    const height = this.cursorElement.offsetHeight;
    if (this.cursorElement) {
      this.cursorElement.style.transform = `${rotateTransform} ${scaleTransform}`;
      const top = this.circle.y - height / 2;
      const left = this.circle.x - width / 2;
      this.cursorElement.style.top = `${top}px`;
      this.cursorElement.style.left = `${left}px`;
    }

    window.requestAnimationFrame(this.tick.bind(this));
  }
}

export default CursorManager;
