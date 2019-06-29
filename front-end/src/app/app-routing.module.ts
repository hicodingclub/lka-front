import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { HomepageComponent } from './homepage/homepage.component'
import { publicRoutingPath } from './home/public-routing'
import { pipelinePath } from './pipelines';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: "home",  component: HomeComponent },
	  { path: "process", children: pipelinePath },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
