import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

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
  @Input()
  protected identityField:string;
  @Input()
  protected identityValue:string;


  constructor(
      
      protected mmoduleService: MmoduleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mmoduleService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];


  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.identityField && this.identityValue) {
        // search item based on the unique value
        this.populateDetailByField(this.identityField, this.identityValue);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
