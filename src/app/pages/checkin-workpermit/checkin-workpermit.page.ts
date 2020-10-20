import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-checkin-workpermit',
    templateUrl: './checkin-workpermit.page.html',
    styleUrls: ['./checkin-workpermit.page.scss'],
})
export class CheckinWorkpermitPage implements OnInit {

    list: any = DemoDataService.currentCheckinWorkPermits.clone();

    isCheckedIn = true;

    constructor(
        public navController: NavController,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
    }

    fileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';

        }
        return './assets/icon/' + iconName + '.svg';
    }

    back() {
        this.navController.back();
    }

    onSelect(item) {
        if (this.sharedDataService.dedicatedMode) {
            this.sharedDataService.viewFormDetail = item;
            this.sharedDataService.signOffFor = EnumService.SignOffType.WORK_PERMIT;
            this.navController.navigateForward('form-open-auth-dm', {
                queryParams: item
            });
        } else {
            this.navController.navigateForward('form-cover', {
                queryParams: item
            });
        }
    }
}
