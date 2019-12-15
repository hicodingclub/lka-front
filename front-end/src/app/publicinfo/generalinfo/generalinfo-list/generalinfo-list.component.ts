import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { GeneralinfoComponent, ViewType } from '../generalinfo.component';
import { GeneralinfoService } from '../generalinfo.service';



  
@Component({
  selector: 'app-generalinfo-list',
  templateUrl: './generalinfo-list.component.html',
  styleUrls: ['./generalinfo-list.component.css']
})
export class GeneralinfoListComponent extends GeneralinfoComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(
      
      public generalinfoService: GeneralinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                generalinfoService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('description');
          this.stringFields.push('tag');







          this.textareaFields = ['description', ];


          this.listViewFilter = 'list';
          this.setListSort('title', 'Title', 'asc');

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.searchList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new GeneralinfoListComponent(null, null, null, null, null);
  }
}

