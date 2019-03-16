import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'mdds-angular-auth';

import { HomeComponent } from './home/home.component';
import { MFilesComponent } from './files/files.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: "home",  component: HomeComponent, canActivate: [AuthGuard] },
    { path: "files",  component: MFilesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
