import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupComponent, ViewType } from '../musergroup.component';
import { MusergroupService } from '../musergroup.service';



@Component({
  selector: 'app-musergroup-list',
  templateUrl: './musergroup-list.component.html',
  styleUrls: ['./musergroup-list.component.css']
})
export class MusergroupListComponent extends MusergroupComponent implements OnInit {


  constructor(

      protected musergroupService: MusergroupService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                musergroupService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('group');
          this.stringFields.push('description');







          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
