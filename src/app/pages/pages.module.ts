import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';
//import { ECommerceModule } from './e-commerce/e-commerce.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    NbMenuModule,
    PagesRoutingModule,
    SharedModule,
    ThemeModule,  
    DashboardModule,
    //ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
