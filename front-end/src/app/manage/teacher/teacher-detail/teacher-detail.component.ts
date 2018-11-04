import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { TeacherComponent, ViewType } from '../teacher.component';
import { TeacherService } from '../teacher.service';




@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent extends TeacherComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected teacherService: TeacherService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                teacherService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('firstName');
          this.stringFields.push('lastName');
          this.stringFields.push('introduction');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');



  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
