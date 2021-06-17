/*
 * direction: "columns" | "rows";
 * count: number;
 * color: string;
 * type: "top" | "bottom" | "center" | "stretch";
 * margin: number | string;
 * offset: number | string;
 * gutter: number | string;
 * width: number | string;
 * height: number | string;
 */
class LayoutGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.validateAttr()) {
      return;
    }

    const attr = {
      direction: this.getAttribute("direction"),
      count: parseInt(this.getAttribute("count")),
      type: this.getAttribute("type"),
      gutter: this.getAttribute("gutter"),
      color: this.getAttribute("color"),
      width: this.getAttribute("width"),
      height: this.getAttribute("height"),
    };

    if (attr.color === "" || attr.color === null) {
      console.log(attr.color);
      attr.color = "rgba(256, 0, 0, 0.1)";
    }

    const style = {
      display: "grid",
      width: "100%",
      height: "100%",
    };

    const tmpl =
      attr.direction === "columns" ? "gridTemplateColumns" : "gridTemplateRows";

    const tmplValue = range(attr.count)
      .map(() =>
        attr.type === "stretch"
          ? "auto"
          : `${direction === "columns" ? width : height}px`
      )
      .join(" ");

    style[tmpl] = tmplValue;

    if (attr.gutter) {
      const gap = attr.direction === "columns" ? "columnGap" : "rowGap";
      style[gap] = attr.gutter;
    }

    if (attr.margin || attr.offset) {
      const val = attr.type === "stretch" ? margin : offset;
      style.padding =
        direction === "columns" ? `${0} ${val}px` : `${0} ${val}px`;
    }

    const container = document.createElement("div");
    for (let i = 0; i < attr.count; i++) {
      const item = document.createElement("div");
      item.style.backgroundColor = attr.color;

      container.append(item);
    }

    for (let s in style) {
      container.style[s] = style[s];
    }

    this.shadowRoot.append(container);
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

const attributeDef = {
  direction: {
    require: true,
    value: ["columns", "rows"],
  },
  count: {
    require: true,
    value: "number",
  },
  type: {
    require: true,
    value: ["top", "bottom", "center", "stretch"],
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
