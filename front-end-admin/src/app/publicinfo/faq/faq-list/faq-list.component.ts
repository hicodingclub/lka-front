import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { FaqComponent, ViewType } from '../faq.component';
import { FaqService } from '../faq.service';



@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent extends FaqComponent implements OnInit {


  @Input()
  protected searchObj:any;

  constructor(

      protected faqService: FaqService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                faqService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('question');
          this.stringFields.push('answer');







          this.listViewFilter = 'list';
          // this is to initialize the detail that will be used for search condition selection
          const detail = this.searchObj || {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
