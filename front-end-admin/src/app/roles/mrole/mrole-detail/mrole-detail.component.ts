import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MroleComponent, ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';




@Component({
  selector: 'app-mrole-detail',
  templateUrl: './mrole-detail.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailComponent extends MroleComponent implements OnInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}



  constructor(
      
      public mroleService: MroleService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mroleService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('role');
          this.stringFields.push('description');






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
