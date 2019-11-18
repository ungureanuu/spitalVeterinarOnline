import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { TimelineItemDirective } from './directives/timeline-item.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
// import { SideMenuComponent } from './components/side-menu/side-menu.component';
// import { NavbarComponent } from './components/navbar/navbar.component';

const ExportedComponents = [
    TimelineItemDirective,
//   ProgressSpinnerComponent,
//   SideMenuComponent,
//   NavbarComponent
];

const MODULES = [
  CommonModule,
  FormsModule, 
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  CustomMaterialModule,
];

@NgModule({
  declarations: [
    ...ExportedComponents,
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...ExportedComponents,
    ...MODULES,
  ],
})
export class SharedModule { }
