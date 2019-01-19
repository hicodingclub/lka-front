import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';




@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent extends StudentComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected studentService: StudentService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                studentService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');


          this.dateFields = ['date_of_birth', ];

  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
