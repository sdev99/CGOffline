import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
	selector: 'app-section-title',
	templateUrl: './section-title.component.html',
	styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements OnInit {
	@Input() title: string;
	@Input() showRemoveIcon: boolean;
	@Output() onRemove = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {}
}
