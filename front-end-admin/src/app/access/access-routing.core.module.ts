import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccessComponent } from './access.component';
import { AccessCoreRoutes } from '../access-cust/access.conf';

@NgModule({
  imports: [RouterModule.forChild(AccessCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class AccessRoutingCoreModule { }
