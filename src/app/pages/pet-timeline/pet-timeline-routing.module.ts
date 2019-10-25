import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetTimelineComponent } from './pet-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { PetFilterComponent } from './pet-filter/pet-filter.component';
import { PetFeedComponent } from './pet-feed/pet-feed.component';


const routes: Routes = [{
  path: '',
  component: PetTimelineComponent,
  // children: [
  //   {
  //     path: 'calendar',
  //     component: VerticalTimelineComponent,
  //   },
  //   {
  //     path: 'progress-bar',
  //     component: PetFilterComponent,
  //   },
  //   {
  //     path: 'spinner',
  //     component: PetFeedComponent,
  //   },
  // ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetTimelineRoutingModule {
}
