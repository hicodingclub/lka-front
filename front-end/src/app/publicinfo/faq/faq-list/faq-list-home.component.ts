import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { FaqListComponent } from './faq-list.component';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-list-home',
  templateUrl: './faq-list-home.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListHomeComponent extends FaqListComponent implements OnInit {
  private parentData = {};
  constructor(
      protected faqService: FaqService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
        super( faqService, injector, router, route, location);
        this.per_page = 6;
  }

  ngOnInit() {
      this.populateList();
  }
}
