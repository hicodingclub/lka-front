import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { GeneralinfoComponent, ViewType } from '../generalinfo.component';
import { GeneralinfoService } from '../generalinfo.service';




@Component({
  selector: 'app-generalinfo-detail',
  templateUrl: './generalinfo-detail.component.html',
  styleUrls: ['./generalinfo-detail.component.css']
})
export class GeneralinfoDetailComponent extends GeneralinfoComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected generalinfoService: GeneralinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                generalinfoService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('title');
          this.stringFields.push('description');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
