import { useEffect } from "react";
import CursorManager from "../CursorManager";

const useCursorManager = (parentSelector: string, cursorSelector: string) => {
  useEffect(() => {
    const parentElement = document.querySelector(parentSelector) as HTMLElement;
    const cursorElement = document.querySelector(cursorSelector) as HTMLElement;

    if (parentElement && cursorElement) {
      new CursorManager(parentElement, cursorElement);
    }
  }, [parentSelector, cursorSelector]);
};

export { useCursorManager };