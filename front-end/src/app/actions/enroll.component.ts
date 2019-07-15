import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { compositeSteps, submitComponent } from 'mdds-angular-composite';

import { ClassListActSelComponent } from '../academics/class/class-list/class-list-act-sel.component';
import { StudentListActSelComponent } from '../academics/student/student-list/student-list-act-sel.component';
import { TermsDetailComponent } from '../publicinfo/terms/terms-detail/terms-detail.component';

import { ClassenrollEditComponent } from '../academics/classenroll/classenroll-edit/classenroll-edit.component'

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public compositeSteps: compositeSteps;
  public submitComp: submitComponent;
  public title: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('params', params);
    });

    console.log('class', this.route.snapshot.queryParamMap.get('class'));
  }

  ngOnInit() {
    /* this code snippet always return {} ???
    this.route.params.subscribe(params => {
      console.log('ngOnInit params', params);
    });
    */

    const classId = this.route.snapshot.queryParamMap.get('class');

    this.title = 'Class Enrollment';
    this.compositeSteps = [
      {
        stepName: "Select class",
        stepTitle: 'Please select a class to enroll',
        stepComponent: ClassListActSelComponent,
        mandatory: true,
        preSelectedId: classId,
        multiSelect: false,

        disableActionButtions: true,
        searchObj: {},
        submitFieldName: 'class',

        errorMessage: 'Please select a class.',
      },
      {
        stepName: 'Select student',
        stepTitle: 'Please select a registered student to enroll to the class',
        stepComponent: StudentListActSelComponent,
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: true,

        disableActionButtions: true,
        searchObj: {},
        submitFieldName: 'student',

        errorMessage: 'Please select a student.',
      },
      {
        stepName: 'Acknowledgement',
        stepTitle: '',
        stepComponent: TermsDetailComponent,
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: false,
        disableActionButtions: true,
        searchObj: {'tag': 'class-enroll'},
        submitFieldName: 'ack',

        errorMessage: 'Please acknowldge you have read and agree on the terms.',
      },
    ];
    this.submitComp = {compoment: ClassenrollEditComponent, succeedUrl: '/academics/classenroll', cancelUrl: `/academics/class/detail/${classId}`, requireConfirm: false};
  }
}
