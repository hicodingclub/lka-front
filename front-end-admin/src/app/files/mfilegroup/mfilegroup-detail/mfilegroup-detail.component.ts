import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfilegroupDetailCustComponent } from '../../../files-cust/base/mfilegroup/mfilegroup-detail.cust.component';
import { ViewType } from '../mfilegroup.component';
import { MfilegroupService } from '../mfilegroup.service';




@Component({
  selector: 'app-mfilegroup-detail',
  templateUrl: './mfilegroup-detail.component.html',
  styleUrls: ['./mfilegroup-detail.component.css']
})
export class MfilegroupDetailComponent extends MfilegroupDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public mfilegroupService: MfilegroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mfilegroupService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'name': 'Name',
            'createdAt': 'Created at',
          };
          this.stringFields.push('name');
          this.dateFields = [
            'createdAt',
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
      this.router.navigate(['./mfile/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
