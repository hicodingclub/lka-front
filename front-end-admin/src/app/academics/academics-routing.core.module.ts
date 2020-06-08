import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AcademicsComponent } from './academics.component';
import { AcademicsCoreRoutes } from '../academics-cust/academics.conf';

@NgModule({
  imports: [RouterModule.forChild(AcademicsCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class AcademicsRoutingCoreModule { }
