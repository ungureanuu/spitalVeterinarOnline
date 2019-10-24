import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-filter',
  templateUrl: 'pet-filter.component.html',
  styleUrls: ['pet-filter.component.scss'],
})
export class PetFilterComponent implements OnInit{

  ngOnInit() {
    console.log('in pet filter');
  }
}