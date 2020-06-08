import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { AccessRoutes } from '../access-cust/access.conf';

@NgModule({
  imports: [RouterModule.forChild(AccessRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class AccessRoutingModule { }
