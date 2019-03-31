import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { FaqinfoComponent, ViewType } from '../faqinfo.component';
import { FaqinfoService } from '../faqinfo.service';




@Component({
  selector: 'app-faqinfo-detail',
  templateUrl: './faqinfo-detail.component.html',
  styleUrls: ['./faqinfo-detail.component.css']
})
export class FaqinfoDetailComponent extends FaqinfoComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected faqinfoService: FaqinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                faqinfoService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('question');
          this.stringFields.push('answer');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
