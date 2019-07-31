// Import components for each schema

import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';
import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';
import { ClassenrollListSubComponent } from './classenroll/classenroll-list/classenroll-list-sub.component';

import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { ClassEditComponent } from './class/class-edit/class-edit.component';
import { ClassListSubComponent } from './class/class-list/class-list-sub.component';
import { ClassAssoComponent } from './class/class-detail/class-detail-asso.component';

import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';
import { StudentclassDetailComponent } from './studentclass/studentclass-detail/studentclass-detail.component';
import { StudentclassEditComponent } from './studentclass/studentclass-edit/studentclass-edit.component';
import { StudentclassListSubComponent } from './studentclass/studentclass-list/studentclass-list-sub.component';

import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';


import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';


import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';

import { TermsListComponent } from './terms/terms-list/terms-list.component';
import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';
import { TermsEditComponent } from './terms/terms-edit/terms-edit.component';



import { AuthGuard } from 'mdds-angular-auth';


const classenrollSubPath = [
    {path: 'list', component: ClassenrollListSubComponent}
];

const classSubPath = [
    {path: 'list', component: ClassListSubComponent}
];

const studentclassSubPath = [
    {path: 'list', component: StudentclassListSubComponent}
];

const teacherSubPath = [
    {path: 'list', component: TeacherListSubComponent}
];


const classDetailPath = [

    {path: 'classenroll', children: classenrollSubPath,
        data: {'mraLevel': 2, 'item': 'classenroll'}},
    {path: 'studentclass', children: studentclassSubPath,
        data: {'mraLevel': 2, 'item': 'studentclass'}},
];

const courseDetailPath = [

    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
    {path: 'teacher', children: teacherSubPath,
        data: {'mraLevel': 2, 'item': 'teacher'}},
];

const studentDetailPath = [

    {path: 'classenroll', children: classenrollSubPath,
        data: {'mraLevel': 2, 'item': 'classenroll'}},
    {path: 'studentclass', children: studentclassSubPath,
        data: {'mraLevel': 2, 'item': 'studentclass'}},
];

const teacherDetailPath = [

    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
];

const termsDetailPath = [

    {path: 'class', children: classSubPath,
        data: {'mraLevel': 2, 'item': 'class'}},
];


export const classenrollRoutingPath = [
    {path: 'list', component: ClassenrollListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: ClassenrollDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: ClassenrollEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: ClassenrollEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const classRoutingPath = [
    {path: 'list', component: ClassListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: ClassDetailComponent, children: classDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: ClassEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: ClassEditComponent, canActivate: [AuthGuard]},
    
    {path: 'asso/:id/classenroll/student', component: ClassAssoComponent, canActivate: [AuthGuard]},
    {path: 'asso/:id/studentclass/student', component: ClassAssoComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const studentclassRoutingPath = [
    {path: 'list', component: StudentclassListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: StudentclassDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: StudentclassEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: StudentclassEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const courseRoutingPath = [
    {path: 'list', component: CourseListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: CourseDetailComponent, children: courseDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: CourseEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: CourseEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const studentRoutingPath = [
    {path: 'list', component: StudentListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: StudentDetailComponent, children: studentDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: StudentEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: StudentEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const teacherRoutingPath = [
    {path: 'list', component: TeacherListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: TeacherDetailComponent, children: teacherDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: TeacherEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: TeacherEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const termsRoutingPath = [
    {path: 'list', component: TermsListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: TermsDetailComponent, children: termsDetailPath, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: TermsEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: TermsEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
