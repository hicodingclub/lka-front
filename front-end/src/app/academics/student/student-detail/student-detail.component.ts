import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { StudentComponent, ViewType } from '../student.component';
import { StudentService } from '../student.service';




@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent extends StudentComponent implements OnInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}



  constructor(
      
      public studentService: StudentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                studentService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('first_name');
          this.stringFields.push('last_name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('school');
          this.stringFields.push('GuardianOneName');
          this.stringFields.push('GuardianOnePhone');
          this.stringFields.push('GuardianOneEmail');
          this.stringFields.push('GuardianTwoName');
          this.stringFields.push('GuardianTwoPhone');
          this.stringFields.push('GuardianTwoEmail');


          this.dateFields = ['date_of_birth', ];




  }

  ngOnInit() {
      this.style = this.style || {};
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
