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







          this.listViewFilter = 'list';
          this.setListSort('title', 'Title', 'asc');
  }

  ngOnInit() {
      this.adjustListViewForWindowSize();

      // this is to initialize the detail that will be used for search condition selection
      const detail = this.searchObj || {};
      this.detail = this.formatDetail(detail);
      this.populateList();
  }
}
