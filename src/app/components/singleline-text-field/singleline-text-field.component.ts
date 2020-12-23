import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-singleline-text-field',
  templateUrl: './singleline-text-field.component.html',
  styleUrls: ['./singleline-text-field.component.scss'],
})
export class SinglelineTextFieldComponent implements OnInit {
  @Input() label: string;
  @Input() inputName: string;
  @Input() form: FormGroup;
  @Input() isError: boolean;

  constructor() { }

  ngOnInit() {}

}
