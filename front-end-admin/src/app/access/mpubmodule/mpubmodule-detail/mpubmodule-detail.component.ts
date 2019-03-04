import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MpubmoduleComponent, ViewType } from '../mpubmodule.component';
import { MpubmoduleService } from '../mpubmodule.service';




@Component({
  selector: 'app-mpubmodule-detail',
  templateUrl: './mpubmodule-detail.component.html',
  styleUrls: ['./mpubmodule-detail.component.css']
})
export class MpubmoduleDetailComponent extends MpubmoduleComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected mpubmoduleService: MpubmoduleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mpubmoduleService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('module');





          this.arrayFields = [['resources', 'SchemaString'],];


  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
