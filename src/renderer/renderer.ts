import Game from '~/game/game';

export default class Renderer {
  private game: Game;
  private canvas: HTMLCanvasElement;

  private currentRenderer: Renderer;

  constructor(options: { game: Game, canvas: HTMLCanvasElement }) {
    this.game = options.game;
    this.canvas = options.canvas;
  }

  public start(): void {
    this.startDrawLoop();

    this.game.onChanges.subscribe((gameEvent) => {
      this.handle(gameEvent);
    });
    // this.width = 15 * 45;
    // this.height = 10 * 45;

    // const context = this.canvas.getContext('2d');
    // context.fillText('HELLO WORLD', 100, 100);
  }

  private startDrawLoop(): void {
    setInterval(() => {
      if (this.activeRenderer) {
        this.activeRenderer.render();
      }
    }, this.frameRate);
  }

  private handle(gameEvent): void {
    switch (gameEvent) {
      case gameEvent.BEGIN_CHAPTER:
        this.currentRenderer = this.getChapterRenderer(gameEvent.chapterId);
        break;
    }
  }

  set width(pixels: number) {
    this.canvas.width = pixels;
  }

  set height(pixels: number) {
    this.canvas.height = pixels;
  }
}
