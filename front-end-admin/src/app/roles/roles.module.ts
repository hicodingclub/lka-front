import { NgModule } from '@angular/core';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesCoreModule } from './roles.core.module';
import { RolesCustModule } from '../roles-cust/roles.cust.module'

@NgModule({
  imports: [
    RolesRoutingModule,
    RolesCoreModule,
    RolesCustModule,
  ],
  declarations: [
  ],
  exports: [
    RolesCoreModule,
    RolesCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class RolesModule { }
