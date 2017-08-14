import { Grid } from 'elements/Grid'
import { MAX_GAME_WIDTH, MAX_GAME_HEIGHT } from 'utils/constants'

export class Engine {

  private canvas: HTMLCanvasElement
  private resetButton: HTMLButtonElement
  private ctx: CanvasRenderingContext2D
  private grid: Grid


  constructor(){
    this.initCanvas()
    this.initResetButton()

    this.grid = new Grid()
    this.canvas.addEventListener('click', this.handleClick)
    this.resetButton.addEventListener('click', this.grid.reset)
  }

  /**
  * Creates a canvas element and appends it to canvas-wrapper
  */
  private initCanvas = () => {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = MAX_GAME_WIDTH
    this.canvas.height = MAX_GAME_HEIGHT
    document.getElementById('canvas-wrapper').appendChild(this.canvas)
  }

  /**
  * Get the reset button dom element
  */
  private initResetButton = () => {
    this.resetButton = <HTMLButtonElement>document.getElementById('reset-b')
  }

  /**
  * Starts the game
  */
  public start = () => {
    this.gameLoop()
  }

  /**
  * Finds which section of the grid was clicked
  * @param {MouseEvent} event
  */
  public handleClick = (event: MouseEvent) => {
    let cr = 2
    if(event.offsetX <= MAX_GAME_WIDTH/3 * 2) cr = 1
    if(event.offsetX <= MAX_GAME_WIDTH/3) cr = 0

    let cc = 2
    if(event.offsetY <= MAX_GAME_HEIGHT/3 * 2) cc = 1
    if(event.offsetY <= MAX_GAME_HEIGHT/3) cc = 0

    this.grid.handleClick(cr,cc)
  }

  /**
  * The game loop
  * This is a simple version of a javascript game loop that uses
  * window.requestAnimationFrame
  */
  public gameLoop = () => {
    this.ctx.clearRect(0,0, MAX_GAME_WIDTH, MAX_GAME_HEIGHT)
    this.grid.render(this.ctx)

    window.requestAnimationFrame(this.gameLoop);
  }
}
