import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { RolesCoreRoutes } from '../roles-cust/roles.conf';

@NgModule({
  imports: [RouterModule.forChild(RolesCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class RolesRoutingCoreModule { }
