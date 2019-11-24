import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material';


@Component({
  selector: 'app-pet-filter',
  templateUrl: 'pet-filter.component.html',
  styleUrls: ['pet-filter.component.scss'],
})
export class PetFilterComponent implements OnInit {

  @Output() animalTypeEmit = new EventEmitter();
  public animalsList;
  public animalType;

  ngOnInit() {
    this.animalsList = [
      {type: 'pisica'},
      {type: 'catel'}
    ];
    this.animalType = 'pisica';
  }

  radioChange(event: MatRadioChange) {
    console.log(event.value);
    this.animalTypeEmit.emit(event.value);
  }  
}
