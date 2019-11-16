import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetArticleDetailsComponent } from './pet-article-details.component';

const routes: Routes = [{
  path: '',
  component: PetArticleDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetArticleDetailsRoutingModule {
}
