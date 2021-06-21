window.addEventListener("DOMContentLoaded", (event) => {
  const control = document.querySelector("#control");
  const grid = document.querySelector("#layout-grid");
  const state = {};

  function getState() {
    document.querySelectorAll("select, input").forEach((field) => {
      const name = field.name.replace("grid-", "");
      const unit = field.getAttribute("unit");
      const value = unit ? `${field.value}${unit}` : field.value;

      state[name] = value;
    });
  }

  function updateGrid() {
    for (const name in state) {
      grid.setAttribute(name, state[name]);
      control.setAttribute(name, state[name]);
    }
  }

  control.addEventListener("change", () => {
    getState();
    updateGrid();
  });

  getState();
  updateGrid();
});
