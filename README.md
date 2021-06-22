# `<layout-grid>`

`<layout-grid>` is a custom element that displays an overlaying grid on the page to allow you to layout your elements with more precision.

[Demo](https://stkao05.github.io/layout-grid/)


## Usage

### Load module
You can load the module from the CDN distribution with the script tag

```
<script src="https://cdn.jsdelivr.net/npm/@stkao05/layout-grid/src/index.js"></script>
```

Or you can import the npm module from your code

```
import "@stkao05/layout-grid";
```

### Mockup
Create a `<layout-grid>` element in your page. By default, `<layout-grid>` element does not have width or height style set, and this provides you with the flexibility on how you want to position the element. You need to specify its style explicitly for it to display properly on the page.

```html
// example of a full-screen 12 columns grid
<style type="text/css">
	layout-grid {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100vw;
	  min-height: 100vh;
	}
</style>

<layout-grid
  color="rgb(0, 0, 0, 0.1)"
  type="columns"
  position="stretch"
  count="12"
  gutter="10px"
/>
```

## Attributes

#### `type`

Type of grid, could be either a rows grid or a columns grid

Type: `columns` | `rows`

#### `color`

Color of the columns or rows; could be any valid 

Type: [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

#### `count`

Number of rows or columns

Type: number

#### `position`

Placement of grid, could be one of the values: 

Type: `top` | `top` | `bottom` |`left` | `right` | `center` | `stretch`

#### `margin`

The outter spacing of streched grid (`position="stretch`)

Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

#### `offset`

Position offet of grid, used only when the grid `position` has one of the values: `top`, `bottom`, `left`, `right`

Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

#### `gutter`

Space between columns or rows

Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

#### `width`

Width of each column

Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

#### `height`

Height of each row

Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `shortcut`

Activate shortcut support. Shortcut support allow you to show / hide the grid via `Ctrl + g`

Type: boolean (present of attribute is true, false if absent)

```html
<layout-grid shortcut></layout-grid>
```
