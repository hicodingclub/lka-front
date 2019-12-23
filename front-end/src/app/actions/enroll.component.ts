import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompositeStep, CompositeStepConfig, SubmitComponent } from '@hicoder/angular-composite';

import { ClassDetailComponent } from '../academics/class/class-detail/class-detail.component';
import { ClassListWidgetSelComponent } from '../academics/class/class-list/class-list-widget-sel.component';
import { StudentListWidgetSelComponent } from '../academics/student/student-list/student-list-widget-sel.component';
import { TermsDetailWidgetTermComponent } from '../academics/terms/terms-detail/terms-detail-widget-term.component';

import { ClassenrollEditComponent } from '../academics/classenroll/classenroll-edit/classenroll-edit.component'
import { CompositeComponent } from '@hicoder/angular-composite'
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public compositeSteps: CompositeStep[];
  public compositeStepConfigs: CompositeStepConfig[];
  public submitComp: SubmitComponent;
  public title: string;
  public intialClassId: string;

  @ViewChild(CompositeComponent, {static: true}) public compositeInstance: CompositeComponent;

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
        stepName: "Selected class",
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
        stepTitle: 'This is the selected class to enroll',

        stepComponent: ClassDetailComponent,
        mandatory: true,
        preSelectedId: classId,
        multiSelect: false,

        options: {
          disableActionButtions: true,
          disablePipeline: true,
          disableTitle: true,
        },
        id: classId,
        searchObj: {},
        submitFieldName: 'class',
      },
      {
        stepTitle: 'Please select a registered student to enroll to the class',

        stepComponent: StudentListWidgetSelComponent,
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: true,

        options: {disableActionButtions: true},
        id: undefined,
        searchObj: {},
        submitFieldName: 'student',
      },
      {
        stepTitle: '',

        stepComponent: undefined, //not define the component at this time
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: false,
        options: {disableActionButtions: true},
        id: undefined,
        searchObj: {'tag': 'class-enroll'},
        submitFieldName: 'ack',
      },
    ];
    this.submitComp = {compoment: ClassenrollEditComponent, succeedUrl: '/academics/classenroll', cancelUrl: `/academics/class/detail/${classId}`, requireConfirm: false};
  }

  onComponentEvents(message: any) {
    let classDetails;
    let reloadTerm: boolean = false;
    if (message.stepIndex === 0) {
      if (message.message.type === 'selection') {
        classDetails = message.message.result[0];
        reloadTerm = true;
      } else if (message.message.type === 'list') {
        if (this.intialClassId) {
          const classLists = message.message.result.filter(x => x._id === this.intialClassId);
          classDetails = classLists[0]
          reloadTerm = true;
        }
      } else if (message.message.type === 'detail') {
        classDetails = message.message.result;
        reloadTerm = true;
      }
    }

    if (reloadTerm) {
      let id, searchObj;
      if (classDetails && classDetails.enrollTerm) {
        id = classDetails.enrollTerm._id;
      } else {
        searchObj = {'tag': 'class-enroll'};
      }
      const config: CompositeStepConfig = {
        stepTitle: '',

        stepComponent: TermsDetailWidgetTermComponent, //define the component at this time
        mandatory: true,
        preSelectedId: undefined,
        multiSelect: false,
        options: {disableActionButtions: true},
        //searchObj: {'_id': classId},
        id,
        searchObj,
        submitFieldName: 'ack',
      };
      this.compositeInstance.reloadStep(2, config);
    }
  }
}
