import { Component } from '@angular/core';
import { ClassService } from '../../academics/class/class.service';

@Component({
  selector: 'home-hot-classes-component',
  templateUrl: './hot_classes.component.html',
  styleUrls: ['./hot_classes.component.css']
})
export class HotClassesComponent {
    private classes;
    constructor(protected classService: ClassService) {
        const result = this.classService.getList(1,25,{}, null, null).subscribe(
           result => { 
              this.classes = result.items;
           },
        );
    }
}
