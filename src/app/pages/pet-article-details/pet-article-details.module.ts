import { NgModule } from '@angular/core';

import { PetArticleDetailsRoutingModule } from './pet-article-details-routing.module';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';


// components
import { PetArticleDetailsComponent } from './pet-article-details.component';



const COMPONENTS = [
  PetArticleDetailsComponent,
];

const MODULES = [
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
  providers: [ ],
})
export class PetArticleDetailsModule { }
