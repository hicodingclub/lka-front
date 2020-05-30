import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PipelineComponent, ViewType } from '../pipeline.component';
import { PipelineService } from '../pipeline.service';

@Component({
  selector: 'app-pipeline-detail-field',
  templateUrl: './pipeline-detail-field.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailFieldComponent extends PipelineComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
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
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
