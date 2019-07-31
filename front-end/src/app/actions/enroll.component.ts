import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { compositeStep, compositeStepConfig, submitComponent } from 'mdds-angular-composite';

import { ClassListActSelComponent } from '../academics/class/class-list/class-list-act-sel.component';
import { StudentListActSelComponent } from '../academics/student/student-list/student-list-act-sel.component';
import { TermsDetailComponent } from '../academics/terms/terms-detail/terms-detail.component';

import { ClassenrollEditComponent } from '../academics/classenroll/classenroll-edit/classenroll-edit.component'
import { CompositeComponent } from 'mdds-angular-composite'
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public compositeSteps: compositeStep[];
  public compositeStepConfigs: compositeStepConfig[];
  public submitComp: submitComponent;
  public title: string;
  public intialClassId: string;

  @ViewChild(CompositeComponent) public compositeInstance: CompositeComponent;

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
    this.intialClassId = classId;

    this.title = 'Class Enrollment';
    this.compositeSteps = [
      {
        stepName: "Select class",
        errorMessage: 'Please select a class.',
      },
      {
        stepName: 'Select student',
        errorMessage: 'Please select a student.',
      },
      {
        stepName: 'Acknowledgement',
        errorMessage: 'Please acknowldge you have read and agree on the terms.',
      },
    ];
    this.compositeStepConfigs = [
      {
        stepTitle: 'Please select a class to enroll',

        stepComponent: ClassListActSelComponent,
        mandatory: true,
        preSelectedId: classId,
        multiSelect: false,

        disableActionButtions: true,
        searchObj: {},
        submitFieldName: 'class',
      },
      {
        stepTitle: 'Please select a registered student to enroll to the class',

        stepComponent: StudentListActSelComponent,
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: true,

        disableActionButtions: true,
        searchObj: {},
        submitFieldName: 'student',
      },
      {
        stepTitle: '',

        stepComponent: undefined, //not define the component at this time
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: false,
        disableActionButtions: true,
        searchObj: {'tag': 'class-enroll'},
        submitFieldName: 'ack',
      },
    ];
    this.submitComp = {compoment: ClassenrollEditComponent, succeedUrl: '/academics/classenroll', cancelUrl: `/academics/class/detail/${classId}`, requireConfirm: false};
  }

  onComponentEvents(message: any) {
    console.log('User action:', message);

    let classDetails;
    let reloadTerm: boolean = false;
    if (message.stepIndex === 0 && message.message.type === 'selection') {
      classDetails = message.message.result[0];
      reloadTerm = true;
    } else if (message.stepIndex === 0 && message.message.type === 'list') {
      if (this.intialClassId) {
        const classLists = message.message.result.filter(x => x._id === this.intialClassId);
        classDetails = classLists[0]
        reloadTerm = true;
      }
    }

    if (reloadTerm) {
      if (classDetails && classDetails.enrollTerm) {
        const config: compositeStepConfig = {
          stepTitle: '',

          stepComponent: TermsDetailComponent, //define the component at this time
          mandatory: true,
          preSelectedId: undefined,
          multiSelect: false,
          disableActionButtions: true,
          //searchObj: {'_id': classId},
          searchObj: {'_id': classDetails.enrollTerm._id},
          submitFieldName: 'ack',
        }
        this.compositeInstance.reloadStep(2, config)
      } else {
        const config: compositeStepConfig = {
          stepTitle: '',

          stepComponent: TermsDetailComponent, //define the component at this time
          mandatory: true,
          preSelectedId: undefined,
          multiSelect: false,
          disableActionButtions: true,
          //searchObj: {'_id': classId},
          searchObj: {'tag': 'class-enroll'},
          submitFieldName: 'ack',
        }
        this.compositeInstance.reloadStep(2, config)
      }
    }
  }
}
