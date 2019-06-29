import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { KeynoteComponent, ViewType } from '../keynote.component';
import { KeynoteService } from '../keynote.service';







@Component({
  selector: 'app-keynote-edit',
  templateUrl: './keynote-edit.component.html',
  styleUrls: ['./keynote-edit.component.css']
})
export class KeynoteEditComponent extends KeynoteComponent implements OnInit {        
    @Input() 
    protected id: string;
    @Input()
    protected cid: string;//copy id
    @Input()
    protected initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output() done = new EventEmitter<boolean>();

    protected action:string;


        
    constructor(
      
      protected keynoteService: KeynoteService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( 
                 keynoteService, injector, router, route, location, ViewType.EDIT);


          this.stringFields.push('title');
          this.stringFields.push('subtitle');
          this.stringFields.push('description');
          this.stringFields.push('signaturePicture');
          this.stringFields.push('tag');







          
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
                this.subEdit = true;
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
