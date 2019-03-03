import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { GeneralinfoService} from '../../publicinfo/generalinfo/generalinfo.service';
import { GeneralinfoComponent, ViewType } from '../../publicinfo/generalinfo/generalinfo.component';

@Component({
  selector: 'introduction-component',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})

export class IntroductionComponent extends GeneralinfoComponent implements OnInit {
  constructor(
      protected generalinfoService: GeneralinfoService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(generalinfoService, injector, router, route, location, ViewType.LIST);


          this.stringFields.push('title');
          this.stringFields.push('description');
          // this is to initialize the detail that will be used for search condition selection
          const detail = {};
          this.detail = this.formatDetail(detail);
  }

  ngOnInit() {
      this.populateList();
  }
}
//export class IntroductionComponent {
//	private WhatTitle = 'What is LKA?';
//	private WhatContent = 'Write introduction to LKA here..';
//	private WhyTitle = 'Why you should be here?';
//	private WhyContent = 'Write reasons here...';
//	private MissionTitle = 'What is LKA\'s Mission?';
//	private MissionContent = 'Write missions here...';
//	
//	
// }