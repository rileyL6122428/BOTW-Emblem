import Game from '../game/game';

export default class Renderer {
  private game: Game;
  private canvas: HTMLCanvasElement;
  
  constructor(options: { game: Game, canvas: HTMLCanvasElement }) {
    this.game = options.game;
    this.canvas = options.canvas;
  }
  
  start(): void {
    this.width = 15 * 45;
    this.height = 10 * 45;

    const context = this.canvas.getContext('2d');
    context.fillText('HELLO WORLD', 100, 100);
  }

  set width(pixels: number) {
    this.canvas.width = pixels;
  }

  set height(pixels: number) {
    this.canvas.height = pixels;
  }
}