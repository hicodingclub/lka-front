import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  PublicinfoRoutes
} from '../publicinfo-cust/publicinfo.conf';
@NgModule({
  imports: [RouterModule.forChild(PublicinfoRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class PublicinfoRoutingModule {}