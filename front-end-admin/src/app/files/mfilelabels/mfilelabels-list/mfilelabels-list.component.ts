import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MfilelabelsComponent, ViewType } from '../mfilelabels.component';
import { MfilelabelsService } from '../mfilelabels.service';



  
@Component({
  selector: 'app-mfilelabels-list',
  templateUrl: './mfilelabels-list.component.html',
  styleUrls: ['./mfilelabels-list.component.css']
})
export class MfilelabelsListComponent extends MfilelabelsComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public mfilelabelsService: MfilelabelsService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mfilelabelsService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('label');








          this.listViewFilter = 'list';

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }

  static getInstance() {
    //used by others to call some common functions
    return new MfilelabelsListComponent(null, null, null, null, null);
  }
}

