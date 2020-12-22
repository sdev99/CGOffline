import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import * as moment from 'moment/moment';

@Component({
    selector: 'app-time-field',
    templateUrl: './time-field.component.html',
    styleUrls: ['./time-field.component.scss'],
})
export class TimeFieldComponent implements OnInit {
    @Input() inputName: string;
    @Input() form: FormGroup;
    @Input() label: string;
    @Input() isError: boolean;
    @Input() placeholder: string;
    // @Input() timePeriod: string;
    // @Output() timePeriodChange = new EventEmitter<any>();
    timePeriod: string;

    constructor() {
    }

    ngOnInit() {
    }

    timePeriodChange(period) {
        const control = this.form.controls[this.inputName];
        const dateTime = moment(control.value);
        const currentPeriod = dateTime.format('a');
        console.log(currentPeriod);

        if (period.toLowerCase() !== currentPeriod.toLowerCase()) {
            if (period.toLowerCase() === 'am') {
                dateTime.subtract(12, 'hours');
            } else if (period.toLowerCase() === 'pm') {
                dateTime.add(12, 'hours');
            }
        }
        control.setValue(dateTime.toISOString());
        this.timePeriod = period;
    }

}
