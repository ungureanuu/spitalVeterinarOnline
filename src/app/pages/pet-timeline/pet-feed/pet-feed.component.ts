import { Component, OnInit } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-pet-feed',
  templateUrl: 'pet-feed.component.html',
  styleUrls: ['pet-feed.component.scss'],
})
export class PetFeedComponent implements OnInit{

  ngOnInit() {
    console.log('in pet feed');
  }
}
