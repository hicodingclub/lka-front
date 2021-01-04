import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  Directive,
  EventEmitter
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
declare const $: any;
import {
  ClassEditCustComponent
} from '../../../academics-cust/base/class/class-edit.cust.component';
import {
  ViewType
} from '../class.component';
import {
  ClassService
} from '../class.service';
import {
  ComponentFactoryResolver
} from '@angular/core';
import {
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  MddsRichTextSelectDirective
} from '@hicoder/angular-core';
@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent extends ClassEditCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id: string;
  // @Input()
  // public cid: string; // copy id
  // @Input()
  // public initData: any; // some fields has data already. eg: {a: b}. Used for add
  // @Output()
  // public doneData = new EventEmitter<boolean>();
  // @Output()
  // public done = new EventEmitter<any>();
  // @Input()
  // public embeddedView: boolean;
  // @Input()
  // public embedMode: string; // parent to tell the action - create
  public action: string;
  public minDate = {
    year: (new Date()).getFullYear() - 100,
    month: 1,
    day: 1
  };
  @ViewChildren(MddsRichTextSelectDirective) textEditors: QueryList < MddsRichTextSelectDirective > ;
  public EditDescription: any = {
    valid: true
  };
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public classService: ClassService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(componentFactoryResolver, classService, injector, router, route, location);
    this.view = ViewType.EDIT;
    this.fieldDisplayNames = {
      'title': 'Title',
      'course': 'Program',
      'description': 'Description',
      'teacher': 'Instructor',
      'price': 'Price',
      'season': 'Season',
      'startTime': 'Start Time',
      'endTime': 'End Time',
      'duration': 'Duration',
      'dayOfWeek': 'Day of Week',
      'timeSlot': 'Time Slot',
      'hot': 'Hot',
      'enrollTerm': 'Enroll Term',
    };
    this.enums['dayOfWeek'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ];
    this.stringFields.push('title');
    this.stringFields.push('description');
    this.stringFields.push('price');
    this.stringFields.push('season');
    this.stringFields.push('duration');
    this.stringFields.push('timeSlot');
    this.referenceFields = ['course', 'teacher', 'enrollTerm', ];
    this.dateFields = ['startTime', 'endTime', ];
    this.multiSelectionFields = ['dayOfWeek', ];
    this.editHintFields = {
      'season': [],
    };
    this.textEditorMap['EditDescription'] = {
      required: true,
      fieldState: this.EditDescription,
      fieldName: 'description'
    };
    const detail = {};
    this.detail = this.formatDetail(detail);
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.embedMode == 'create') { // parent ask to create
      this.action = 'Create';
      this.getDetailData();
    } else {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.action = 'Edit';
        this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
      } else {
        this.action = 'Create';
        if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
        if (this.cid) {
          this.populateDetailFromCopy(this.cid);
        } else {
          this.getDetailData();
        }
      }
    }
    // get editHintFields
    this.searchHintFieldValues();
  }
  ngAfterViewInit() {
    // Initialize all tooltips
    $('[data-toggle="tooltip"]').tooltip();
  }
  getDetailData() {
    if (this.initData) {
      this.action = 'Add';
      let detail = {
        dayOfWeek: ["Mon"],
        hot: false,
      };
      for (let prop of Object.keys(this.initData)) {
        detail[prop] = this.initData[prop];
        this.hiddenFields.push(prop);
      }
      this.detail = this.formatDetail(detail);
    } else {
      let detail = {
        dayOfWeek: ["Mon"],
        hot: false,
      };
      this.detail = this.formatDetail(detail);
    }
  }
}