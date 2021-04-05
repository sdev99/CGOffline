import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RAcontrolMeasureTemplateItem } from 'src/app/_models/RAcontrolMeasureTemplateItem';
import { RAtaskTemplateItem } from 'src/app/_models/RAtaskTemplateItem';

@Component({
	selector: 'app-template-dropdown',
	templateUrl: './template-dropdown.component.html',
	styleUrls: ['./template-dropdown.component.scss'],
})
export class TemplateDropdownComponent implements OnInit {
	@Input() list: Array<RAtaskTemplateItem | RAcontrolMeasureTemplateItem>;
	@Input() titleKey: string;

	@ViewChild('searchBar') searchBar: any;
	searchText = '';

	constructor(private popoverController: PopoverController) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	if (this.searchBar) {
		// 		if (this.searchBar.setFocus) {
		// 			this.searchBar.setFocus();
		// 		} else {
		// 			this.searchBar.nativeElement.setFocus();
		// 		}
		// 	}
		// }, 1000);
	}

	onDismiss = (item) => {
		this.popoverController.dismiss(item);
	};
}
