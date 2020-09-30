import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {IonSearchbar, ModalController} from '@ionic/angular';

@Component({
    selector: 'app-search-location',
    templateUrl: './search-location.page.html',
    styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {
    @Input() list: any;

    @ViewChild(IonSearchbar) search: IonSearchbar;
    searchText = '';

    constructor(
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.search.setFocus();
        }, 500);
    }

    ionViewDidLoad() {
    }

    onDismiss = (item) => {
        this.modalController.dismiss(item);
    };

}
