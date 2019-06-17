import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MaccountComponent, ViewType } from '../maccount.component';
import { MaccountService } from '../maccount.service';



@Component({
  selector: 'app-maccount-list',
  templateUrl: './maccount-list.component.html',
  styleUrls: ['./maccount-list.component.css']
})
export class MaccountListComponent extends MaccountComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  constructor(

      protected maccountService: MaccountService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                maccountService, injector, router, route, location, ViewType.LIST);

          this.enums['status'] = ['Enabled', 'Disabled', 'Pending', ];

          this.stringFields.push('username');
          this.stringFields.push('email');
          this.stringFields.push('phone');
          this.stringFields.push('status');


          this.dateFields = ['since', ];





          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
