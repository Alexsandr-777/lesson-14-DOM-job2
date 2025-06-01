import { task1 } from "./task1.js";
import { tasks } from "./arrow.js";
document.body.innerHTML = ``;
document.addEventListener("DOMContentLoaded", () => {
  tasks.forEach((t) => task1(t.id));
});

