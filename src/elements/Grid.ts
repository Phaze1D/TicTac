import { Base } from 'elements/Base'
import { Cell } from 'elements/Cell'
import { MAX_GAME_WIDTH, MAX_GAME_HEIGHT } from 'utils/constants'


export class Grid implements Base {

  static WIDTH: number = MAX_GAME_WIDTH
  static HEIGHT: number = MAX_GAME_HEIGHT

  private cells: Array<Array<Cell>>
  private turn: boolean = false


  constructor(){
    this.initCells()
  }

  public handleClick = (cr: number, cc: number) => {
    if(this.cells[cr][cc].sign === -1){
      this.cells[cr][cc].sign = Number(this.turn)
      this.turn = !this.turn
    }
  }

  private initCells = () => {
    this.cells = new Array()

    for(let i = 0; i < 3; i++){
      this.cells[i] = new Array()
      for(let j = 0; j < 3; j++){
        this.cells[i].push(new Cell(i,j))
      }
    }
  }

  private draw = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeRect(0, 0, Grid.WIDTH , Grid.HEIGHT)

    //Draw vertical lines
    ctx.beginPath()
    ctx.moveTo(Grid.WIDTH/3, 0)
    ctx.lineTo(Grid.WIDTH/3, Grid.HEIGHT)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(2*Grid.WIDTH/3, 0)
    ctx.lineTo(2*Grid.WIDTH/3, Grid.HEIGHT)
    ctx.stroke()

    //Draw horizontal lines
    ctx.beginPath()
    ctx.moveTo(0, Grid.HEIGHT/3)
    ctx.lineTo(Grid.WIDTH, Grid.HEIGHT/3)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0, 2*Grid.HEIGHT/3)
    ctx.lineTo(Grid.WIDTH, 2*Grid.HEIGHT/3)
    ctx.stroke()
  }

  public render = (ctx: CanvasRenderingContext2D) => {
    this.draw(ctx)

    for(let cellRow of this.cells){
      for(let cell of cellRow){
        cell.render(ctx)
      }
    }
  }

  public reset = () => {
    for(let cellRow of this.cells){
      for(let cell of cellRow){
        cell.sign = -1
      }
    }
  }
}
