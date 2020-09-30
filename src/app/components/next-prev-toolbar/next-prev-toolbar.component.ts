import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-next-prev-toolbar',
  templateUrl: './next-prev-toolbar.component.html',
  styleUrls: ['./next-prev-toolbar.component.scss'],
})
export class NextPrevToolbarComponent implements OnInit {
  @Input() totalCount: number;
  @Input() currentCount: number;
  @Input() isError: boolean;

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
