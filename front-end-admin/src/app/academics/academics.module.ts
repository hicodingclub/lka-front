import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './academics.directive';


import { DirectiveArrayRequired } from './academics.directive';


import { FileUploadModule } from 'mdds-angular-file';

import { MraModule } from 'mean-rest-angular';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsComponent } from './academics.component';
import { AcademicsRefSelectDirective } from './academics.component';

import { Academics_SERVER_ROOT_URI } from './academics.tokens';
import { academics_server_root_uri } from '../academics.conf';

// Import components for each schema

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

import { ClassListComponent } from './class/class-list/class-list.component';



import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { ClassEditComponent } from './class/class-edit/class-edit.component';
import { ClassService } from './class/class.service';

import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';



import { StudentclassDetailComponent } from './studentclass/studentclass-detail/studentclass-detail.component';
import { StudentclassEditComponent } from './studentclass/studentclass-edit/studentclass-edit.component';
import { StudentclassService } from './studentclass/studentclass.service';

import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';



import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';
import { ClassenrollService } from './classenroll/classenroll.service';


import { CourseSelectComponent } from './course/course-list/course-select.component';
import { CourseDetailPopComponent } from './course/course-detail/course-detail-pop.component';
import { CourseDetailSelComponent } from './course/course-detail/course-detail-sel.component';
import { TeacherSelectComponent } from './teacher/teacher-list/teacher-select.component';
import { TeacherDetailPopComponent } from './teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherDetailSelComponent } from './teacher/teacher-detail/teacher-detail-sel.component';
import { StudentSelectComponent } from './student/student-list/student-select.component';
import { StudentDetailPopComponent } from './student/student-detail/student-detail-pop.component';
import { StudentDetailSelComponent } from './student/student-detail/student-detail-sel.component';
import { ClassSelectComponent } from './class/class-list/class-select.component';
import { ClassDetailPopComponent } from './class/class-detail/class-detail-pop.component';
import { ClassDetailSelComponent } from './class/class-detail/class-detail-sel.component';

import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';
import { TeacherDetailSubComponent } from './teacher/teacher-detail/teacher-detail-sub.component';
import { ClassListSubComponent } from './class/class-list/class-list-sub.component';
import { ClassDetailSubComponent } from './class/class-detail/class-detail-sub.component';
import { StudentclassListSubComponent } from './studentclass/studentclass-list/studentclass-list-sub.component';
import { StudentclassDetailSubComponent } from './studentclass/studentclass-detail/studentclass-detail-sub.component';
import { ClassenrollListSubComponent } from './classenroll/classenroll-list/classenroll-list-sub.component';
import { ClassenrollDetailSubComponent } from './classenroll/classenroll-detail/classenroll-detail-sub.component';

import { StudentDirectiveEmail } from './student/student-edit/student-edit.component';
import { StudentDirectivePhoneNumber } from './student/student-edit/student-edit.component';
import { StudentDirectiveGuardianOnePhone } from './student/student-edit/student-edit.component';
import { StudentDirectiveGuardianOneEmail } from './student/student-edit/student-edit.component';
import { StudentDirectiveGuardianTwoPhone } from './student/student-edit/student-edit.component';
import { StudentDirectiveGuardianTwoEmail } from './student/student-edit/student-edit.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MraModule,
    FileUploadModule,

    AcademicsRoutingModule
  ],
  declarations: [
    AcademicsComponent,
    AcademicsRefSelectDirective,

    StudentListComponent,
    
    
    
    StudentDetailComponent,
    StudentEditComponent,
    TeacherListComponent,
    
    
    
    TeacherDetailComponent,
    TeacherEditComponent,
    CourseListComponent,
    
    
    
    CourseDetailComponent,
    CourseEditComponent,
    ClassListComponent,
    
    
    
    ClassDetailComponent,
    ClassEditComponent,
    StudentclassListComponent,
    
    
    
    StudentclassDetailComponent,
    StudentclassEditComponent,
    ClassenrollListComponent,
    
    
    
    ClassenrollDetailComponent,
    ClassenrollEditComponent,

    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    StudentclassDetailSubComponent,
    ClassenrollListSubComponent,
    ClassenrollDetailSubComponent,

    StudentDirectiveEmail,
    StudentDirectivePhoneNumber,
    StudentDirectiveGuardianOnePhone,
    StudentDirectiveGuardianOneEmail,
    StudentDirectiveGuardianTwoPhone,
    StudentDirectiveGuardianTwoEmail,


    DirectiveArrayRequired,

  ],
  exports: [
    AcademicsComponent,

    StudentListComponent,
    
    
    
    StudentDetailComponent,
    StudentEditComponent,
    TeacherListComponent,
    
    
    
    TeacherDetailComponent,
    TeacherEditComponent,
    CourseListComponent,
    
    
    
    CourseDetailComponent,
    CourseEditComponent,
    ClassListComponent,
    
    
    
    ClassDetailComponent,
    ClassEditComponent,
    StudentclassListComponent,
    
    
    
    StudentclassDetailComponent,
    StudentclassEditComponent,
    ClassenrollListComponent,
    
    
    
    ClassenrollDetailComponent,
    ClassenrollEditComponent,

    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    StudentclassDetailSubComponent,
    ClassenrollListSubComponent,
    ClassenrollDetailSubComponent,
  ],
  providers: [
    { provide: Academics_SERVER_ROOT_URI, useValue: academics_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    StudentService,
    TeacherService,
    CourseService,
    ClassService,
    StudentclassService,
    ClassenrollService,
  ],
  entryComponents: [CourseSelectComponent,CourseDetailPopComponent,CourseDetailSelComponent,TeacherSelectComponent,TeacherDetailPopComponent,TeacherDetailSelComponent,StudentSelectComponent,StudentDetailPopComponent,StudentDetailSelComponent,ClassSelectComponent,ClassDetailPopComponent,ClassDetailSelComponent,StudentEditComponent,TeacherEditComponent,CourseEditComponent,ClassEditComponent,StudentclassEditComponent,ClassenrollEditComponent,
  ]
})
export class AcademicsModule { }
