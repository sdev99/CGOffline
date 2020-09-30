import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ActivatedRoute} from '@angular/router';
import {FilehandlerService} from '../../services/filehandler.service';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.page.html',
    styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

    activityDetail = DemoDataService.activityList[0];

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        private filehandlerService: FilehandlerService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activity) {
                    this.activityDetail = JSON.parse(params.activity);
                }
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    openFile() {
        this.filehandlerService.openFile();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/form-cover'], {
            queryParams: {
                activity: JSON.stringify(this.activityDetail),
            }
        });
    }

}
