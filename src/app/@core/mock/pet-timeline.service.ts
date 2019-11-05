import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PetTimelineData } from '../data/pet-timeline';

@Injectable()
export class PetTimelineService extends PetTimelineData {

  private data: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  getPetTimelineData(): Observable<number[]> {
    return observableOf(this.data);
  }
}
