import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleDetailCustComponent } from '../../../access-cust/base/mpubmodule/mpubmodule-detail.cust.component';
import { ViewType } from '../mpubmodule.component';
import { MpubmoduleService } from '../mpubmodule.service';




@Component({
  selector: 'app-mpubmodule-detail',
  templateUrl: './mpubmodule-detail.component.html',
  styleUrls: ['./mpubmodule-detail.component.css']
})
export class MpubmoduleDetailComponent extends MpubmoduleDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public mpubmoduleService: MpubmoduleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mpubmoduleService, injector, router, route, location);
          this.view = ViewType.DETAIL;

          this.fieldDisplayNames = {
            'module': 'Module',
            'resources': 'Resources',
          };
          this.stringFields.push('module');
          this.arrayFields = [
            ['resources', 'SchemaString'],
          ];
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
      this.router.navigate(['./mpubaccess/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
