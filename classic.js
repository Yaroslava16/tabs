const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

console.log(refs);

refs.controls.addEventListener("click", onControlsClick);

function onControlsClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "A") {
    return;
  }

  const currentActiveControl = refs.controls.querySelector(
    ".controls__item--active"
  );

  if (currentActiveControl) {
    currentActiveControl.classList.remove("controls__item--active");

    const paneId = getPaneId(currentActiveControl);
    const pane = findPaneById(paneId);
    pane.classList.remove("pane--active");
  }

  const controlItem = e.target;
  controlItem.classList.add("controls__item--active");

  const paneId = getPaneId(controlItem);
  const pane = findPaneById(paneId);
  pane.classList.add("pane--active");
}

function getPaneId(control) {
  return control.getAttribute("href").slice(1);
}

function findPaneById(paneId) {
  return refs.panes.querySelector(`#${paneId}`);
}
