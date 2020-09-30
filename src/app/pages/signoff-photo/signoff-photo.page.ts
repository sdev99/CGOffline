import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {PhotoService} from '../../services/photo.service';
import {ObservablesService} from '../../services/observables.service';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-signoff-photo',
    templateUrl: './signoff-photo.page.html',
    styleUrls: ['./signoff-photo.page.scss'],
})
export class SignoffPhotoPage implements OnInit {
    photo;

    type;
    data;

    constructor(
        public navCtrl: NavController,
        public photoService: PhotoService,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.type) {
                    this.type = params.type;
                }
                if (params.data) {
                    this.data = JSON.parse(params.data);
                }
            }
        });
    }

    ngOnInit() {
    }

    takePhoto() {
        this.photoService.takePhotoFromCamera((photo) => {
            this.photo = photo.dataUrl;
        });
    }

    continue() {
        switch (this.type) {
            case EnumService.SignOffType.HAV:
            case EnumService.SignOffType.ACCIDENT_REPORT:
            case EnumService.SignOffType.CUSTOM_FORM:
            case EnumService.SignOffType.RISK_ASSESSMENT:
                this.navCtrl.navigateForward(['/checkin-success'], {
                    queryParams: {
                        message: 'You Signed-Off Successfully'
                    }
                });

                break;

            case EnumService.SignOffType.INDUCTION:
                this.navCtrl.navigateForward(['/checkin-success'], {});
                this.observablesService.publishSomeData(EnumService.ObserverKeys.NEW_CHECKED_IN, this.data);
                break;

            default:
                this.navCtrl.navigateForward(['/checkin-fail'], {});
        }
    }
}
