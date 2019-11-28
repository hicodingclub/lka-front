// Import components for each schema

import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

import { StudentEditComponent } from './student/student-edit/student-edit.component';


import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';


import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';

import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';




import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';


import { ClassListSubComponent } from './class/class-list/class-list-sub.component';

import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';



import { StudentclassListSubComponent } from './studentclass/studentclass-list/studentclass-list-sub.component';

import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';
import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';

import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';
import { ClassenrollListSubComponent } from './classenroll/classenroll-list/classenroll-list-sub.component';

import { TermsListComponent } from './terms/terms-list/terms-list.component';

import { TermsDetailWidgetTermComponent } from './terms/terms-detail/terms-detail-widget-term.component';




import { AuthGuard } from '@hicoder/angular-auth';


const teacherSubPath = [
    {path: 'list', component: TeacherListSubComponent}
];

const classSubPath = [
    {path: 'list', component: ClassListSubComponent}
];

const studentclassSubPath = [
    {path: 'list', component: StudentclassListSubComponent}
];

const classenrollSubPath = [
    {path: 'list', component: ClassenrollListSubComponent}
];


const studentDetailPath = [

    {path: 'studentclass', children: studentclassSubPath,
        data: {'mraLevel': 2, 'item': 'studentclass'}},
    {path: 'classenroll', children: classenrollSubPath,
        data: {'mraLevel': 2, 'item': 'classenroll'}},
];

const teacherDetailPath = [

    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
];

const courseDetailPath = [

    {path: 'teacher', children: teacherSubPath,
        data: {'mraLevel': 2, 'item': 'teacher'}},
    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
];

const classDetailPath = [

    {path: 'studentclass', children: studentclassSubPath,
        data: {'mraLevel': 2, 'item': 'studentclass'}},
    {path: 'classenroll', children: classenrollSubPath,
        data: {'mraLevel': 2, 'item': 'classenroll'}},
];

const termsDetailPath = [

    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
];


export const studentRoutingPath = [
    {path: 'list', component: StudentListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: StudentDetailComponent, children: studentDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: StudentEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: StudentEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const teacherRoutingPath = [
    {path: 'list', component: TeacherListComponent},
     {path: 'detail/:id', component: TeacherDetailComponent, children: teacherDetailPath},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const courseRoutingPath = [
    {path: 'list', component: CourseListComponent},
     {path: 'detail/:id', component: CourseDetailComponent, children: courseDetailPath},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const classRoutingPath = [
    {path: 'list', component: ClassListComponent},
     {path: 'detail/:id', component: ClassDetailComponent, children: classDetailPath},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const studentclassRoutingPath = [
    {path: 'list', component: StudentclassListComponent, canActivate: [AuthGuard]},
     
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const classenrollRoutingPath = [
    {path: 'list', component: ClassenrollListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: ClassenrollDetailComponent, canActivate: [AuthGuard]},
    
    {path: 'new', component: ClassenrollEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const termsRoutingPath = [
    {path: 'list', component: TermsListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: TermsDetailWidgetTermComponent, children: termsDetailPath, canActivate: [AuthGuard]},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

