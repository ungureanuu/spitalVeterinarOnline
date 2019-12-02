import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { TimelineItemDirective } from './directives/timeline-item.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ProgressComponent } from './components/progress/progress.component';

// import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
// import { SideMenuComponent } from './components/side-menu/side-menu.component';
// import { NavbarComponent } from './components/navbar/navbar.component';

const ExportedComponents = [
    TimelineItemDirective,
    FileUploadComponent,
    ProgressComponent,
    DialogComponent
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
  entryComponents: [DialogComponent]
})
export class SharedModule { }
