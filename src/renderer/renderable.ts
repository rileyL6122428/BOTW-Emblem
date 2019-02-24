import { Observable } from 'rxjs';

export interface Renderable<Events> {
  eventListener: Observable<Events>;
}
