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

  /**
  * Draw a cross
  * @param {CanvasRenderingContext2D} ctx
  */
  private drawCross = (ctx: CanvasRenderingContext2D) => {
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

  /**
  * Draw a circle
  * @param {CanvasRenderingContext2D} ctx
  */
  private drawCircle = (ctx: CanvasRenderingContext2D) => {
    let x = Cell.WIDTH * this.row + Cell.WIDTH/2
    let y = Cell.HEIGHT * this.column + Cell.HEIGHT/2
    let len = Cell.WIDTH/3

    ctx.beginPath();
    ctx.arc(x,y,len,0,2*Math.PI);
    ctx.stroke();
  }

  /**
  * Render the cell onto the canvas
  * @param {CanvasRenderingContext2D} ctx
  */
  public render = (ctx: CanvasRenderingContext2D) => {
    if(this.sign === 0){
      this.drawCross(ctx)
    }else if(this.sign === 1){
      this.drawCircle(ctx)
    }
  }
}
