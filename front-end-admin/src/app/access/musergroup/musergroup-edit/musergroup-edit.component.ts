import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MusergroupComponent, ViewType } from '../musergroup.component';
import { MusergroupService } from '../musergroup.service';







@Component({
  selector: 'app-musergroup-edit',
  templateUrl: './musergroup-edit.component.html',
  styleUrls: ['./musergroup-edit.component.css']
})
export class MusergroupEditComponent extends MusergroupComponent implements OnInit {        
    @Input() 
    public id: string;
    @Input()
    public cid: string;//copy id
    @Input()
    public initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output()
    public done = new EventEmitter<boolean>();
    @Input()
    public embeddedView: boolean;

    public action:string;


        
    constructor(
      
      public musergroupService: MusergroupService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super( 
                 musergroupService, injector, router, route, location, ViewType.EDIT);


          this.stringFields.push('group');
          this.stringFields.push('description');







          
          let detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action="Edit";
            this.populateDetailForAction(this.id, "edit"); //populate with action as "edit"
        }
        else {
            this.action="Create";
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else if (this.initData) {
                this.action="Add";
                let detail = {
                    
                };
                for (let prop in this.initData) {
                    detail[prop] = this.initData[prop];
                    this.hiddenFields.push(prop);
                }
                this.detail = this.formatDetail(detail);
            } else {
                let detail = {
                    
                };
                this.detail = this.formatDetail(detail);
            }
        }
    }

}
