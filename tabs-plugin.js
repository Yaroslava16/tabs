"use strict";

const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

console.log(refs);

refs.controls.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "A") {
    return;
  }

  const currentActiveControl = refs.controls.querySelector(
    ".controls__item--active"
  );

  if (currentActiveControl) {
    currentActiveControl.classList.remove("controls__item--active");

    const paneId = currentActiveControl.getAttribute("href").slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);
    pane.classList.remove("pane--active");
  }

  const controlItem = e.target;
  controlItem.classList.add("controls__item--active");

  const paneId = controlItem.getAttribute("href").slice(1);
  const pane = refs.panes.querySelector(`#${paneId}`);
  pane.classList.add("pane--active");
});
