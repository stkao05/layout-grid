window.addEventListener("DOMContentLoaded", (event) => {
  const grid = document.querySelector("#layout-grid");

  function renderGrid() {
    document.querySelectorAll("select, input").forEach((input) => {
      const name = input.name.replace("grid-", "");
      const value = input.value;
      grid.setAttribute(name, value);
    });
  }

  renderGrid();

  document.querySelector(".control").addEventListener("change", () => {
    renderGrid();
  });
});
