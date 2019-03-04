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
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
