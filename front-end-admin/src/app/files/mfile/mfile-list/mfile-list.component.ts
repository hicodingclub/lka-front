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

  protected minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};
  protected pageTitle = "My list";

  @Input()
  public searchObj:any;

  constructor(

      public mfileService: MfileService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mfileService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('name');
          this.stringFields.push('type');
          this.stringFields.push('link');


          this.dateFields = ['uploaded', ];



          this.arrayFields = [['labels', 'SchemaString'],];


          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
