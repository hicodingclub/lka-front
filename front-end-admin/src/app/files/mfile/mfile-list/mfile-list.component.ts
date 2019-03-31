import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MfileComponent, ViewType } from '../mfile.component';
import { MfileService } from '../mfile.service';



@Component({
  selector: 'app-mfile-list',
  templateUrl: './mfile-list.component.html',
  styleUrls: ['./mfile-list.component.css']
})
export class MfileListComponent extends MfileComponent implements OnInit {

  private  minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};

  constructor(

      protected mfileService: MfileService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mfileService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('name');
          this.stringFields.push('type');
          this.stringFields.push('link');


          this.dateFields = ['uploaded', ];



          this.arrayFields = [['labels', 'SchemaString'],];

          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
