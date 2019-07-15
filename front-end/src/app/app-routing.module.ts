import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { actionPath } from './actions';

const routes: Routes = [
    { path: '', component: HomepageComponent },
	  { path: "actions", children: actionPath },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
