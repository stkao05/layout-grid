window.addEventListener("DOMContentLoaded", (event) => {
  const control = document.querySelector("#control");
  const grid = document.querySelector("#layout-grid");
  const state = {};

  function getState() {
    document.querySelectorAll("select, input").forEach((input) => {
      const name = input.name.replace("grid-", "");
      const unit = input.getAttribute("unit");
      const value = unit ? `${input.value}${unit}` : input.value;

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
