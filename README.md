# `<layout-grid>`

`<layout-grid>` is a custom element that displays an overlaying grid on the page to allow you to layout your elements with more precision.

[Demo](https://stkao05.github.io/layout-grid/)


## Usage

### Load module
You can load the module from the CDN distribution with the script tag

```html
<script src="https://cdn.jsdelivr.net/npm/@stkao05/layout-grid/src/index.js"></script>
```

Or you can import the npm module from your code

```js
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
    height: 100vh;
    z-index: 10000;
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

### Shortcut Support

You can toggle hide and show of grid via the shortcut `ctrl + g`. By default, shortcut support is turn off, and you can enable via the `shortcut` attribute.

```html
<layout-grid shortcut />
```


## Attributes

### `type`

Type of grid, could be either a rows grid or a columns grid.  

- Required  
- Type: `columns` | `rows`. 


### `count`

Number of rows or columns

- Required
- Type: number


### `position`
Placement of grid, could be one of the values: 
- Required
- Type: `top` | `top` | `bottom` |`left` | `right` | `center` | `stretch`


### `gutter`
Space between columns or rows
- Required
- Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `width`
Width of each column
- Required when `type=columns' and `position != stretch`
- Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `height`
Height of each row
- Required when `type=rows` and `position != stretch`
- Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `color`
Background color of the columns or rows.  
- Optional, default set to `rgba(256, 0, 0, 0.1)`
- Type: [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)


### `outline`
Outline of  columns or rows
- Optional. No outline style is set by default.
- Type: [CSS outline value](https://developer.mozilla.org/en-US/docs/Web/CSS/outline).


### `margin`
The outter spacing of streched grid (`position="stretch`)
- Optional
- Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `offset`
Position offet of grid, used only when the grid `position` has one of the values: `top`, `bottom`, `left`, `right`
- Optional
- Type: [CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)


### `off`
Hide the grid
- Optional
- Type: [boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) (present of attribute is true, false if absent)


### `shortcut`
Activate shortcut support. Shortcut support allow you to show / hide the grid via `ctrl + g`
- Optional. No shortcut support is enabled by default
- Type: [boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) (present of attribute is true, false if absent)

```html
<layout-grid shortcut></layout-grid>
```
