import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service'

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html'
})
export class UserGuideComponent implements OnInit {

	todayDate = new Date();
	year = this.todayDate.getFullYear();

	panelOpenState = false;
	userGuideItems: any;

	constructor(private contentService: ContentService) {}

	ngOnInit() {
		this.contentService.getUserGuide()
			.subscribe((res: any) => {
				console.log(res);
				this.userGuideItems = res;
			});
	}

	changeState() {
		this.panelOpenState = true;
	}

}
