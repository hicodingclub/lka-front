import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from 'mdds-angular-auth';
import { CompositeModule} from 'mdds-angular-composite';

import { UsersModule } from './users/users.module';
import { AcademicsModule } from './academics/academics.module';
import { PublicinfoModule } from './publicinfo/publicinfo.module';

import { AUTHENTICATION_LOGIN_PAGE_URI, AUTHENTICATION_SERVER_ROOT_URI, 
  AUTHENTICATION_INTERFACES, AUTHENTICATION_DROPDOWN_ITEMS, AUTHENTICATION_LOGIN_PIPELINE } from 'mdds-angular-auth';
import { authentication_login_page_uri, authentication_server_root_uri, 
  authentication_interfaces, authentication_dropdown_items, authentication_login_pipeline } from './auth.conf';
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI } from 'mdds-angular-file';
import { file_upload_uri, file_download_uri } from './file-upload.config';
import { HomepageComponent } from './homepage/homepage.component';
import { EnrollComponent } from './actions';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EnrollComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthenticationModule,
    CompositeModule,

    AcademicsModule,
    UsersModule,
    PublicinfoModule
  ],
  providers: [
    { provide: AUTHENTICATION_LOGIN_PAGE_URI, useValue: authentication_login_page_uri },
    { provide: AUTHENTICATION_SERVER_ROOT_URI, useValue: authentication_server_root_uri },
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: AUTHENTICATION_DROPDOWN_ITEMS, useValue: authentication_dropdown_items },
    { provide: AUTHENTICATION_LOGIN_PIPELINE, useValue: authentication_login_pipeline },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
