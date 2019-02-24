import Game from '~/game/game';
import Renderer from '~/renderer/display';

export default class GameConsole {

  private game: Game;
  private renderer: Renderer;

  constructor() {
    const canvas = document.querySelector('canvas');

    this.game = new Game();
    this.renderer = new Renderer({
      canvas,
      game: this.game,
    });
  }

  public play(): void {
    this.game.start();
    this.renderer.start();
  }
}
