import { Component } from '@angular/core';
import { FaqService } from '../../publicinfo/faq/faq.service';

@Component({
  selector: 'home-faq-component',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
    private faqs;
    constructor(protected faqService: FaqService) {
        const result = this.faqService.getList(1,25,{}, null, null).subscribe(
           result => { 
              this.faqs = result.items;
           },
        );
    }
}
