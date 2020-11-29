import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {CheckinDetail} from '../../_models/checkinDetail';
import {LocationItem} from '../../_models/locationItem';
import {EnumService} from '../../services/enum.service';
import {UtilService} from '../../services/util.service';

@Component({
    selector: 'app-checkin-induction',
    templateUrl: './checkin-induction.page.html',
    styleUrls: ['./checkin-induction.page.scss'],
})
export class CheckinInductionPage implements OnInit {
    inductionFiles = DemoDataService.inductionFiles.clone();
    locationDetail;
    checkinDetail: CheckinDetail;
    checkInOutForLocation: LocationItem;


    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
    ) {
        this.checkInOutForLocation = this.sharedDataService.checkInOutForLocation;
        this.checkinDetail = this.sharedDataService.checkInDetail;

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.locationDetail) {
                    this.locationDetail = JSON.parse(params.locationDetail);
                }
            }
        });
    }

    ngOnInit() {
    }

    fileType(type) {
        let fileType = '';
        switch (type) {
            case 'video':
                fileType = 'Video File';
                break;
            case 'image':
                fileType = 'Image File';
                break;
            case 'richtext':
                fileType = 'Rich Text';
                break;
            case 'form':
                fileType = 'Form';
                break;
            case 'va':
                fileType = 'Visitor Agreement';
                break;
            default :
                fileType = '';
                break;
        }
        return fileType;
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        if (this.checkinDetail) {
            this.sharedDataService.inductionNavigationProcess(-1);
        }
    }
}
