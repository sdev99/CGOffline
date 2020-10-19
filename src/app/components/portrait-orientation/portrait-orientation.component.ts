import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {ModalController, NavController} from '@ionic/angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
    selector: 'app-portrait-orientation',
    templateUrl: './portrait-orientation.component.html',
    styleUrls: ['./portrait-orientation.component.scss'],
})
export class PortraitOrientationComponent implements OnInit {
    @Output() close = new EventEmitter<void>();

    constructor(
        public sharedDataService: SharedDataService,
        public navController: NavController,
        private screenOrientation: ScreenOrientation
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        if (this.screenOrientation.type.includes('portrait')) {
            this.close.emit();
        } else {
            this.navController.back();
        }
    }
}
