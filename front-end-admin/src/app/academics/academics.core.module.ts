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
import { ClassenrollComponent } from './classenroll/classenroll.component';
import { ClassenrollListComponent } from './classenroll/classenroll-list/classenroll-list.component';
import { ClassenrollListCustComponent } from '../academics-cust/base/classenroll/classenroll-list.cust.component';
import { ClassenrollDetailComponent } from './classenroll/classenroll-detail/classenroll-detail.component';
import { ClassenrollDetailCustComponent } from '../academics-cust/base/classenroll/classenroll-detail.cust.component';
import { ClassenrollDetailFieldComponent } from './classenroll/classenroll-detail/classenroll-detail-field.component';
import { ClassenrollEditComponent } from './classenroll/classenroll-edit/classenroll-edit.component';
import { ClassenrollEditCustComponent } from '../academics-cust/base/classenroll/classenroll-edit.cust.component';
import { ClassComponent } from './class/class.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassListCustComponent } from '../academics-cust/base/class/class-list.cust.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';
import { ClassDetailCustComponent } from '../academics-cust/base/class/class-detail.cust.component';
import { ClassDetailFieldComponent } from './class/class-detail/class-detail-field.component';
import { ClassEditComponent } from './class/class-edit/class-edit.component';
import { ClassEditCustComponent } from '../academics-cust/base/class/class-edit.cust.component';
import { ClassAssoComponent } from './class/class-detail/class-detail-asso.component';
import { StudentclassComponent } from './studentclass/studentclass.component';
import { StudentclassListComponent } from './studentclass/studentclass-list/studentclass-list.component';
import { StudentclassListCustComponent } from '../academics-cust/base/studentclass/studentclass-list.cust.component';
import { StudentclassDetailComponent } from './studentclass/studentclass-detail/studentclass-detail.component';
import { StudentclassDetailCustComponent } from '../academics-cust/base/studentclass/studentclass-detail.cust.component';
import { StudentclassDetailFieldComponent } from './studentclass/studentclass-detail/studentclass-detail-field.component';
import { StudentclassEditComponent } from './studentclass/studentclass-edit/studentclass-edit.component';
import { StudentclassEditCustComponent } from '../academics-cust/base/studentclass/studentclass-edit.cust.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseListCustComponent } from '../academics-cust/base/course/course-list.cust.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseDetailCustComponent } from '../academics-cust/base/course/course-detail.cust.component';
import { CourseDetailFieldComponent } from './course/course-detail/course-detail-field.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseEditCustComponent } from '../academics-cust/base/course/course-edit.cust.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentListCustComponent } from '../academics-cust/base/student/student-list.cust.component';
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
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { TeacherEditCustComponent } from '../academics-cust/base/teacher/teacher-edit.cust.component';
import { TermsComponent } from './terms/terms.component';
import { TermsListComponent } from './terms/terms-list/terms-list.component';
import { TermsListCustComponent } from '../academics-cust/base/terms/terms-list.cust.component';
import { TermsDetailComponent } from './terms/terms-detail/terms-detail.component';
import { TermsDetailCustComponent } from '../academics-cust/base/terms/terms-detail.cust.component';
import { TermsDetailFieldComponent } from './terms/terms-detail/terms-detail-field.component';
import { TermsEditComponent } from './terms/terms-edit/terms-edit.component';
import { TermsEditCustComponent } from '../academics-cust/base/terms/terms-edit.cust.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentListCustComponent } from '../academics-cust/base/payment/payment-list.cust.component';
import { PaymentDetailComponent } from './payment/payment-detail/payment-detail.component';
import { PaymentDetailCustComponent } from '../academics-cust/base/payment/payment-detail.cust.component';
import { PaymentDetailFieldComponent } from './payment/payment-detail/payment-detail-field.component';
import { PaymentEditComponent } from './payment/payment-edit/payment-edit.component';
import { PaymentEditCustComponent } from '../academics-cust/base/payment/payment-edit.cust.component';
import { StudentListSelectComponent } from './student/student-list/student-list-select.component';
import { StudentDetailPopComponent } from './student/student-detail/student-detail-pop.component';
import { StudentDetailSelComponent } from './student/student-detail/student-detail-sel.component';
import { ClassListSelectComponent } from './class/class-list/class-list-select.component';
import { ClassDetailPopComponent } from './class/class-detail/class-detail-pop.component';
import { ClassDetailSelComponent } from './class/class-detail/class-detail-sel.component';
import { CourseListSelectComponent } from './course/course-list/course-list-select.component';
import { CourseListSelectIndexComponent } from './course/course-list/course-list-select-index.component';
import { CourseDetailPopComponent } from './course/course-detail/course-detail-pop.component';
import { CourseDetailSelComponent } from './course/course-detail/course-detail-sel.component';
import { TeacherListSelectComponent } from './teacher/teacher-list/teacher-list-select.component';
import { TeacherDetailPopComponent } from './teacher/teacher-detail/teacher-detail-pop.component';
import { TeacherDetailSelComponent } from './teacher/teacher-detail/teacher-detail-sel.component';
import { TermsListSelectComponent } from './terms/terms-list/terms-list-select.component';
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
    ClassenrollComponent,
    ClassenrollListComponent,
    ClassenrollListCustComponent,
    ClassenrollDetailCustComponent,
    ClassenrollDetailComponent,
    ClassenrollDetailFieldComponent,
    ClassenrollEditComponent,
    ClassenrollEditCustComponent,
    ClassComponent,
    ClassListComponent,
    ClassListCustComponent,
    ClassDetailCustComponent,
    ClassDetailComponent,
    ClassDetailFieldComponent,
    ClassEditComponent,
    ClassEditCustComponent,
    ClassAssoComponent,
    StudentclassComponent,
    StudentclassListComponent,
    StudentclassListCustComponent,
    StudentclassDetailCustComponent,
    StudentclassDetailComponent,
    StudentclassDetailFieldComponent,
    StudentclassEditComponent,
    StudentclassEditCustComponent,
    CourseComponent,
    CourseListComponent,
    CourseListCustComponent,
    CourseDetailCustComponent,
    CourseDetailComponent,
    CourseDetailFieldComponent,
    CourseEditComponent,
    CourseEditCustComponent,
    StudentComponent,
    StudentListComponent,
    StudentListCustComponent,
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
    TeacherEditComponent,
    TeacherEditCustComponent,
    TermsComponent,
    TermsListComponent,
    TermsListCustComponent,
    TermsDetailCustComponent,
    TermsDetailComponent,
    TermsDetailFieldComponent,
    TermsEditComponent,
    TermsEditCustComponent,
    PaymentComponent,
    PaymentListComponent,
    PaymentListCustComponent,
    PaymentDetailCustComponent,
    PaymentDetailComponent,
    PaymentDetailFieldComponent,
    PaymentEditComponent,
    PaymentEditCustComponent,
    StudentListSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseListSelectComponent,
    CourseListSelectIndexComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherListSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsListSelectComponent,
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
    PaymentListComponent,
    PaymentDetailComponent,
    PaymentDetailFieldComponent,
    PaymentEditComponent,
    StudentListSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseListSelectComponent,
    CourseListSelectIndexComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherListSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsListSelectComponent,
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
    StudentListSelectComponent,
    StudentDetailPopComponent,
    StudentDetailSelComponent,
    ClassListSelectComponent,
    ClassDetailPopComponent,
    ClassDetailSelComponent,
    CourseListSelectComponent,
    CourseListSelectIndexComponent,
    CourseDetailPopComponent,
    CourseDetailSelComponent,
    TeacherListSelectComponent,
    TeacherDetailPopComponent,
    TeacherDetailSelComponent,
    TermsListSelectComponent,
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
export class AcademicsCoreModule { }
