import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetArticlesComponent } from './pet-articles.component';

const routes: Routes = [{
  path: '',
  component: PetArticlesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetArticlesRoutingModule {
}
