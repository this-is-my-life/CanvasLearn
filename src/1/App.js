class App {
  constructor () {
    /**
     * @type {HTMLCanvasElement}
     */
    this.elem = document.getElementById('render')
    this.many = document.getElementById('many')
    this.ctx = this.elem.getContext('2d')

    this.mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    }

    this.circles = []

    for (let c = 0; c < this.many.value; c++) {
      this.circles.push(new Dot(this.mouse.x, this.mouse.y, '#6bedd4'))
    }

    this.resize()
    this.animation()
    this.many.onchange = () => this.resize()

    window.onresize = () => this.resize()
    window.onkeypress = (ev) => this.screenshot(ev)
    window.onmousemove = (ev) => this.mousemv(ev)
  }

  resize () {
    this.elem.width = window.innerWidth
    this.elem.height = window.innerHeight

    this.circles = []

    for (let c = 0; c < this.many.value; c++) {
      this.circles.push(new Dot(this.mouse.x, this.mouse.y, '#6bedd4'))
    }
  }

  animation () {
    window.requestAnimationFrame(() => this.animation())

    // clear screen
    this.ctx.fillStyle = "#0000000a"
    this.ctx.fillRect(0, 0, this.elem.width, this.elem.height)

    this.circles.forEach((circle) => circle.render(this.ctx, this.mouse))
  }

  screenshot (ev) {
    if (ev.keyCode !== 13) return
    window.open(this.elem.toDataURL(), '_blank')
  }

  mousemv (ev) {
    this.mouse.x = ev.clientX
    this.mouse.y = ev.clientY
  }
}

window.onload = () => new App()
