import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-permit-issued-result-dm',
    templateUrl: './permit-issued-result-dm.page.html',
    styleUrls: ['./permit-issued-result-dm.page.scss'],
})
export class PermitIssuedResultDmPage implements OnInit {
    permitResult;

    constructor(
        public activatedRoute: ActivatedRoute,
        public navController: NavController,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.permitResult) {
                    this.permitResult = res.permitResult;
                }
            }
        });
    }

    ngOnInit() {
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onContinue() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

}
