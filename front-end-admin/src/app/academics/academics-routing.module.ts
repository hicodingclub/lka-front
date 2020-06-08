import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { AcademicsRoutes } from '../academics-cust/academics.conf';

@NgModule({
  imports: [RouterModule.forChild(AcademicsRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class AcademicsRoutingModule { }
