import Game from '~/game/game';
import Renderer from '~/renderer/game-renderer';

export default class GameConsole {

  private game: Game;
  private renderer: Renderer;

  constructor() {
    const canvas = document.querySelector('canvas');
    const frameRate = 60;

    this.game = new Game();
    this.renderer = new Renderer({
      canvas,
      game: this.game,
      frameRate,
    });
  }

  public play(): void {
    this.renderer.initialize();
    this.game.start();
    // this.renderer.start();
  }
}
