import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends StudentComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear()-100, month: 1, day: 1}; 

  constructor(
      
      protected studentService: StudentService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                studentService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');


          //this is to initialize the detail that will be used for search condition selection
          let detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
