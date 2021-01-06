import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-ion-refresh-loader',
  templateUrl: './custom-ion-refresh-loader.component.html',
  styleUrls: ['./custom-ion-refresh-loader.component.scss'],
})
export class CustomIonRefreshLoaderComponent implements OnInit {
  @Input() isRefreshing: boolean;

  constructor() { }

  ngOnInit() {}

}
