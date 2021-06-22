const attributeDef = {
  type: {
    require: true,
    value: ["columns", "rows"],
  },
  count: {
    require: true,
    value: "number",
  },
  position: {
    require: true,
    value: ["top", "bottom", "left", "right", "center", "stretch"],
  },
  margin: {
    require: false,
    value: (v) => CSS.supports("padding", v),
  },
  offset: {
    require: false,
    value: (v) => CSS.supports("padding", v),
  },
  gutter: {
    require: true,
    value: (v) => CSS.supports("column-gap", v),
  },
  width: {
    require: false,
    value: (v) => CSS.supports("width", v),
  },
  height: {
    require: false,
    value: (v) => CSS.supports("height", v),
  },
};

class LayoutGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleShortcut = this.handleShortcut.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.handleShortcut);
  }

  static get observedAttributes() {
    return Object.keys(attributeDef);
  }

  attributeChangedCallback() {
    this.render();

    if (this.getAttribute("shortcut") !== null) {
      document.addEventListener("keydown", this.handleShortcut);
    } else {
      document.removeEventListener("keydown", this.handleShortcut);
    }
  }

  handleShortcut(event) {
    if (event.key === "g" && event.ctrlKey) {
      if (this.style.display == "none") {
        this.style.display = "";
      } else {
        this.style.display = "none";
      }
    }
  }

  render() {
    if (!this.validateAttr()) {
      return;
    }

    const attr = {
      type: this.getAttribute("type"),
      count: parseInt(this.getAttribute("count")),
      position: this.getAttribute("position"),
      gutter: this.getAttribute("gutter"),
      color: this.getAttribute("color"),
      width: this.getAttribute("width"),
      height: this.getAttribute("height"),
      offset: this.getAttribute("offset"),
      margin: this.getAttribute("margin"),
    };

    if (attr.color === "" || attr.color === null) {
      attr.color = "rgba(256, 0, 0, 0.1)";
    }

    const style = {
      display: "grid",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
    };

    const length =
      attr.position === "stretch"
        ? "auto"
        : `${attr.type === "columns" ? attr.width : attr.height}`;

    const tmpl =
      attr.type === "columns" ? "gridTemplateColumns" : "gridTemplateRows";

    const tmplValue = range(attr.count)
      .map(() => length)
      .join(" ");

    style[tmpl] = tmplValue;

    if (attr.gutter) {
      const gap = attr.type === "columns" ? "columnGap" : "rowGap";
      style[gap] = attr.gutter;
    }

    switch (attr.position) {
      case "top": {
        if (attr.type == "rows") {
          style.alignContent = "start";
        }
        break;
      }
      case "right": {
        if (attr.type == "columns") {
          style.justifyContent = "end";
        }
        break;
      }
      case "bottom": {
        if (attr.type == "rows") {
          style.alignContent = "end";
        }
        break;
      }
      case "left": {
        if (attr.type == "columns") {
          style.justifyContent = "start";
        }
        break;
      }
      case "center": {
        if (attr.type == "columns") {
          style.justifyContent = "center";
        } else {
          style.alignContent = "center";
        }
      }
    }

    if (attr.margin || attr.offset) {
      const val = attr.position === "stretch" ? attr.margin : attr.offset;
      style.padding = attr.type === "columns" ? `${0} ${val}` : `${val} ${0}`;
    }

    if (this.container) {
      this.container.remove();
    }

    this.container = document.createElement("div");
    for (let i = 0; i < attr.count; i++) {
      const item = document.createElement("div");
      item.style.backgroundColor = attr.color;

      this.container.append(item);
    }

    for (let s in style) {
      this.container.style[s] = style[s];
    }

    this.shadowRoot.append(this.container);
  }

  validateAttr() {
    const invalid = [];

    for (const attr in attributeDef) {
      const def = attributeDef[attr];
      const attrValue = this.getAttribute(attr);

      if (!validateAttr(def, attrValue)) {
        invalid.push(attr);
      }
    }

    if (invalid.length > 0) {
      console.warn(
        `<layout-grid> error: missing or invalid attribute value (${invalid.join(
          ", "
        )})`
      );
      return false;
    }

    return true;
  }
}

customElements.define("layout-grid", LayoutGrid);

function range(size, startAt) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function validateAttr(def, attrValue) {
  if (attrValue === null || attrValue === "") {
    return !def.require;
  }

  if (Array.isArray(def.value)) {
    return def.value.indexOf(attrValue) !== -1;
  }

  if (def.value === "number") {
    return !isNaN(parseInt(attrValue));
  }

  if (typeof def.value === "function") {
    return def.value(attrValue);
  }

  return true;
}
