import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleComponent, ViewType } from '../mpubmodule.component';
import { MpubmoduleService } from '../mpubmodule.service';




@Component({
  selector: 'app-mpubmodule-detail',
  templateUrl: './mpubmodule-detail.component.html',
  styleUrls: ['./mpubmodule-detail.component.css']
})
export class MpubmoduleDetailComponent extends MpubmoduleComponent implements OnInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}



  constructor(
      
      public mpubmoduleService: MpubmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mpubmoduleService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];

  }

  ngOnInit() {
      this.style = this.style || {};
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
