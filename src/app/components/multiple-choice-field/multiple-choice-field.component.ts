import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup, FormGroupName} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
  selector: 'app-multiple-choice-field',
  templateUrl: './multiple-choice-field.component.html',
  styleUrls: ['./multiple-choice-field.component.scss'],
})
export class MultipleChoiceFieldComponent implements OnInit {
  UtilService = UtilService;

  @Input() inputName: string;
  @Input() form: FormGroup;
  @Input() list: Array<any>;

  constructor(
      private sharedDataService: SharedDataService,
  ) { }

  ngOnInit() {}

}
