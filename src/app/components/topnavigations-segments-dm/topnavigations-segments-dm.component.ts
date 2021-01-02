import {Component, EventEmitter, Input, OnInit, Output, NgZone} from '@angular/core';

@Component({
    selector: 'app-topnavigations-segments-dm',
    templateUrl: './topnavigations-segments-dm.component.html',
    styleUrls: ['./topnavigations-segments-dm.component.scss'],
})
export class TopnavigationsSegmentsDmComponent implements OnInit {
    @Input() active: any;
    @Input() options: any;
    @Input() search: any;
    @Output() changed = new EventEmitter<any>();
    @Output() searching = new EventEmitter<any>();
    @Output() searchbarShowHide = new EventEmitter<any>();
    searchBarShow = false;

    constructor(
        public ngZone: NgZone
    ) {
    }

    ngOnInit() {
    }

    onChanged(event) {
        console.log('event.detail.value' + event.detail.value);
        this.changed.emit(event.detail.value);
    }

    showSearchBar() {
        this.ngZone.run(() => {
            this.searchBarShow = !this.searchBarShow;
            this.searchbarShowHide.emit(this.searchBarShow);
        });
    }
}
