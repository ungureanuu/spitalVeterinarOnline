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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { PetTimelineComponent } from './pet-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { PetFilterComponent } from './pet-filter/pet-filter.component';
import { PetFeedComponent } from './pet-feed/pet-feed.component';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

//services
import { PetTimelineService } from './pet-timeline.service';

const COMPONENTS = [
  PetTimelineComponent,
  VerticalTimelineComponent,
  PetFilterComponent,
  PetFeedComponent,
  DialogComponent
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
  FormsModule, 
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    PetTimelineService,
    { provide: Window, useValue: window },
  ],
  entryComponents: [DialogComponent]
})
export class PetTimelineModule { }
