import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-identityconfirm-dm',
    templateUrl: './checkinout-identityconfirm-dm.page.html',
    styleUrls: ['./checkinout-identityconfirm-dm.page.scss'],
})
export class CheckinoutIdentityconfirmDmPage implements OnInit {
    @ViewChild('imagePreview', {read: ElementRef}) imagePreview: ElementRef;

    photoCaptured = './assets/images/ProfileNone.png';
    userName;
    authFor = 'Check In/Out by Name';

    constructor(
        public navController: NavController,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.name) {
                    this.userName = res.name;
                    this.authFor = res.authFor;
                }
            }
        });
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        const element = this.imagePreview.nativeElement;
        element.style.width = element.offsetHeight + 'px';
    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    nextPage = () => {
        if (this.authFor === 'Authentication') {
            return 'form-cover-dm';
        }
        return 'checkin-induction';
    };

    onContinue() {
        this.navController.navigateForward(this.nextPage());
    }

    thisisNotMe() {
        this.navController.navigateForward('checkinout-photoidentity-dm', {
            queryParams: {
                authFor: this.authFor,
                nextPage: this.nextPage()
            }
        });
    }

}
