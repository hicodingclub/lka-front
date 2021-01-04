import {
  NgModule
} from '@angular/core';
import {
  AcademicsRoutingModule
} from './academics-routing.module';
import {
  AcademicsCoreModule
} from './academics.core.module';
import {
  AcademicsCustModule
} from '../academics-cust/academics.cust.module'
@NgModule({
  imports: [
    AcademicsRoutingModule,
    AcademicsCoreModule,
    AcademicsCustModule,
  ],
  declarations: [],
  exports: [
    AcademicsCoreModule,
    AcademicsCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class AcademicsModule {}