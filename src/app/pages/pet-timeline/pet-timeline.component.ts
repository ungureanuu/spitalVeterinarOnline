import { Component, OnInit, Input } from '@angular/core';

import { PetTimelineData } from '../../@core/data/pet-timeline';

@Component({
  selector: 'app-pet-timeline',
  templateUrl: 'pet-timeline.component.html',
})
export class PetTimelineComponent implements OnInit {
  public animalType;
  constructor( private petTimelineService: PetTimelineData) {

  }

  ngOnInit() {
    console.log(this.petTimelineService);
  }

  public getType(type) {
    this.animalType = type;
  }
}
