import { Observable, Observer } from 'rxjs';
import { Renderable } from '~/renderer/renderable';

export type GameEvent = 'start';

export default class Game implements Renderable<GameEvent> {

  public eventListener: Observable<GameEvent>;
  private eventEmitter: Observer<GameEvent>;

  constructor() {
    this.eventListener = Observable.create(
      (observer: Observer<GameEvent>) => this.eventEmitter = observer
    );
  }

  public start(): void {
    this.eventEmitter.next('start');
  }
}
