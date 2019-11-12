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
import { PetArticlesRoutingModule } from './pet-articles-routing.module';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { NgxMasonryModule } from 'ngx-masonry';


// components
import { PetArticlesComponent } from './pet-articles.component';
import { PetArticlesFilterComponent } from './pet-articles-filter/pet-articles-filter.component';
import { PetArticlesFeedComponent } from './pet-articles-feed/pet-articles-feed.component';



const COMPONENTS = [
  PetArticlesComponent,
  PetArticlesFilterComponent,
  PetArticlesFeedComponent,
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
  PetArticlesRoutingModule,
  CustomMaterialModule,
  SharedModule,
  NgxMasonryModule,
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
export class PetArticlesModule { }
