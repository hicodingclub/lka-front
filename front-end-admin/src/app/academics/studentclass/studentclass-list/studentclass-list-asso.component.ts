import {
  Component,
  OnInit,
  Input,
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
import {
  StudentclassListSubComponent
} from './studentclass-list-sub.component';
import {
  StudentclassService
} from '../studentclass.service';
import {
  StudentListComponent
} from '../../student/student-list/student-list.component';
@Component({
  selector: 'app-studentclass-list-asso',
  templateUrl: './studentclass-list-asso.component.html',
  styleUrls: ['./studentclass-list.component.css']
})
export class StudentclassListAssoComponent extends StudentclassListSubComponent implements OnInit {
  // @Input('asso') public associationField: string;
  public parentSchema;
  public parentItemId;
  public assoCompInstance: any;
  public assoCompFields;
  public assoCompObjects = [];
  constructor(public studentclassService: StudentclassService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(studentclassService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.associationField) {
      // get from param if not given from the component input
      this.associationField = this.route.snapshot.queryParamMap.get('asso');
    }
    if (this.associationField === 'student') {
      this.assoCompInstance = StudentListComponent.getInstance();
    }
    if (this.assoCompInstance) {
      this.assoCompFields = this.assoCompInstance.briefFieldsInfo;
    }
    let ref = this.getParentRouteRefField();
    this.parentSchema = this.referenceFieldsReverseMap[ref];
    this.ignoreField = ref; // used for export (send to server)
    this.parentItemId = this.getParentRouteItemId();
    let id = this.parentItemId;
    this.detail = {};
    if (this.arrayFields.some(x => x[0] == ref)) {
      this.detail[ref] = {
        'selection': [{
          '_id': id
        }]
      }; //search on array list
    } else {
      this.detail[ref] = {
        '_id': id
      }; //make this as the search context
    }
    this.searchList().subscribe((done) => {
      if (done) {
        this.assoCompObjects = [];
        for (let item of this.originalList) {
          const o = item[this.associationField];
          //always put to an array
          let oArray = [];
          if (Array.isArray(o)) {
            for (let oo of o) {
              oArray.push(this.assoCompInstance.formatDetail(oo));
            }
          } else if (typeof o === 'object') {
            oArray.push(this.assoCompInstance.formatDetail(o));
          }
          this.assoCompObjects.push(oArray);
        }
      }
    });
  }
}