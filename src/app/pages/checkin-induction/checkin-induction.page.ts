import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-checkin-induction',
    templateUrl: './checkin-induction.page.html',
    styleUrls: ['./checkin-induction.page.scss'],
})
export class CheckinInductionPage implements OnInit {
    inductionFiles = DemoDataService.inductionFiles.clone();
    locationDetail;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
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
        this.navCtrl.navigateForward(['/checkin-induction-video-file'], {
            queryParams: {
                locationDetail: JSON.stringify(this.locationDetail)
            }
        });
    }
}
