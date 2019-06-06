import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AcademicsModule } from './academics/academics.module';
import { PublicinfoModule } from './publicinfo/publicinfo.module';
import { AccessModule } from './access/access.module';
import { FilesModule } from './files/files.module';

import { AuthenticationModule } from 'mdds-angular-auth';

import { AUTHTICATION_LOGIN_PAGE_URI, AUTHTICATION_SERVER_ROOT_URI, AUTHTICATION_INTERFACES } from 'mdds-angular-auth';
import { authentication_login_page_uri, authentication_server_root_uri, authentication_interfaces } from './auth.conf';
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI } from 'mdds-angular-file';
import { file_upload_uri, file_download_uri } from './file-upload.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AcademicsModule,
    AuthenticationModule,
    HomeModule,
    UsersModule,
    RolesModule,
    PublicinfoModule,
    AccessModule,
    FilesModule,
  ],
  providers: [
    { provide: AUTHTICATION_LOGIN_PAGE_URI, useValue: authentication_login_page_uri },
    { provide: AUTHTICATION_SERVER_ROOT_URI, useValue: authentication_server_root_uri },
    { provide: AUTHTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
