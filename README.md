# FreeMase

#### A lightweight and fast masonry layout generator that supports fully variable element sizes.

- Zero dependencies
- Written in Typescript
- Supports elements of any size
- Automatically updates on element additions, removals, or resizes

![Example](https://raw.githubusercontent.com/midblue/FreeMase/main/1.png)

### Simple Usage

```js
import { FreeMase } from '../../common/src/FreeMase/FreeMase'
const parentElement = document.queryElementById('parent')
const fm = new FreeMase(parentElement)
```

### With Options

```js
const options = {
  centerX: false, // Horizontally center elements in container. Default: false.
  verbose: false, // Show debugging logs. Default: false.
}

import { FreeMase } from '../../common/src/FreeMase/FreeMase'
const parentElement = document.queryElementById('parent')
const fm = new FreeMase(parentElement, options)
```

### Add transiton animation and/or fade-in on element addition

```css
#parent > * {
  transition: top 1s, left 1s, opacity 1s;
  opacity: 0;
}
```

### Manually call reposition (should be unnecessary)

```js
fm.position()
```
