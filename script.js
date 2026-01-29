const windows = document.querySelectorAll(".window");
const triggers = document.querySelectorAll("[data-window]");
const menuTime = document.querySelector(".menubar__right");
const iconArea = document.querySelector(".icons");
const icons = document.querySelectorAll(".icon");
let zIndex = 10;

const formatMenubarTime = (date) => {
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);
  return `${time} · ${day}`;
};

const updateMenubarTime = () => {
  if (!menuTime) return;
  menuTime.textContent = formatMenubarTime(new Date());
};

const placeIconsRandomly = () => {
  if (!iconArea || icons.length === 0) return;
  const bounds = iconArea.getBoundingClientRect();
  const padding = 12;
  icons.forEach((icon) => {
    const { width, height } = icon.getBoundingClientRect();
    const maxLeft = Math.max(padding, bounds.width - width - padding);
    const maxTop = Math.max(padding, bounds.height - height - padding);
    const left = padding + Math.random() * (maxLeft - padding);
    const top = padding + Math.random() * (maxTop - padding);
    icon.style.left = `${left}px`;
    icon.style.top = `${top}px`;
  });
};

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

updateMenubarTime();
placeIconsRandomly();
setInterval(updateMenubarTime, 60_000);
window.addEventListener("resize", () => {
  placeIconsRandomly();
});
