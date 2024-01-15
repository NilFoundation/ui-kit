import { isBrowser } from "./isBrowser";

export function isTouch() {
  return isBrowser() ? "ontouchstart" in window : false;
}
