import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-number-decimal-field',
  templateUrl: './number-decimal-field.component.html',
  styleUrls: ['./number-decimal-field.component.scss'],
})
export class NumberDecimalFieldComponent implements OnInit {
  @Input() inputName: string;
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() isError: boolean;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {}

}
