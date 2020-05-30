import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MroleDetailCustComponent } from '../../../roles-cust/base/mrole/mrole-detail.cust.component';
import { ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';




@Component({
  selector: 'app-mrole-detail',
  templateUrl: './mrole-detail.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailComponent extends MroleDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public mroleService: MroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mroleService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'role': 'Role',
            'description': 'Description',
          };


          this.stringFields.push('role');
          this.stringFields.push('description');










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
