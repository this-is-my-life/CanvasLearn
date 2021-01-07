class Box {
  constructor (size, x, y) {
    this.size = size  // 크기
    this.x = x * size // X좌표
    this.y = y * size // Y좌표
    this.i = 1
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  render (ctx) {
    this.i += 10

    ctx.beginPath() // 선을...

    ctx.rect(this.x, this.y, this.x + this.size, this.y + this.size)
    ctx.fillStyle = 'hsl(' + this.i + ', 80%, 50%)'

    ctx.fill()
    ctx.closePath() // 긋는다
  }
}
