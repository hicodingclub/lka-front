import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ManageModule } from './manage/manage.module';
import { AuthenticationModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ManageModule,
    AuthenticationModule,
    HomeModule,
    UsersModule,
    RolesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
