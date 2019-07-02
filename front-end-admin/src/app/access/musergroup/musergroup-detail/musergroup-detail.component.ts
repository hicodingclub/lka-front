import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupComponent, ViewType } from '../musergroup.component';
import { MusergroupService } from '../musergroup.service';




@Component({
  selector: 'app-musergroup-detail',
  templateUrl: './musergroup-detail.component.html',
  styleUrls: ['./musergroup-detail.component.css']
})
export class MusergroupDetailComponent extends MusergroupComponent implements OnInit {
  @Input() 
  protected id:string;
  @Input()
  protected searchObj:any;
  @Input()
  protected disableActionButtions:boolean;



  constructor(
      
      protected musergroupService: MusergroupService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                musergroupService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('group');
          this.stringFields.push('description');







  }

  ngOnInit() {
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
