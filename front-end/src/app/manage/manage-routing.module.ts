import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router'

import { MraRouteReuseStrategy } from 'mean-rest-angular';

import { ManageComponent } from './manage.component';
import { ManageRoutes } from '../manage.conf';
//Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
    

import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
    

import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
    

import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
    





const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: 'edit/:id', component: EventEditComponent},
    {path: 'new', component: EventEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

const studentRoutingPath = [
    {path: 'list', component: StudentListComponent},
    {path: 'detail/:id', component: StudentDetailComponent},
    {path: 'edit/:id', component: StudentEditComponent},
    {path: 'new', component: StudentEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

const teacherRoutingPath = [
    {path: 'list', component: TeacherListComponent},
    {path: 'detail/:id', component: TeacherDetailComponent},
    {path: 'edit/:id', component: TeacherEditComponent},
    {path: 'new', component: TeacherEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

const courseRoutingPath = [
    {path: 'list', component: CourseListComponent},
    {path: 'detail/:id', component: CourseDetailComponent},
    {path: 'edit/:id', component: CourseEditComponent},
    {path: 'new', component: CourseEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(ManageRoutes)],
  exports: [RouterModule],
  providers: [//only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MraRouteReuseStrategy }, 
  ],

})
export class ManageRoutingModule { }
