import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-document-openchoice-dm',
    templateUrl: './document-openchoice-dm.page.html',
    styleUrls: ['./document-openchoice-dm.page.scss'],
})
export class DocumentOpenchoiceDmPage implements OnInit {
    queryParam;

    constructor(
        private navController: NavController,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                this.queryParam = res;
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.back();
    }

    viewAndSignOff() {
        this.sharedDataService.signOffFor = EnumService.SignOffType.DOCUMENT_DM;
        this.navController.navigateForward('/signoff-digitalink',{

        });
    }

    viewOnly() {

    }

}
