# <layout-grid> element

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

### `type`

`columns` or `rows`

### `color`

Color of the columns or rows.

### `count`

Number of rows or columns

### `position`

Placement of grid, could be one of the values: `top`, `bottom`, `left`, `right`, `center`, `stretch`

### `margin`

The outter spacing of streched grid (`position="stretch`)

### `offset`

Position offet of grid, used only when the grid `position` has one of the values: `top`, `bottom`, `left`, `right`

### `gutter`

Space between columns or rows

### `width`

Width of each column

### `height`

Height of each row
