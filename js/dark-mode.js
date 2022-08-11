import { toggle, theme } from "./elements.js";

export default function Theme() {
  if (theme === "dark") document.body.classList.add("dark");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
  });
}
