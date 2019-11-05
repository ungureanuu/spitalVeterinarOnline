import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-articles-filter',
  templateUrl: 'pet-articles-filter.component.html',
  styleUrls: ['pet-articles-filter.component.scss'],
})
export class PetArticlesFilterComponent implements OnInit {

  ngOnInit() {
    console.log('in PetArticleFilterComponent');
  }
}
