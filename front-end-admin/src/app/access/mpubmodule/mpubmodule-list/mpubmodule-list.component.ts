import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleComponent, ViewType } from '../mpubmodule.component';
import { MpubmoduleService } from '../mpubmodule.service';



@Component({
  selector: 'app-mpubmodule-list',
  templateUrl: './mpubmodule-list.component.html',
  styleUrls: ['./mpubmodule-list.component.css']
})
export class MpubmoduleListComponent extends MpubmoduleComponent implements OnInit {


  constructor(

      protected mpubmoduleService: MpubmoduleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mpubmoduleService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
