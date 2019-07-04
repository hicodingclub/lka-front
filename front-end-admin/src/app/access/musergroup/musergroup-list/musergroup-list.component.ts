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


  @Input()
  public searchObj:any;

  constructor(

      public musergroupService: MusergroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                musergroupService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('group');
          this.stringFields.push('description');







          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
