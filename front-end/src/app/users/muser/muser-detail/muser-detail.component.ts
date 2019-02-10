import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserComponent, ViewType } from '../muser.component';
import { MuserService } from '../muser.service';




@Component({
  selector: 'app-muser-detail',
  templateUrl: './muser-detail.component.html',
  styleUrls: ['./muser-detail.component.css']
})
export class MuserDetailComponent extends MuserComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected muserService: MuserService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                muserService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('status');

          this.dateFields = ['since', ];

  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
