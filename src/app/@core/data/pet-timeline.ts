import { Observable } from 'rxjs';

export abstract class PetTimelineData {
  abstract getPetTimelineData(): Observable<any[]>;
}
