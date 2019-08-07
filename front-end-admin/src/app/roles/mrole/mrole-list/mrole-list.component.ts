import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MroleComponent, ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';



  
@Component({
  selector: 'app-mrole-list',
  templateUrl: './mrole-list.component.html',
  styleUrls: ['./mrole-list.component.css']
})
export class MroleListComponent extends MroleComponent implements OnInit {


  @Input()
  public inputData:any;
  @Input()
  public searchObj:any;
  @Input()
  public categoryBy:string; //field name whose value is used as category
  

  constructor(

      public mroleService: MroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mroleService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('role');
          this.stringFields.push('description');








          this.listViewFilter = 'list';

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
    return new MroleListComponent(null, null, null, null, null);
  }
}

