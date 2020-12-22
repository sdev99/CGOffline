import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.scss'],
})
export class DateTimeFieldComponent implements OnInit {
  @Input() label: string;
  @Input() inputName: string;
  @Input() form: FormGroup;
  @Input() isError: boolean;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {}

}
