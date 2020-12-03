class Dot {
  constructor (x, y, color) {
    this.x = x         // X좌표
    this.y = y         // Y좌표
    this.r = 4         // 선 굵기
    this.color = color // 선 색깔

    this.theta = Math.random() * Math.PI // 초기 회전 위치
    this.baseT = Math.random() // 얼마나 퍼져있는지
    
    this.t = document.getElementById('t')
    this.s = document.getElementById('s')
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  render (ctx, position) {
    const prev = { x: this.x, y: this.y } // 이동 이전 위치
    this.theta += parseFloat(this.s.value) // 회전을 0.5 함
    this.x = position.x + Math.cos(this.theta) * (this.baseT * this.t.value) // x 이동
    this.y = position.y + Math.sin(this.theta) * (this.baseT * this.t.value) // y 이동

    ctx.beginPath() // 선을...

    ctx.lineWidth = this.r // 선 굵기 설정
    ctx.strokeStyle = this.color // 선 색깔 설정

    ctx.moveTo(prev.x, prev.y) // 이전위치부터... 
    ctx.lineTo(this.x, this.y) // 현재위치까지...

    ctx.stroke()
    ctx.closePath() // 긋는다
  }
}
