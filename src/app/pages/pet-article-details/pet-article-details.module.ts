import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PetArticleDetailsRoutingModule } from './pet-article-details-routing.module';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';


// components
import { PetArticleDetailsComponent } from './pet-article-details.component';



const COMPONENTS = [
  PetArticleDetailsComponent,
];

const MODULES = [
  ThemeModule,
  PetArticleDetailsRoutingModule,
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
export class PetArticleDetailsModule { }
