import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PipelineDetailCustComponent } from '../../../pipeline-cust/base/pipeline/pipeline-detail.cust.component';
import { ViewType } from '../pipeline.component';
import { PipelineService } from '../pipeline.service';




@Component({
  selector: 'app-pipeline-detail',
  templateUrl: './pipeline-detail.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailComponent extends PipelineDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public pipelineService: PipelineService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                pipelineService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'category': 'Category',
            'createdAt': 'Created at',
            'updatedAt': 'Updated at',
            'muser_id': 'Muser Id',
          };


          this.stringFields.push('category');
          this.stringFields.push('muser_id');


          this.dateFields = ['createdAt', 'updatedAt', ];








  }

  ngOnInit() {
      super.ngOnInit();
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

  }
}
