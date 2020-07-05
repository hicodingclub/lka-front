import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './academics.directive';
import { DirectiveAcademicsArrayRequired } from './academics.directive';
import { FileUploadModule } from '@hicoder/angular-file';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { AcademicsRoutingCoreModule } from './academics-routing.core.module';
import { AcademicsComponent } from './academics.component';
import { AcademicsRefSelectDirective } from './academics.component';

// Import components for each schema
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentListCustComponent } from '../academics-cust/base/student/student-list.cust.component';
import { StudentListWidgetSelComponent } from './student/student-list/student-list-widget-sel.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentDetailCustComponent } from '../academics-cust/base/student/student-detail.cust.component';
import { StudentDetailFieldComponent } from './student/student-detail/student-detail-field.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentEditCustComponent } from '../academics-cust/base/student/student-edit.cust.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherListCustComponent } from '../academics-cust/base/teacher/teacher-list.cust.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherDetailCustComponent } from '../academics-cust/base/teacher/teacher-detail.cust.component';
import { TeacherDetailFieldComponent } from './teacher/teacher-detail/teacher-detail-field.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseListCustComponent } from '../academics-cust/base/course/course-list.cust.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseDetailCustComponent } from '../academics-cust/base/course/course-detail.cust.component';
import { CourseDetailFieldComponent } from './course/course-detail/course-detail-field.component';
import { ClassComponent } from './class/class.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassListCustComponent } from '../academics-cust/base/class/class-list.cust.component';
import { ClassListWidgetSelComponent } from './class/class-list/class-list-widget-sel.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { ClassDetailCustComponent } from '../academics-cust/base/class/class-detail.cust.component';
import { ClassDetailFieldComponent } from './class/class-detail/class-detail-field.component';
import { StudentclassComponent } from './studentclass/studentclass.component';
import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';
import { StudentclassListCustComponent } from '../academics-cust/base/studentclass/studentclass-list.cust.component';
import { StudentclassDetailFieldComponent } from './studentclass/studentclass-detail/studentclass-detail-field.component';
import { ClassenrollComponent } from './classenroll/classenroll.component';
import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';
import { ClassenrollListCustComponent } from '../academics-cust/base/classenroll/classenroll-list.cust.component';
import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';
import { ClassenrollDetailCustComponent } from '../academics-cust/base/classenroll/classenroll-detail.cust.component';
import { ClassenrollDetailFieldComponent } from './classenroll/classenroll-detail/classenroll-detail-field.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';
import { ClassenrollEditCustComponent } from '../academics-cust/base/classenroll/classenroll-edit.cust.component';
import { TermsComponent } from './terms/terms.component';
import { TermsListComponent } from './terms/terms-list/terms-list.component';
import { TermsListCustComponent } from '../academics-cust/base/terms/terms-list.cust.component';
import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';
import { TermsDetailCustComponent } from '../academics-cust/base/terms/terms-detail.cust.component';
import { TermsDetailWidgetTermComponent } from './terms/terms-detail/terms-detail-widget-term.component';
import { TermsDetailFieldComponent } from './terms/terms-detail/terms-detail-field.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentListCustComponent } from '../academics-cust/base/payment/payment-list.cust.component';
import { PaymentDetailComponent } from './payment/payment-detail/payment-detail.component';
import { PaymentDetailCustComponent } from '../academics-cust/base/payment/payment-detail.cust.component';
import { PaymentDetailFieldComponent } from './payment/payment-detail/payment-detail-field.component';
import { PaymentEditComponent } from './payment/payment-edit/payment-edit.component';
import { PaymentEditCustComponent } from '../academics-cust/base/payment/payment-edit.cust.component';
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
import { AcademicsStudentDirectiveEmail } from './student/student-edit/student-edit.component';
import { AcademicsStudentDirectivePhoneNumber } from './student/student-edit/student-edit.component';
import { AcademicsStudentDirectiveGuardianOnePhone } from './student/student-edit/student-edit.component';
import { AcademicsStudentDirectiveGuardianOneEmail } from './student/student-edit/student-edit.component';
import { AcademicsStudentDirectiveGuardianTwoPhone } from './student/student-edit/student-edit.component';
import { AcademicsStudentDirectiveGuardianTwoEmail } from './student/student-edit/student-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,
    AcademicsRoutingCoreModule,
  ],
  declarations: [
    AcademicsComponent,
    AcademicsRefSelectDirective,
    StudentComponent,
    StudentListComponent,
    StudentListCustComponent,
    StudentListWidgetSelComponent,
    StudentDetailCustComponent,
    StudentDetailComponent,
    StudentDetailFieldComponent,
    StudentEditComponent,
    StudentEditCustComponent,
    TeacherComponent,
    TeacherListComponent,
    TeacherListCustComponent,
    TeacherDetailCustComponent,
    TeacherDetailComponent,
    TeacherDetailFieldComponent,
    CourseComponent,
    CourseListComponent,
    CourseListCustComponent,
    CourseDetailCustComponent,
    CourseDetailComponent,
    CourseDetailFieldComponent,
    ClassComponent,
    ClassListComponent,
    ClassListCustComponent,
    ClassListWidgetSelComponent,
    ClassDetailCustComponent,
    ClassDetailComponent,
    ClassDetailFieldComponent,
    StudentclassComponent,
    StudentclassListComponent,
    StudentclassListCustComponent,
    StudentclassDetailFieldComponent,
    ClassenrollComponent,
    ClassenrollListComponent,
    ClassenrollListCustComponent,
    ClassenrollDetailCustComponent,
    ClassenrollDetailComponent,
    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,
    ClassenrollEditCustComponent,
    TermsComponent,
    TermsListComponent,
    TermsListCustComponent,
    TermsDetailCustComponent,
    TermsDetailComponent,
    TermsDetailWidgetTermComponent,
    TermsDetailFieldComponent,
    PaymentComponent,
    PaymentListComponent,
    PaymentListCustComponent,
    PaymentDetailCustComponent,
    PaymentDetailComponent,
    PaymentDetailFieldComponent,
    PaymentEditComponent,
    PaymentEditCustComponent,
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
    AcademicsStudentDirectiveEmail,
    AcademicsStudentDirectivePhoneNumber,
    AcademicsStudentDirectiveGuardianOnePhone,
    AcademicsStudentDirectiveGuardianOneEmail,
    AcademicsStudentDirectiveGuardianTwoPhone,
    AcademicsStudentDirectiveGuardianTwoEmail,
    DirectiveAcademicsArrayRequired,
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
    CourseDetailComponent,
    CourseDetailFieldComponent,
    ClassListComponent,
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
    PaymentListComponent,
    PaymentDetailComponent,
    PaymentDetailFieldComponent,
    PaymentEditComponent,
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
    AcademicsStudentDirectiveEmail,
    AcademicsStudentDirectivePhoneNumber,
    AcademicsStudentDirectiveGuardianOnePhone,
    AcademicsStudentDirectiveGuardianOneEmail,
    AcademicsStudentDirectiveGuardianTwoPhone,
    AcademicsStudentDirectiveGuardianTwoEmail,
    DirectiveAcademicsArrayRequired,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
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
    ClassListWidgetSelComponent,
    ClassenrollEditComponent,
    TermsDetailWidgetTermComponent,
    PaymentEditComponent,
  ]
})
export class AcademicsCoreModule { }
