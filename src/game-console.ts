import Game from './game/game';
import Renderer from './renderer/renderer';

export default class GameConsole {
  game: Game;
  renderer: Renderer;

  constructor() {
    const canvas = document.querySelector('canvas');
    
    this.game = new Game();
    this.renderer = new Renderer({
      game: this.game,
      canvas,
    });
  }

  play(): void {
    this.game.start();
    this.renderer.start();
  }
}