import { Renderable } from './renderable';

export abstract class Renderer<E, T extends Renderable<E>> {
  protected renderable: T;

  public abstract handle(event: E): void;
  public abstract render(): void;

  public initialize(): void {
    this.renderable.eventEmitter.subscribe((event) => {
      this.handle(event);
    });
  }
}
