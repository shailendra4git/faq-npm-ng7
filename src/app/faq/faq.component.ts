import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {

	todayDate = new Date();
	year = this.todayDate.getFullYear();

	panelOpenState = false;
	faqItems: any;

	constructor(private contentService: ContentService) {}

	ngOnInit() {
		this.contentService.getFaq()
			.subscribe((res: any) => {
				console.log(res);
				this.faqItems = res;
			});
	}

	changeState() {
		this.panelOpenState = true;
	}

}
