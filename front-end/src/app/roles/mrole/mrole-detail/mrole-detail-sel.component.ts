import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MroleDetailComponent } from './mrole-detail.component';
import { MroleService } from '../mrole.service';

@Component({
  selector: 'app-mrole-detail-sel',
  templateUrl: './mrole-detail-sel.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailSelComponent extends MroleDetailComponent 
        implements OnInit {
    @Input() inputData;
    @Output() outputData;
    done = new EventEmitter<boolean>();
    
    constructor(
        protected mroleService: MroleService,
        protected commonService: MraCommonService,
        protected router: Router,
        protected route: ActivatedRoute,
       protected location: Location) {
            super(mroleService, commonService, router, route, location);
            this.majorUi = false;
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
    }
}