import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { AcademicsComponent } from './academics.component';
import { AcademicsCoreRoutes } from '../academics-cust/academics.conf';

@NgModule({
  imports: [RouterModule.forChild(AcademicsCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class AcademicsRoutingCoreModule { }
