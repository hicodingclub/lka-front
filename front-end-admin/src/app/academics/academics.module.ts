import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './academics.directive';


import { DirectiveArrayRequired } from './academics.directive';


import { FileUploadModule } from '@hicoder/angular-file';

import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MraModule } from '@hicoder/angular-core';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsComponent } from './academics.component';
import { AcademicsRefSelectDirective } from './academics.component';

import { Academics_SERVER_ROOT_URI } from './academics.tokens';
import { academics_server_root_uri } from '../academics.conf';

// Import components for each schema

import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';

import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';
import { ClassenrollDetailFieldComponent } from './classenroll/classenroll-detail/classenroll-detail-field.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';

import { ClassenrollService } from './classenroll/classenroll.service';

import { ClassListComponent } from './class/class-list/class-list.component';

import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { ClassDetailFieldComponent } from './class/class-detail/class-detail-field.component';
import { ClassEditComponent } from './class/class-edit/class-edit.component';
import { ClassAssoComponent } from './class/class-detail/class-detail-asso.component';
import { ClassService } from './class/class.service';

import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';

import { StudentclassDetailComponent } from './studentclass/studentclass-detail/studentclass-detail.component';
import { StudentclassDetailFieldComponent } from './studentclass/studentclass-detail/studentclass-detail-field.component';
import { StudentclassEditComponent } from './studentclass/studentclass-edit/studentclass-edit.component';

import { StudentclassService } from './studentclass/studentclass.service';

import { CourseListComponent } from './course/course-list/course-list.component';

import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseDetailFieldComponent } from './course/course-detail/course-detail-field.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';

import { CourseService } from './course/course.service';

import { StudentListComponent } from './student/student-list/student-list.component';

import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentDetailFieldComponent } from './student/student-detail/student-detail-field.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';

import { StudentService } from './student/student.service';

import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';

import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherDetailFieldComponent } from './teacher/teacher-detail/teacher-detail-field.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';

import { TeacherService } from './teacher/teacher.service';

import { TermsListComponent } from './terms/terms-list/terms-list.component';

import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';
import { TermsDetailFieldComponent } from './terms/terms-detail/terms-detail-field.component';
import { TermsEditComponent } from './terms/terms-edit/terms-edit.component';

import { TermsService } from './terms/terms.service';


import { StudentSelectComponent } from './student/student-list/student-select.component';
import { StudentDetailPopComponent } from './student/student-detail/student-detail-pop.component';
import { StudentDetailSelComponent } from './student/student-detail/student-detail-sel.component';
import { ClassSelectComponent } from './class/class-list/class-select.component';
import { ClassDetailPopComponent } from './class/class-detail/class-detail-pop.component';
import { ClassDetailSelComponent } from './class/class-detail/class-detail-sel.component';
import { CourseSelectComponent } from './course/course-list/course-select.component';
import { CourseDetailPopComponent } from './course/course-detail/course-detail-pop.component';
import { CourseDetailSelComponent } from './course/course-detail/course-detail-sel.component';
import { TeacherSelectComponent } from './teacher/teacher-list/teacher-select.component';
import { TeacherDetailPopComponent } from './teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherDetailSelComponent } from './teacher/teacher-detail/teacher-detail-sel.component';
import { TermsSelectComponent } from './terms/terms-list/terms-select.component';
import { TermsDetailPopComponent } from './terms/terms-detail/terms-detail-pop.component';
import { TermsDetailSelComponent } from './terms/terms-detail/terms-detail-sel.component';

import { ClassenrollListSubComponent } from './classenroll/classenroll-list/classenroll-list-sub.component';
import { ClassenrollListAssoComponent } from './classenroll/classenroll-list/classenroll-list-asso.component';
import { ClassenrollDetailSubComponent } from './classenroll/classenroll-detail/classenroll-detail-sub.component';
import { ClassListSubComponent } from './class/class-list/class-list-sub.component';
import { ClassDetailSubComponent } from './class/class-detail/class-detail-sub.component';
import { StudentclassListSubComponent } from './studentclass/studentclass-list/studentclass-list-sub.component';
import { StudentclassListAssoComponent } from './studentclass/studentclass-list/studentclass-list-asso.component';
import { StudentclassDetailSubComponent } from './studentclass/studentclass-detail/studentclass-detail-sub.component';
import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';
import { TeacherDetailSubComponent } from './teacher/teacher-detail/teacher-detail-sub.component';

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
    ActionEmailModule,

    AcademicsRoutingModule
  ],
  declarations: [
    AcademicsComponent,
    AcademicsRefSelectDirective,

    ClassenrollListComponent,

    ClassenrollDetailComponent,
    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,

    ClassListComponent,

    ClassDetailComponent,
    ClassDetailFieldComponent,
    ClassEditComponent,
ClassAssoComponent,
    StudentclassListComponent,

    StudentclassDetailComponent,
    StudentclassDetailFieldComponent,
    StudentclassEditComponent,

    CourseListComponent,

    CourseDetailComponent,
    CourseDetailFieldComponent,
    CourseEditComponent,

    StudentListComponent,

    StudentDetailComponent,
    StudentDetailFieldComponent,
    StudentEditComponent,

    TeacherListComponent,

    TeacherDetailComponent,
    TeacherDetailFieldComponent,
    TeacherEditComponent,

    TermsListComponent,

    TermsDetailComponent,
    TermsDetailFieldComponent,
    TermsEditComponent,


    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsSelectComponent,
    TermsDetailPopComponent,
    TermsDetailSelComponent,

    ClassenrollListSubComponent,
    ClassenrollListAssoComponent,
    ClassenrollDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    StudentclassListAssoComponent,
    StudentclassDetailSubComponent,
    TeacherListSubComponent,
    TeacherDetailSubComponent,

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

    ClassenrollListComponent,

    ClassenrollDetailComponent,
    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,

    ClassListComponent,

    ClassDetailComponent,
    ClassDetailFieldComponent,
    ClassEditComponent,
ClassAssoComponent,
    StudentclassListComponent,

    StudentclassDetailComponent,
    StudentclassDetailFieldComponent,
    StudentclassEditComponent,

    CourseListComponent,

    CourseDetailComponent,
    CourseDetailFieldComponent,
    CourseEditComponent,

    StudentListComponent,

    StudentDetailComponent,
    StudentDetailFieldComponent,
    StudentEditComponent,

    TeacherListComponent,

    TeacherDetailComponent,
    TeacherDetailFieldComponent,
    TeacherEditComponent,

    TermsListComponent,

    TermsDetailComponent,
    TermsDetailFieldComponent,
    TermsEditComponent,


    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsSelectComponent,
    TermsDetailPopComponent,
    TermsDetailSelComponent,

    ClassenrollListSubComponent,
    ClassenrollListAssoComponent,
    ClassenrollDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    StudentclassListAssoComponent,
    StudentclassDetailSubComponent,
    TeacherListSubComponent,
    TeacherDetailSubComponent,
  ],
  providers: [
    { provide: Academics_SERVER_ROOT_URI, useValue: academics_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    ClassenrollService,
    ClassService,
    StudentclassService,
    CourseService,
    StudentService,
    TeacherService,
    TermsService,
  ],
  entryComponents: [
    StudentSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsSelectComponent,
    TermsDetailPopComponent,
    TermsDetailSelComponent,
    ClassenrollEditComponent,
    ClassEditComponent,
    StudentclassEditComponent,
    CourseEditComponent,
    StudentEditComponent,
    TeacherEditComponent,
    TermsEditComponent,
  ]
})
export class AcademicsModule { }
