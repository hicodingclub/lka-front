import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MmoduleDetailCustComponent } from '../../../roles-cust/base/mmodule/mmodule-detail.cust.component';
import { ViewType } from '../mmodule.component';
import { MmoduleService } from '../mmodule.service';




@Component({
  selector: 'app-mmodule-detail',
  templateUrl: './mmodule-detail.component.html',
  styleUrls: ['./mmodule-detail.component.css']
})
export class MmoduleDetailComponent extends MmoduleDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public mmoduleService: MmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mmoduleService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'module': 'Module',
            'resources': 'Resources',
          };


          this.stringFields.push('module');






          this.arrayFields = [['resources', 'SchemaString'],];




  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./mpermission/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
