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
    

import { CourseinstanceListComponent } from './courseinstance/courseinstance-list/courseinstance-list.component';
import { CourseinstanceDetailComponent } from './courseinstance/courseinstance-detail/courseinstance-detail.component';
import { CourseinstanceEditComponent } from './courseinstance/courseinstance-edit/courseinstance-edit.component';
    
import { CourseinstanceListSubComponent } from './courseinstance/courseinstance-list/courseinstance-list-sub.component';




const courseinstanceSubPath = [
    {path: 'list', component: CourseinstanceListSubComponent}
];


const teacherDetailPath = [

    {path: 'courseinstance', children: courseinstanceSubPath, 
        data: {"mraLevel": 2, "item": "courseinstance"}},
];

const courseDetailPath = [

    {path: 'courseinstance', children: courseinstanceSubPath, 
        data: {"mraLevel": 2, "item": "courseinstance"}},
];


export const eventRoutingPath = [
    {path: 'list', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: 'edit/:id', component: EventEditComponent},
    {path: 'new', component: EventEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const studentRoutingPath = [
    {path: 'list', component: StudentListComponent},
    {path: 'detail/:id', component: StudentDetailComponent},
    {path: 'edit/:id', component: StudentEditComponent},
    {path: 'new', component: StudentEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const teacherRoutingPath = [
    {path: 'list', component: TeacherListComponent},
    {path: 'detail/:id', component: TeacherDetailComponent, children: teacherDetailPath},
    {path: 'edit/:id', component: TeacherEditComponent},
    {path: 'new', component: TeacherEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const courseRoutingPath = [
    {path: 'list', component: CourseListComponent},
    {path: 'detail/:id', component: CourseDetailComponent, children: courseDetailPath},
    {path: 'edit/:id', component: CourseEditComponent},
    {path: 'new', component: CourseEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const courseinstanceRoutingPath = [
    {path: 'list', component: CourseinstanceListComponent},
    {path: 'detail/:id', component: CourseinstanceDetailComponent},
    {path: 'edit/:id', component: CourseinstanceEditComponent},
    {path: 'new', component: CourseinstanceEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
