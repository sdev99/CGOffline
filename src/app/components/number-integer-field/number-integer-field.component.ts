import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-number-integer-field',
  templateUrl: './number-integer-field.component.html',
  styleUrls: ['./number-integer-field.component.scss'],
})
export class NumberIntegerFieldComponent implements OnInit {
  @Input() inputName: string;
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() isError: boolean;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {}

}
