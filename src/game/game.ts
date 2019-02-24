import { Observable } from 'rxjs';
import { Renderable } from '~/renderer/renderable';

export type GameEvent = 'start';

export default class Game implements Renderable<GameEvent> {

  public eventEmitter: Observable<GameEvent>;

}
