import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './academics.directive';


import { DirectiveArrayRequired } from './academics.directive';


import { FileUploadModule } from '@hicoder/angular-file';

import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsComponent } from './academics.component';
import { AcademicsRefSelectDirective } from './academics.component';

import { Academics_SERVER_ROOT_URI } from './academics.tokens';
import { academics_server_root_uri } from '../academics.conf';

// Import components for each schema

import { StudentListComponent } from './student/student-list/student-list.component';

import { StudentListWidgetSelComponent } from './student/student-list/student-list-widget-sel.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

import { StudentDetailFieldComponent } from './student/student-detail/student-detail-field.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';

import { StudentService } from './student/student.service';

import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';

import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';

import { TeacherDetailFieldComponent } from './teacher/teacher-detail/teacher-detail-field.component';


import { TeacherService } from './teacher/teacher.service';

import { CourseListComponent } from './course/course-list/course-list.component';

import { CourseListWidgetCleanComponent } from './course/course-list/course-list-widget-clean.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';

import { CourseDetailFieldComponent } from './course/course-detail/course-detail-field.component';


import { CourseService } from './course/course.service';

import { ClassListComponent } from './class/class-list/class-list.component';

import { ClassListWidgetCleanComponent } from './class/class-list/class-list-widget-clean.component';
import { ClassListWidgetSelComponent } from './class/class-list/class-list-widget-sel.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';

import { ClassDetailFieldComponent } from './class/class-detail/class-detail-field.component';


import { ClassService } from './class/class.service';

import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';



import { StudentclassDetailFieldComponent } from './studentclass/studentclass-detail/studentclass-detail-field.component';


import { StudentclassService } from './studentclass/studentclass.service';

import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';

import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';

import { ClassenrollDetailFieldComponent } from './classenroll/classenroll-detail/classenroll-detail-field.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';

import { ClassenrollService } from './classenroll/classenroll.service';

import { TermsListComponent } from './terms/terms-list/terms-list.component';

import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';

    import { TermsDetailWidgetTermComponent } from './terms/terms-detail/terms-detail-widget-term.component';
import { TermsDetailFieldComponent } from './terms/terms-detail/terms-detail-field.component';


import { TermsService } from './terms/terms.service';


import { CourseListSelectComponent } from './course/course-list/course-list-select.component';

import { CourseDetailPopComponent } from './course/course-detail/course-detail-pop.component';
import { CourseDetailSelComponent } from './course/course-detail/course-detail-sel.component';
import { TermsListSelectComponent } from './terms/terms-list/terms-list-select.component';

import { TermsDetailPopComponent } from './terms/terms-detail/terms-detail-pop.component';
import { TermsDetailSelComponent } from './terms/terms-detail/terms-detail-sel.component';
import { TeacherListSelectComponent } from './teacher/teacher-list/teacher-list-select.component';

import { TeacherDetailPopComponent } from './teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherDetailSelComponent } from './teacher/teacher-detail/teacher-detail-sel.component';
import { StudentListSelectComponent } from './student/student-list/student-list-select.component';

import { StudentDetailPopComponent } from './student/student-detail/student-detail-pop.component';
import { StudentDetailSelComponent } from './student/student-detail/student-detail-sel.component';
import { ClassListSelectComponent } from './class/class-list/class-list-select.component';

import { ClassDetailPopComponent } from './class/class-detail/class-detail-pop.component';
import { ClassDetailSelComponent } from './class/class-detail/class-detail-sel.component';

import { TeacherListSubComponent } from './teacher/teacher-list/teacher-list-sub.component';
import { TeacherDetailSubComponent } from './teacher/teacher-detail/teacher-detail-sub.component';
import { ClassListSubComponent } from './class/class-list/class-list-sub.component';
import { ClassDetailSubComponent } from './class/class-detail/class-detail-sub.component';
import { StudentclassListSubComponent } from './studentclass/studentclass-list/studentclass-list-sub.component';

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
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,

    AcademicsRoutingModule
  ],
  declarations: [
    AcademicsComponent,
    AcademicsRefSelectDirective,

    StudentListComponent,

    StudentListWidgetSelComponent,
    StudentDetailComponent,

    StudentDetailFieldComponent,
    StudentEditComponent,

    TeacherListComponent,

    TeacherDetailComponent,

    TeacherDetailFieldComponent,
    

    CourseListComponent,

    CourseListWidgetCleanComponent,
    CourseDetailComponent,

    CourseDetailFieldComponent,
    

    ClassListComponent,

    ClassListWidgetCleanComponent,
    ClassListWidgetSelComponent,
    ClassDetailComponent,

    ClassDetailFieldComponent,
    

    StudentclassListComponent,

    

    StudentclassDetailFieldComponent,
    

    ClassenrollListComponent,

    ClassenrollDetailComponent,

    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,

    TermsListComponent,

    TermsDetailComponent,

    TermsDetailWidgetTermComponent,
    TermsDetailFieldComponent,
    


    CourseListSelectComponent,
    
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TermsListSelectComponent,
    
    TermsDetailPopComponent,
    TermsDetailSelComponent,
    TeacherListSelectComponent,
    
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    StudentListSelectComponent,
    
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    
    ClassDetailPopComponent,
    ClassDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    
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

    StudentListWidgetSelComponent,
    StudentDetailComponent,

    StudentDetailFieldComponent,
    StudentEditComponent,

    TeacherListComponent,

    TeacherDetailComponent,

    TeacherDetailFieldComponent,
    

    CourseListComponent,

    CourseListWidgetCleanComponent,
    CourseDetailComponent,

    CourseDetailFieldComponent,
    

    ClassListComponent,

    ClassListWidgetCleanComponent,
    ClassListWidgetSelComponent,
    ClassDetailComponent,

    ClassDetailFieldComponent,
    

    StudentclassListComponent,

    

    StudentclassDetailFieldComponent,
    

    ClassenrollListComponent,

    ClassenrollDetailComponent,

    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,

    TermsListComponent,

    TermsDetailComponent,

    TermsDetailWidgetTermComponent,
    TermsDetailFieldComponent,
    


    CourseListSelectComponent,
    
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TermsListSelectComponent,
    
    TermsDetailPopComponent,
    TermsDetailSelComponent,
    TeacherListSelectComponent,
    
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    StudentListSelectComponent,
    
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    
    ClassDetailPopComponent,
    ClassDetailSelComponent,

    TeacherListSubComponent,
    TeacherDetailSubComponent,
    ClassListSubComponent,
    ClassDetailSubComponent,
    StudentclassListSubComponent,
    
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
    TermsService,
  ],
  entryComponents: [
    CourseListSelectComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TermsListSelectComponent,
    TermsDetailPopComponent,
    TermsDetailSelComponent,
    TeacherListSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    StudentListSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    StudentListWidgetSelComponent,
    StudentEditComponent,
    CourseListWidgetCleanComponent,
    ClassListWidgetCleanComponent,
    ClassListWidgetSelComponent,
    ClassenrollEditComponent,
    TermsDetailWidgetTermComponent,
  ]
})
export class AcademicsModule { }
