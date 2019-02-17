import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MroleComponent, ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';



@Component({
  selector: 'app-mrole-list',
  templateUrl: './mrole-list.component.html',
  styleUrls: ['./mrole-list.component.css']
})
export class MroleListComponent extends MroleComponent implements OnInit {


  constructor(

      protected mroleService: MroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mroleService, commonService, router, route, location, ViewType.LIST);


          this.stringFields.push('role');
          this.stringFields.push('description');





          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
