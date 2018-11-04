import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'; 
import { MraNgbDateFormatterService } from './manage.directive';

import { MraModule } from 'mean-rest-angular';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';


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


  ],
  providers: [
    
    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    EventService,
    StudentService,
    TeacherService,
    CourseService,
  ],

})
export class ManageModule { }
