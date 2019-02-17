import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserComponent, ViewType } from '../muser.component';
import { MuserService } from '../muser.service';



@Component({
  selector: 'app-muser-list',
  templateUrl: './muser-list.component.html',
  styleUrls: ['./muser-list.component.css']
})
export class MuserListComponent extends MuserComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  constructor(

      protected muserService: MuserService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                muserService, commonService, router, route, location, ViewType.LIST);

          this.enums['status'] = ['Enabled', 'Disabled', 'Pending', ];

          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('status');


          this.dateFields = ['since', ];



          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
