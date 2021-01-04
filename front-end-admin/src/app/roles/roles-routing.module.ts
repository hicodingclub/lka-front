import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  RolesRoutes
} from '../roles-cust/roles.conf';
@NgModule({
  imports: [RouterModule.forChild(RolesRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class RolesRoutingModule {}