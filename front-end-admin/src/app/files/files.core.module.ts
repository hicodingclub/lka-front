import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from './files.directive';
import {
  FileUploadModule
} from '@hicoder/angular-file';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
import {
  FilesRoutingCoreModule
} from './files-routing.core.module';
import {
  FilesComponent
} from './files.component';
import {
  FilesRefSelectDirective
} from './files.component';
// Import components for each schema
import {
  MfileComponent
} from './mfile/mfile.component';
import {
  MfileListComponent
} from './mfile/mfile-list/mfile-list.component';
import {
  MfileListCustComponent
} from '../files-cust/base/mfile/mfile-list.cust.component';
import {
  MfileDetailFieldComponent
} from './mfile/mfile-detail/mfile-detail-field.component';
import {
  MfileEditComponent
} from './mfile/mfile-edit/mfile-edit.component';
import {
  MfileEditCustComponent
} from '../files-cust/base/mfile/mfile-edit.cust.component';
import {
  MfilegroupComponent
} from './mfilegroup/mfilegroup.component';
import {
  MfilegroupListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list.component';
import {
  MfilegroupListCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-list.cust.component';
import {
  MfilegroupDetailComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';
import {
  MfilegroupDetailCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-detail.cust.component';
import {
  MfilegroupDetailFieldComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component';
import {
  MfilegroupEditComponent
} from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';
import {
  MfilegroupEditCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-edit.cust.component';
import {
  MfilegroupListSelectComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-select.component';
import {
  MfilegroupListSelectIndexComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component';
import {
  MfilegroupDetailPopComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component';
import {
  MfilegroupDetailSelComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component';
import {
  MfileListSubComponent
} from './mfile/mfile-list/mfile-list-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    FilesRoutingCoreModule,
  ],
  declarations: [
    FilesComponent,
    FilesRefSelectDirective,
    MfileComponent,
    MfileListComponent,
    MfileListCustComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfileEditCustComponent,
    MfilegroupComponent,
    MfilegroupListComponent,
    MfilegroupListCustComponent,
    MfilegroupDetailCustComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MfilegroupEditCustComponent,
    MfilegroupListSelectComponent,
    MfilegroupListSelectIndexComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfileListSubComponent,
  ],
  exports: [
    FilesComponent,
    MfileListComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfilegroupListComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MfilegroupListSelectComponent,
    MfilegroupListSelectIndexComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfileListSubComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MfilegroupListSelectComponent,
    MfilegroupListSelectIndexComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfilegroupEditComponent,
  ]
})
export class FilesCoreModule {}