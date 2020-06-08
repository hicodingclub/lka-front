import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { RouteReuseStrategy } from "@angular/router";
import {
  MddsRouteReuseStrategy,
  MDDS_ROUTE_REUSE_RUIs,
} from "@hicoder/angular-core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AuthenticationModule } from "@hicoder/angular-auth";
import { CompositeModule } from "@hicoder/angular-composite";

import { AcademicsModule } from "./academics/academics.module";
import { PublicinfoModule } from "./publicinfo/publicinfo.module";

import {
  AUTHENTICATION_AUTH_PAGE_ROOT_URI,
  AUTHENTICATION_SERVER_ROOT_URI,
  AUTHENTICATION_INTERFACES,
  AUTHENTICATION_DROPDOWN_ITEMS,
  AUTHENTICATION_LOGIN_PIPELINE,
  AUTHENTICATION_REGISTRATION_PIPELINE,
} from "@hicoder/angular-auth";
import {
  authentication_page_root_uri,
  authentication_server_root_uri,
  authentication_interfaces,
  authentication_dropdown_items,
  authentication_login_pipeline,
  authentication_registration_pipeline,
} from "./injection-tokens/auth.conf";
import { FILE_UPLOAD_URI, FILE_DOWNLOAD_URI } from "@hicoder/angular-file";
import {
  file_upload_uri,
  file_download_uri,
} from "./injection-tokens/file-upload.config";
import { route_reuse_uris } from "./injection-tokens/reuse-strategy.conf";

import { HomepageComponent } from "./homepage/homepage.component";
import { ContactComponent } from "./contact/contact.component";
import { EnrollComponent, PayComponent } from "./actions";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    EnrollComponent,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

    AuthenticationModule,
    CompositeModule,

    AcademicsModule,
    PublicinfoModule,
  ],
  providers: [
    {
      provide: AUTHENTICATION_AUTH_PAGE_ROOT_URI,
      useValue: authentication_page_root_uri,
    },
    {
      provide: AUTHENTICATION_SERVER_ROOT_URI,
      useValue: authentication_server_root_uri,
    },
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    {
      provide: AUTHENTICATION_DROPDOWN_ITEMS,
      useValue: authentication_dropdown_items,
    },
    {
      provide: AUTHENTICATION_LOGIN_PIPELINE,
      useValue: authentication_login_pipeline,
    },
    {
      provide: AUTHENTICATION_REGISTRATION_PIPELINE,
      useValue: authentication_registration_pipeline,
    },
    { provide: FILE_UPLOAD_URI, useValue: file_upload_uri },
    { provide: FILE_DOWNLOAD_URI, useValue: file_download_uri },
    { provide: MDDS_ROUTE_REUSE_RUIs, useValue: route_reuse_uris },
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
