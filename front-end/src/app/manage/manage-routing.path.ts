// Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';


import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';


import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';

import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';


import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';


import { CourseinstanceListComponent } from './courseinstance/courseinstance-list/courseinstance-list.component';
import { CourseinstanceDetailComponent } from './courseinstance/courseinstance-detail/courseinstance-detail.component';
import { CourseinstanceEditComponent } from './courseinstance/courseinstance-edit/courseinstance-edit.component';

import { CourseinstanceListSubComponent } from './courseinstance/courseinstance-list/courseinstance-list-sub.component';


import { StudentcourseinstanceListComponent } from './studentcourseinstance/studentcourseinstance-list/studentcourseinstance-list.component';
import { StudentcourseinstanceDetailComponent } from './studentcourseinstance/studentcourseinstance-detail/studentcourseinstance-detail.component';
import { StudentcourseinstanceEditComponent } from './studentcourseinstance/studentcourseinstance-edit/studentcourseinstance-edit.component';

import { StudentcourseinstanceListSubComponent } from './studentcourseinstance/studentcourseinstance-list/studentcourseinstance-list-sub.component';




const teacherSubPath = [
    {path: 'list', component: TeacherListSubComponent}
];

const courseinstanceSubPath = [
    {path: 'list', component: CourseinstanceListSubComponent}
];

const studentcourseinstanceSubPath = [
    {path: 'list', component: StudentcourseinstanceListSubComponent}
];


const studentDetailPath = [

    {path: 'studentcourseinstance', children: studentcourseinstanceSubPath,
        data: {'mraLevel': 2, 'item': 'studentcourseinstance'}},
];

const teacherDetailPath = [

    {path: 'courseinstance', children: courseinstanceSubPath,
        data: {'mraLevel': 2, 'item': 'courseinstance'}},
];

const courseDetailPath = [

    {path: 'teacher', children: teacherSubPath,
        data: {'mraLevel': 2, 'item': 'teacher'}},
    {path: 'courseinstance', children: courseinstanceSubPath,
        data: {'mraLevel': 2, 'item': 'courseinstance'}},
];

const courseinstanceDetailPath = [

    {path: 'studentcourseinstance', children: studentcourseinstanceSubPath,
        data: {'mraLevel': 2, 'item': 'studentcourseinstance'}},
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
    {path: 'detail/:id', component: StudentDetailComponent, children: studentDetailPath},
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
    {path: 'detail/:id', component: CourseinstanceDetailComponent, children: courseinstanceDetailPath},
    {path: 'edit/:id', component: CourseinstanceEditComponent},
    {path: 'new', component: CourseinstanceEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

export const studentcourseinstanceRoutingPath = [
    {path: 'list', component: StudentcourseinstanceListComponent},
    {path: 'detail/:id', component: StudentcourseinstanceDetailComponent},
    {path: 'edit/:id', component: StudentcourseinstanceEditComponent},
    {path: 'new', component: StudentcourseinstanceEditComponent},
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];
