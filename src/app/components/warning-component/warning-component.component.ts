import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-component',
  templateUrl: './warning-component.component.html',
  styleUrls: ['./warning-component.component.scss'],
})
export class WarningComponentComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {}

}
