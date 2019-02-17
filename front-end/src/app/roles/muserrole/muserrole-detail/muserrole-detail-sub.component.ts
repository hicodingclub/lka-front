import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserroleDetailComponent } from './muserrole-detail.component';
import { MuserroleService } from '../muserrole.service';

@Component({
  selector: 'app-muserrole-detail-sub',
  templateUrl: './muserrole-detail-sub.component.html',
  styleUrls: ['./muserrole-detail.component.css']
})
export class MuserroleDetailSubComponent extends MuserroleDetailComponent 
        implements OnInit {
    @Input() inputData;
    
    constructor(
        protected muserroleService: MuserroleService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
        protected location: Location) {
            super(null,muserroleService, commonService, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }
}