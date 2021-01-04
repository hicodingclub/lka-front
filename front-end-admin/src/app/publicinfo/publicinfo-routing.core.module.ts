import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  PublicinfoComponent
} from './publicinfo.component';
import {
  PublicinfoCoreRoutes
} from '../publicinfo-cust/publicinfo.conf';
@NgModule({
  imports: [RouterModule.forChild(PublicinfoCoreRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class PublicinfoRoutingCoreModule {}