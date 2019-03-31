import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageObject = [ {
     imageURL: 'assets/images/work.jpg',
     heading: 'chicago',
     subheading: 'c1'
   }, {
     imageURL: 'assets/images/work.jpg',
     heading: 'ny',
     subheading: 'n1'
   }, {
     imageURL: 'assets/images/work.jpg',
     heading: 'la',
     subheading: 'l1'
   }  ] 

}
