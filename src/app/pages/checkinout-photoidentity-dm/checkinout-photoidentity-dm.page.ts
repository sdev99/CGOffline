import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions} from '@ionic-native/camera-preview/ngx';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';


@Component({
    selector: 'app-checkinout-photoidentity-dm',
    templateUrl: './checkinout-photoidentity-dm.page.html',
    styleUrls: ['./checkinout-photoidentity-dm.page.scss'],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {
    @ViewChild('imagePreview', {read: ElementRef}) imagePreview: ElementRef;
    @ViewChild('headerView') headerView: any;
    @ViewChild('content', {read: ElementRef}) content: ElementRef;

    photoCaptured = '';
    authFor = 'Check In/Out by Name';
    nextPage;

    constructor(
        public navController: NavController,
        private cameraPreview: CameraPreview,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.authFor) {
                    this.authFor = res.authFor;
                }
                if (res.nextPage) {
                    this.nextPage = res.nextPage;
                }
            }
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.startCamera();
        }, 500);
    }

    startCamera = () => {
        const element = this.imagePreview.nativeElement;
        const header = this.headerView.el;
        const content = this.content.nativeElement;

        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const left = element.offsetLeft;
        const top = header.offsetHeight +  element.offsetTop;

        const cameraPreviewOpts: CameraPreviewOptions = {
            camera: 'front',
            width,
            height,
            x: left,
            y: top,
            // tapPhoto: true,
            // previewDrag: true,
            toBack: true,
            alpha: 1
        };
        this.cameraPreview.startCamera(cameraPreviewOpts).then(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            });

    };

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        if (this.authFor === 'Authentication') {
            this.navController.navigateForward('/form-cover-dm');
        } else {
            this.navController.navigateRoot('dashboard-dm');
        }
    }

    takePhoto() {
        if (this.photoCaptured) {
            this.photoCaptured = null;
            this.startCamera();
        } else {
            // picture options
            const pictureOpts: CameraPreviewPictureOptions = {
                quality: 85
            };

// take a picture
            this.cameraPreview.takeSnapshot(pictureOpts).then((imageData) => {
                this.photoCaptured = 'data:image/jpeg;base64,' + imageData;
                this.cameraPreview.stopCamera();
            }, (err) => {
                console.log(err);
                this.photoCaptured = './assets/images/demo-profile.svg';
            });

        }
    }
}
