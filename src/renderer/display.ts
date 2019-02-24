import Game, { GameEvent } from '~/game/game';
import { Renderer } from './renderer';

export default class GameRenderer extends Renderer<GameEvent, Game> {

  private frameRate: number;
  private canvas: HTMLCanvasElement;

  constructor(options: { game: Game, canvas: HTMLCanvasElement, frameRate: number }) {
    super();

    this.renderable = options.game;
    this.canvas = options.canvas;
    this.frameRate = options.frameRate;
  }

  public handle(event: GameEvent): void {
    switch (event) {
      case 'start':
        setInterval(() => this.render(), this.frameRate);
        break;

      default:
        break;
    }
  }

  public render(): void {
    // TODO
  }

  // public start(): void {
  //   this.startDrawLoop();

  //   this.game.onChanges.subscribe((gameEvent) => {
  //     this.handle(gameEvent);
  //   });
    // this.width = 15 * 45;
    // this.height = 10 * 45;

    // const context = this.canvas.getContext('2d');
    // context.fillText('HELLO WORLD', 100, 100);
  // }

  // private startDrawLoop(): void {
  //   setInterval(() => {
  //     if (this.activeRenderer) {
  //       this.activeRenderer.render();
  //     }
  //   }, this.frameRate);
  // }

  // set width(pixels: number) {
  //   this.canvas.width = pixels;
  // }

  // set height(pixels: number) {
  //   this.canvas.height = pixels;
  // }
}
