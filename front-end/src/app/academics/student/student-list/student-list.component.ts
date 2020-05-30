import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { StudentListCustComponent } from '../../../academics-cust/base/student/student-list.cust.component';
import { ViewType } from '../student.component';
import { StudentService } from '../student.service';



  
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends StudentListCustComponent implements OnInit {

  public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
  //                        disableListSearch: false, disableTitle: false, disableRefs: false
  //                        disableListHead: false, disableTitleRow: false}
  // @Input()
  // public inputData:any;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  // @Input()
  // public categoryBy:string; //field name whose value is used as category
  

  constructor(
      
      public studentService: StudentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                studentService, injector, router, route, location, ViewType.LIST);

          this.fieldDisplayNames = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'grade': 'Grade',
          };


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');



          this.numberFields = ['grade', ];








          this.listViewFilter = 'grid';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      super.ngOnInit();

      this.adjustListViewForWindowSize();

      if (!this.options) {
        this.options = {};
      }
  
      if (this.options.disableCatetory) {
        this.listCategory1 = {}; // no do query based on category for home view;
        this.listCategory2 = {}; // no do query based on category for home view;
      }

      // this is to initialize the detail that will be used for search condition selection
      let detail = {};
      if (this.searchObj) {
        this.searchDetailReady = true; // search provided from "detail", not from search bar.
        detail = this.searchObj;
      }
      if (this.queryParams) {
        this.listSortField = this.queryParams.listSortField;
        this.listSortOrder = this.queryParams.listSortOrder;
        if (this.queryParams.perPage) {
          this.perPage = this.queryParams.perPage 
        }
      }
      this.detail = this.formatDetail(detail);
      this.searchList();

      // get editHintFields
      this.searchHintFieldValues();
  }

  static getInstance() {
    //used by others to call some common functions
    return new StudentListComponent(null, null, null, null, null);
  }
}

