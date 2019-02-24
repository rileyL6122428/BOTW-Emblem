import { Observable } from 'rxjs';

export interface Renderable<Events> {
  eventEmitter: Observable<Events>;
}
