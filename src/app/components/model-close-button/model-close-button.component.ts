import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-model-close-button',
  templateUrl: './model-close-button.component.html',
  styleUrls: ['./model-close-button.component.scss'],
})
export class ModelCloseButtonComponent implements OnInit {
  @Output() closeModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

}
