const SIZE_OF_BOX = 30

class App {
  constructor () {
    /**
     * @type {HTMLCanvasElement}
     */
    this.elem = document.getElementById('render')
    this.input = document.getElementById('input')
    this.ctx = this.elem.getContext('2d')

    this.mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    }

    this.boxes = []

    this.resize()
    this.animation()

    window.onresize = () => this.resize()
    this.input.onkeyup = () => this.resize()
    this.input.onchange = () => window.location.reload()
  }

  resize () {
    this.elem.width = window.innerWidth
    this.elem.height = window.innerHeight

    this.boxes = []

    let xmany = 0, ymany = 0
    while ((xmany-1) * SIZE_OF_BOX < this.elem.width) xmany++
    while ((ymany-1) * SIZE_OF_BOX < this.elem.height) ymany++

    console.log(xmany, ymany)

    for (let x = 0; x < xmany; x++) {
      for (let y = 0; y < ymany; y++) {
        try {
          setTimeout(() => {
            this.boxes.push(new Box(SIZE_OF_BOX, x, y))
          }, Number(new Function('x', 'y', 'return ' + this.input.value)(x, y)))
        } catch (error) {
          
        }
      }
    }
  }

  animation () {
    window.requestAnimationFrame(() => this.animation())
    this.boxes.forEach((box) => box.render(this.ctx))
  }
}

window.onload = () => new App()
