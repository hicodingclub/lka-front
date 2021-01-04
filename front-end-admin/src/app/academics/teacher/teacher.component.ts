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
  TeacherService
} from './teacher.service';
const itemCamelName = 'instructors';
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
@Component({
  template: '',
})
export class TeacherComponent extends MddsBaseComponent implements OnInit {
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
    'courses': {
      'select-type': CourseListSelectIndexComponent,
      'select-detail-type': CourseDetailSelComponent,
      'pop-detail-type': CourseDetailPopComponent,
      'componentRef': null
    },
  }
  @ViewChild(AcademicsRefSelectDirective, {
    static: true
  }) refSelectDirective: AcademicsRefSelectDirective;
  @ViewChild('AcademicsModal', {
    static: true
  }) public focusEl: ElementRef;
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public teacherService: TeacherService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(teacherService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [];
    this.briefFieldsInfo.push(['firstName', 'First Name']);
    this.briefFieldsInfo.push(['lastName', 'Last Name']);
    this.briefFieldsInfo.push(['courses', 'Program']);
    this.briefFieldsInfo.push(['introduction', 'Introduction']);
    this.briefFieldsInfo.push(['photo', 'Photo']);
    this.referenceFieldsMap = {
      'courses': 'course',
    };
    this.referenceFieldsReverseMap = {
      'course': 'courses',
    };
    this.requiredFields = ['firstName', 'lastName', 'courses', 'introduction', 'email', 'photo', ];
    this.emailFields = [
      ['Email', 'email'],
    ];
    this.schemaName = 'teacher';
    this.modulePath = 'academics';
    this.indexFields = ['firstName', 'lastName', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}