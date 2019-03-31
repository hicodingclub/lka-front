import { Component } from '@angular/core';
import { FaqinfoService } from '../../publicinfo/faqinfo/faqinfo.service';

@Component({
  selector: 'home-faq-component',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
    private faqs;
    constructor(protected faqinfoService: FaqinfoService) {
        const result = this.faqinfoService.getList(1,25,{}).subscribe(
           result => { 
              this.faqs = result.items;
           },
        );
    }
}
