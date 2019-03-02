import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MroleComponent, ViewType } from '../mrole.component';
import { MroleService } from '../mrole.service';




@Component({
  selector: 'app-mrole-detail',
  templateUrl: './mrole-detail.component.html',
  styleUrls: ['./mrole-detail.component.css']
})
export class MroleDetailComponent extends MroleComponent implements OnInit {
  @Input() 
  protected id:string;


  constructor(
      
      protected mroleService: MroleService,
      protected injector: Injector,
      protected router: Router,
      protected route: ActivatedRoute,
      protected location: Location) {
          super(
                mroleService, injector, router, route, location, ViewType.DETAIL);


          this.stringFields.push('role');
          this.stringFields.push('description');







  }

  ngOnInit() {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail view... no id...");
  }
}
