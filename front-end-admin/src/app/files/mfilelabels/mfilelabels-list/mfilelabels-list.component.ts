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
  public searchObj:any;

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
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
