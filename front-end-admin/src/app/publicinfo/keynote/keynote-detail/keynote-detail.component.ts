import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteComponent, ViewType } from '../keynote.component';
import { KeynoteService } from '../keynote.service';




@Component({
  selector: 'app-keynote-detail',
  templateUrl: './keynote-detail.component.html',
  styleUrls: ['./keynote-detail.component.css']
})
export class KeynoteDetailComponent extends KeynoteComponent implements OnInit {
  @Input() 
  protected id:string;
  @Input()
  protected searchObj:any;
  @Input()
  protected disableActionButtions:boolean;



  constructor(
      
      protected keynoteService: KeynoteService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                keynoteService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('signaturePicture');
          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
      }
  }
}
