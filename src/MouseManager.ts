class MouseManager {
    private static instance: MouseManager;
    public speed: number = 0;
    public rotation: number = 0;
    public curMousePosition: { x: number; y: number } = { x: 0, y: 0 };
    public prevMousePosition: { x: number; y: number } = { x: 0, y: 0 };
  
    private constructor() {
      this.init();
    }
  
    public static getInstance(): MouseManager {
      if (!MouseManager.instance) {
        MouseManager.instance = new MouseManager();
      }
      return MouseManager.instance;
    }
  
    private init() {
      window.addEventListener("mousemove", this.updateCursorPosition.bind(this));
      window.requestAnimationFrame(this.tick.bind(this));
    }
  
    private updateCursorPosition(e: MouseEvent) {
      this.curMousePosition = { x: e.clientX, y: e.clientY };
    }
  
    private tick() {
      const deltaX = this.curMousePosition.x - this.prevMousePosition.x;
      const deltaY = this.curMousePosition.y - this.prevMousePosition.y;
      this.prevMousePosition = { ...this.curMousePosition };
      this.speed = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 150);
      this.rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      window.requestAnimationFrame(this.tick.bind(this));
    }
  }
  
  export default MouseManager;