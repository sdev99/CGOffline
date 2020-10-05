import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.scss'],
})
export class DashboardButtonComponent implements OnInit {
  @Input() title = '';
  @Input() icon = '';
  @Output() click = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
