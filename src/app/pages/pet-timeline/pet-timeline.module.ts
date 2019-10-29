import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PetTimelineRoutingModule } from './pet-timeline-routing.module';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';


// components
import { PetTimelineComponent } from './pet-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { PetFilterComponent } from './pet-filter/pet-filter.component';
import { PetFeedComponent } from './pet-feed/pet-feed.component';



const COMPONENTS = [
  PetTimelineComponent,
  VerticalTimelineComponent,
  PetFilterComponent,
  PetFeedComponent,
];

const MODULES = [
  NbAlertModule,
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  ThemeModule,
  PetTimelineRoutingModule,
  CustomMaterialModule,
  SharedModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    { provide: Window, useValue: window },
  ],
})
export class PetTimelineModule { }
