import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { MraCommonService } from 'mean-rest-angular';

import { MuserroleComponent, ViewType } from '../muserrole.component';
import { MuserroleService } from '../muserrole.service';



import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-muserrole-edit',
  templateUrl: './muserrole-edit.component.html',
  styleUrls: ['./muserrole-edit.component.css']
})
export class MuserroleEditComponent extends MuserroleComponent implements OnInit {        
    @Input() 
    protected id: string;
    @Input()
    protected cid: string;//copy id
    @Input()
    protected initData: any; //some fields has data already. eg: {a: b}. Used for add
    @Output() done = new EventEmitter<boolean>();

    protected action:string;


        
    constructor(
      protected componentFactoryResolver: ComponentFactoryResolver,
      protected muserroleService: MuserroleService,
      protected commonService: MraCommonService,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super( componentFactoryResolver,
                 muserroleService, commonService, router, route, location, ViewType.EDIT);



          this.referenceFields = ['user', ];
          this.referenceFieldsMap = {'user': 'muser',};



          this.arrayFields = [['role', 'ObjectId'],];
          this.referenceFieldsMap['role'] = 'mrole';


          
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