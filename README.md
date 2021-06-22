# `<layout-grid>`

## Usage

```html
<layout-grid
  id="layout-grid"
  color="rgb(0, 0, 0, 0.1)"
  type="rows"
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
