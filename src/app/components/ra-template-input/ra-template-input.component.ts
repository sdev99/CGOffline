import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-ra-template-input',
	templateUrl: './ra-template-input.component.html',
	styleUrls: ['./ra-template-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RaTemplateInputComponent,
			multi: true,
		},
	],
})
export class RaTemplateInputComponent<T> implements ControlValueAccessor {
	@ViewChild('myInput') myInput: ElementRef;

	private innerValue: T;
	@Input() isInvalid: boolean;
	@Input() label: string;
	@Input() labelIcon: string;
	@Output() openTemplate = new EventEmitter<any>();
	@Output() onRemove = new EventEmitter<any>();

	@Input() templateEnable: boolean;
	@Input() inputEnable: boolean;

	private changed = new Array<(value: T) => void>();
	private touched = new Array<() => void>();

	constructor() {}

	resize() {
		this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
	}

	get value(): T {
		return this.innerValue;
	}

	set value(value: T) {
		if (this.innerValue !== value) {
			this.innerValue = value;
			this.changed.forEach((f) => f(value));
		}
	}

	touch() {
		this.touched.forEach((f) => f());
	}

	writeValue(value: T) {
		this.innerValue = value;
	}

	registerOnChange(fn: (value: T) => void) {
		this.changed.push(fn);
	}

	registerOnTouched(fn: () => void) {
		this.touched.push(fn);
	}
}
