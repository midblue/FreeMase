interface RectDescriptor {
  top: number
  left: number
  right: number
  bottom: number
}

export class FreeMaseRect {
  top: number
  left: number
  right: number
  bottom: number

  constructor({
    top,
    left,
    bottom,
    right,
  }: RectDescriptor) {
    this.top = top
    this.left = left
    this.bottom = bottom
    this.right = right
  }

  get width() {
    return this.right - this.left
  }

  get height() {
    return this.bottom - this.top
  }
}
