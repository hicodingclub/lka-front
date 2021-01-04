import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  MddsBaseComponent,
  ViewType
} from '@hicoder/angular-core';
import {
  Component,
  OnInit,
  Injector,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ClassService
} from './class.service';
const itemCamelName = 'class';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  ElementRef
} from '@angular/core';
import {
  ComponentFactoryResolver
} from '@angular/core';
import {
  AcademicsRefSelectDirective
} from '../academics.component';
import {
  CourseDetailSelComponent
} from '../course/course-detail/course-detail-sel.component';
import {
  CourseDetailPopComponent
} from '../course/course-detail/course-detail-pop.component';
import {
  CourseListSelectIndexComponent
} from '../course/course-list/course-list-select-index.component';
import {
  TeacherDetailSelComponent
} from '../teacher/teacher-detail/teacher-detail-sel.component';
import {
  TeacherDetailPopComponent
} from '../teacher/teacher-detail/teacher-detail-pop.component';
import {
  TeacherListSelectComponent
} from '../teacher/teacher-list/teacher-list-select.component';
import {
  TermsDetailSelComponent
} from '../terms/terms-detail/terms-detail-sel.component';
import {
  TermsDetailPopComponent
} from '../terms/terms-detail/terms-detail-pop.component';
import {
  TermsListSelectComponent
} from '../terms/terms-list/terms-list-select.component';
@Component({
  template: '',
})
export class ClassComponent extends MddsBaseComponent implements OnInit {
  // *** common input fields
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions
  @Input()
  public searchObj: any;
  // *** list component
  @Input()
  public inputData: any;
  @Input()
  public queryParams: any; // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  @Input()
  public categoryBy: string; //field name whose value is used as category
  // list-asso component
  @Input('asso') public associationField: string;
  // list select component
  @Output() outputData: any;
  // *** edit / create component
  @Input()
  public id: string;
  @Input()
  public cid: string; // copy id
  @Input()
  public initData: any; // some fields has data already. eg: {a: b}. Used for add
  @Input()
  public embeddedView: boolean;
  @Input()
  public embedMode: string; // parent to tell the action - create
  @Output()
  public doneData = new EventEmitter < boolean > ();
  @Output()
  public done = new EventEmitter < any > ();
  // *** detail component
  // @Input() 
  // public id:string;
  @Input()
  public disableActionButtons: boolean;
  @Output()
  public eventEmitter: EventEmitter < any > = new EventEmitter();
  // detail sub component
  // @Input() inputData;
  // detail show field component
  // @Input() id: string;
  @Input() detailObj: any;
  @Input() showFieldsStr: string;
  // detail sel component
  //@Input() inputData;
  //@Output() outputData;
  // detail pop component
  // @Input() inputData;
  // @Output() outputData;
  public selectComponents = {
    'course': {
      'select-type': CourseListSelectIndexComponent,
      'select-detail-type': CourseDetailSelComponent,
      'pop-detail-type': CourseDetailPopComponent,
      'componentRef': null
    },
    'teacher': {
      'select-type': TeacherListSelectComponent,
      'select-detail-type': TeacherDetailSelComponent,
      'pop-detail-type': TeacherDetailPopComponent,
      'componentRef': null
    },
    'enrollTerm': {
      'select-type': TermsListSelectComponent,
      'select-detail-type': TermsDetailSelComponent,
      'pop-detail-type': TermsDetailPopComponent,
      'componentRef': null
    },
  }
  @ViewChild(AcademicsRefSelectDirective, {
    static: true
  }) refSelectDirective: AcademicsRefSelectDirective;
  @ViewChild('AcademicsModal', {
    static: true
  }) public focusEl: ElementRef;
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public classService: ClassService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(classService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [];
    this.briefFieldsInfo.push(['title', 'Title']);
    this.briefFieldsInfo.push(['course', 'Program']);
    this.briefFieldsInfo.push(['teacher', 'Instructor']);
    this.briefFieldsInfo.push(['hot', 'Hot']);
    this.briefFieldsInfo.push(['season', 'Season']);
    this.briefFieldsInfo.push(['startTime', 'Start Time']);
    this.briefFieldsInfo.push(['endTime', 'End Time']);
    this.briefFieldsInfo.push(['dayOfWeek', 'Day of Week']);
    this.briefFieldsInfo.push(['timeSlot', 'Time Slot']);
    this.referenceFieldsMap = {
      'course': 'course',
      'teacher': 'teacher',
      'enrollTerm': 'terms',
    };
    this.referenceFieldsReverseMap = {
      'course': 'course',
      'teacher': 'teacher',
      'terms': 'enrollTerm',
    };
    this.requiredFields = ['title', 'course', 'description', 'teacher', 'price', 'startTime', 'endTime', 'enrollTerm', ];
    this.schemaName = 'class';
    this.dateFormat = 'MM-DD-YYYY';
    this.timeFormat = 'hh:mm:ss';
    this.modulePath = 'academics';
    this.indexFields = ['title', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}