import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'; 
import { MraNgbDateFormatterService } from './manage.directive';

import { MraModule } from 'mean-rest-angular';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManageRefSelectDirective } from './manage.component';

import { Manage_SERVER_ROOT_URI } from './manage.tokens';
import { manage_server_root_uri } from '../manage.conf';

//Import components for each schema

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventService } from './event/event.service';

import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentService } from './student/student.service';

import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { TeacherService } from './teacher/teacher.service';

import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseService } from './course/course.service';

import { CourseinstanceListComponent } from './courseinstance/courseinstance-list/courseinstance-list.component';
import { CourseinstanceDetailComponent } from './courseinstance/courseinstance-detail/courseinstance-detail.component';
import { CourseinstanceEditComponent } from './courseinstance/courseinstance-edit/courseinstance-edit.component';
import { CourseinstanceService } from './courseinstance/courseinstance.service';

import { StudentcourseinstanceListComponent } from './studentcourseinstance/studentcourseinstance-list/studentcourseinstance-list.component';
import { StudentcourseinstanceDetailComponent } from './studentcourseinstance/studentcourseinstance-detail/studentcourseinstance-detail.component';
import { StudentcourseinstanceEditComponent } from './studentcourseinstance/studentcourseinstance-edit/studentcourseinstance-edit.component';
import { StudentcourseinstanceService } from './studentcourseinstance/studentcourseinstance.service';

     
import { CourseSelectComponent } from './course/course-list/course-select.component';
import { CourseDetailPopComponent } from './course/course-detail/course-detail-pop.component';
import { CourseDetailSelComponent } from './course/course-detail/course-detail-sel.component';     
import { TeacherSelectComponent } from './teacher/teacher-list/teacher-select.component';
import { TeacherDetailPopComponent } from './teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherDetailSelComponent } from './teacher/teacher-detail/teacher-detail-sel.component';     
import { StudentSelectComponent } from './student/student-list/student-select.component';
import { StudentDetailPopComponent } from './student/student-detail/student-detail-pop.component';
import { StudentDetailSelComponent } from './student/student-detail/student-detail-sel.component';     
import { CourseinstanceSelectComponent } from './courseinstance/courseinstance-list/courseinstance-select.component';
import { CourseinstanceDetailPopComponent } from './courseinstance/courseinstance-detail/courseinstance-detail-pop.component';
import { CourseinstanceDetailSelComponent } from './courseinstance/courseinstance-detail/courseinstance-detail-sel.component';

import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';
import { TeacherDetailSubComponent } from './teacher/teacher-detail/teacher-detail-sub.component';
import { CourseinstanceListSubComponent } from './courseinstance/courseinstance-list/courseinstance-list-sub.component';
import { CourseinstanceDetailSubComponent } from './courseinstance/courseinstance-detail/courseinstance-detail-sub.component';
import { StudentcourseinstanceListSubComponent } from './studentcourseinstance/studentcourseinstance-list/studentcourseinstance-list-sub.component';
import { StudentcourseinstanceDetailSubComponent } from './studentcourseinstance/studentcourseinstance-detail/studentcourseinstance-detail-sub.component';

  
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    
    NgbModule,
    MraModule,
    
    ManageRoutingModule
  ],
  declarations: [
    ManageComponent,
    ManageRefSelectDirective,

    EventListComponent, 
    EventDetailComponent, 
    EventEditComponent,
    StudentListComponent, 
    StudentDetailComponent, 
    StudentEditComponent,
    TeacherListComponent, 
    TeacherDetailComponent, 
    TeacherEditComponent,
    CourseListComponent, 
    CourseDetailComponent, 
    CourseEditComponent,
    CourseinstanceListComponent, 
    CourseinstanceDetailComponent, 
    CourseinstanceEditComponent,
    StudentcourseinstanceListComponent, 
    StudentcourseinstanceDetailComponent, 
    StudentcourseinstanceEditComponent,
     
    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,     
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,     
    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,     
    CourseinstanceSelectComponent,
    CourseinstanceDetailPopComponent,
    CourseinstanceDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    CourseinstanceListSubComponent,
    CourseinstanceDetailSubComponent,
    StudentcourseinstanceListSubComponent,
    StudentcourseinstanceDetailSubComponent,

  ],
  exports: [
    ManageComponent,

    EventListComponent,
    EventDetailComponent,
    EventEditComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent,
    TeacherListComponent,
    TeacherDetailComponent,
    TeacherEditComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseinstanceListComponent,
    CourseinstanceDetailComponent,
    CourseinstanceEditComponent,
    StudentcourseinstanceListComponent,
    StudentcourseinstanceDetailComponent,
    StudentcourseinstanceEditComponent,
     
    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,     
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,     
    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,     
    CourseinstanceSelectComponent,
    CourseinstanceDetailPopComponent,
    CourseinstanceDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    CourseinstanceListSubComponent,
    CourseinstanceDetailSubComponent,
    StudentcourseinstanceListSubComponent,
    StudentcourseinstanceDetailSubComponent,
  ],
  providers: [
    { provide: Manage_SERVER_ROOT_URI, useValue: manage_server_root_uri },
    
    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EventService,
    StudentService,
    TeacherService,
    CourseService,
    CourseinstanceService,
    StudentcourseinstanceService,
  ],

  entryComponents: [ 
     
    CourseSelectComponent, 
    CourseDetailPopComponent,
    CourseDetailSelComponent,     
    TeacherSelectComponent, 
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,     
    StudentSelectComponent, 
    StudentDetailPopComponent,
    StudentDetailSelComponent,     
    CourseinstanceSelectComponent, 
    CourseinstanceDetailPopComponent,
    CourseinstanceDetailSelComponent, 
  ]
})
export class ManageModule { }
