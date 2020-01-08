import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-timeline',
  templateUrl: 'pet-timeline.component.html',
})
export class PetTimelineComponent implements OnInit {
  public animalType;
  constructor( ) {
  }

  ngOnInit() {
  }

  public getType(type) {
    this.animalType = type;
  }
}
