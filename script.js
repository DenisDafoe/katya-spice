const windows = document.querySelectorAll(".window");
const triggers = document.querySelectorAll("[data-window]");
let zIndex = 10;

const openWindow = (key) => {
  const windowEl = document.querySelector(`.window[data-window="${key}"]`);
  if (!windowEl) return;

  windowEl.classList.add("is-open");
  windowEl.setAttribute("aria-hidden", "false");
  zIndex += 1;
  windowEl.style.zIndex = zIndex;
};

const closeWindow = (windowEl) => {
  windowEl.classList.remove("is-open");
  windowEl.setAttribute("aria-hidden", "true");
};

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const key = trigger.dataset.window;
    openWindow(key);
  });
});

windows.forEach((windowEl) => {
  const closeButton = windowEl.querySelector("[data-close]");
  closeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    closeWindow(windowEl);
  });

  windowEl.addEventListener("mousedown", () => {
    zIndex += 1;
    windowEl.style.zIndex = zIndex;
  });
});
