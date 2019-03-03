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


  constructor(

      protected generalinfoService: GeneralinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                generalinfoService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('title');
          this.stringFields.push('description');






          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
