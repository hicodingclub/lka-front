import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MmoduleComponent, ViewType } from '../mmodule.component';
import { MmoduleService } from '../mmodule.service';




@Component({
  selector: 'app-mmodule-detail',
  templateUrl: './mmodule-detail.component.html',
  styleUrls: ['./mmodule-detail.component.css']
})
export class MmoduleDetailComponent extends MmoduleComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected mmoduleService: MmoduleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mmoduleService, commonService, router, route, location, ViewType.DETAIL);


          this.stringFields.push('module');




          this.arrayFields = [['resources', 'SchemaString'],];


  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
