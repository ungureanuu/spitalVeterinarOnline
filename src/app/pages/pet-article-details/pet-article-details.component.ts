import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-article-details',
  templateUrl: 'pet-article-details.component.html',
  styleUrls: ['pet-article-details.component.scss']
})
export class PetArticleDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {   
      console.log('PetArticleDetailsComponent', params);
    })
    
  }
}
