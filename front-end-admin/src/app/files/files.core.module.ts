import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './files.directive';




import { FileUploadModule } from '@hicoder/angular-file';


import { MddsCoreModule } from '@hicoder/angular-core';

import { FilesRoutingCoreModule } from './files-routing.core.module';
import { FilesComponent } from './files.component';
import { FilesRefSelectDirective } from './files.component';

import { Files_SERVER_ROOT_URI } from './files.tokens';
import { files_server_root_uri } from '../files-cust/files.conf';

// Import components for each schema

import { MfileListComponent } from './mfile/mfile-list/mfile-list.component';



import { MfileDetailFieldComponent } from './mfile/mfile-detail/mfile-detail-field.component';
import { MfileEditComponent } from './mfile/mfile-edit/mfile-edit.component';

import { MfileService } from './mfile/mfile.service';

import { MfilegroupListComponent } from './mfilegroup/mfilegroup-list/mfilegroup-list.component';

import { MfilegroupDetailComponent } from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';

import { MfilegroupDetailFieldComponent } from './mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component';
import { MfilegroupEditComponent } from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';

import { MfilegroupService } from './mfilegroup/mfilegroup.service';


import { MfilegroupListSelectComponent } from './mfilegroup/mfilegroup-list/mfilegroup-list-select.component';

import { MfilegroupListSelectIndexComponent } from './mfilegroup/mfilegroup-list/mfilegroup-list-select-index.component';
import { MfilegroupDetailPopComponent } from './mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component';
import { MfilegroupDetailSelComponent } from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component';

import { MfileListSubComponent } from './mfile/mfile-list/mfile-list-sub.component';



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
  providers: [
    { provide: Files_SERVER_ROOT_URI, useValue: files_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    MfileService,
    MfilegroupService,
  ],
  entryComponents: [
    MfilegroupListSelectComponent,
    MfilegroupListSelectIndexComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfilegroupEditComponent,
  ]
})
export class FilesCoreModule { }
