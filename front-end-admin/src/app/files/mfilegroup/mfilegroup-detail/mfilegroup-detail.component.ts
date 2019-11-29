import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MfilegroupComponent, ViewType } from '../mfilegroup.component';
import { MfilegroupService } from '../mfilegroup.service';




@Component({
  selector: 'app-mfilegroup-detail',
  templateUrl: './mfilegroup-detail.component.html',
  styleUrls: ['./mfilegroup-detail.component.css']
})
export class MfilegroupDetailComponent extends MfilegroupComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions



  constructor(
      
      public mfilegroupService: MfilegroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                mfilegroupService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('name');


          this.dateFields = ['createdAt', ];






  }

  ngOnInit() {
      this.style = this.style || {};
      this.options = this.options || {};
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

    //Load first reference, if not others activated
    if (!this.isChildRouterActivated()) {
      this.router.navigate(['./mfile/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
