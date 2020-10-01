import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-dashboard-header-dm',
    templateUrl: './dashboard-header-dm.component.html',
    styleUrls: ['./dashboard-header-dm.component.scss'],
})
export class DashboardHeaderDmComponent implements OnInit {

    @Input() title = '';
    @Output() infoClick = new EventEmitter<void>();

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public observablesService: ObservablesService,
    ) {

    }

    ngOnInit() {

    }


}
