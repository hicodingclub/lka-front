import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { FaqinfoComponent, ViewType } from '../faqinfo.component';
import { FaqinfoService } from '../faqinfo.service';



@Component({
  selector: 'app-faqinfo-list',
  templateUrl: './faqinfo-list.component.html',
  styleUrls: ['./faqinfo-list.component.css']
})
export class FaqinfoListComponent extends FaqinfoComponent implements OnInit {


  constructor(

      protected faqinfoService: FaqinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                faqinfoService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('question');
          this.stringFields.push('answer');






          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
