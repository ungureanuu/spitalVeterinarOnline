import { Component, OnInit } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-pet-articles-feed',
  templateUrl: 'pet-articles-feed.component.html',
  styleUrls: ['pet-articles-feed.component.scss'],
})
export class PetArticlesFeedComponent implements OnInit {

  ngOnInit() {
    console.log('in PetArticlesFeedComponent');
  }
}

