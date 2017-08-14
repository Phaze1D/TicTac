import { Base } from 'elements/Base'
import { MAX_GAME_WIDTH, MAX_GAME_HEIGHT } from 'utils/constants'



export class Cell implements Base {

  static WIDTH: number =  (MAX_GAME_WIDTH)/3
  static HEIGHT: number = (MAX_GAME_HEIGHT)/3

  private row: number
  private column: number

  public sign: number

  constructor(row: number, column: number){
    this.sign = -1
    this.row = row
    this.column = column
  }

  private drawCross = (ctx) => {
    let x = Cell.WIDTH * this.row + Cell.WIDTH/2
    let y = Cell.HEIGHT * this.column + Cell.HEIGHT/2
    let len = Cell.WIDTH/3

    ctx.beginPath();

    ctx.moveTo(x - len, y - len);
    ctx.lineTo(x + len, y + len);

    ctx.moveTo(x + len, y - len);
    ctx.lineTo(x - len, y + len);
    ctx.stroke();
  }

  private drawCircle = (ctx) => {
    let x = Cell.WIDTH * this.row + Cell.WIDTH/2
    let y = Cell.HEIGHT * this.column + Cell.HEIGHT/2
    let len = Cell.WIDTH/3

    ctx.beginPath();
    ctx.arc(x,y,len,0,2*Math.PI);
    ctx.stroke();
  }

  public render = (ctx: CanvasRenderingContext2D) => {
    if(this.sign === 0){
      this.drawCross(ctx)
    }else if(this.sign === 1){
      this.drawCircle(ctx)
    }
  }
}
