import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-single-choice-field',
    templateUrl: './single-choice-field.component.html',
    styleUrls: ['./single-choice-field.component.scss'],
})
export class SingleChoiceFieldComponent implements OnInit {
    UtilService = UtilService;

    @Input() inputName: string;
    @Input() form: FormGroup;
    @Input() list: Array<any>;

    constructor(
        private sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

}
