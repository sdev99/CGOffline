import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions} from '@ionic-native/camera-preview/ngx';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-checkinout-photoidentity-dm',
    templateUrl: './checkinout-photoidentity-dm.page.html',
    styleUrls: ['./checkinout-photoidentity-dm.page.scss'],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {
    @ViewChild('imagePreview') imagePreview: ElementRef;
    photoCaptured = '';
    authFor = 'Check In/Out by Name';

    constructor(
        public navController: NavController,
        private cameraPreview: CameraPreview,
        public activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.name) {
                    this.authFor = res.authFor;
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
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const left = element.offsetLeft;
        const top = element.parentElement.offsetTop + element.offsetTop;

        const cameraPreviewOpts: CameraPreviewOptions = {
            camera: 'front',
            width,
            height,
            x: left,
            y: top,
            tapPhoto: true,
            previewDrag: true,
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
            this.navController.navigateForward('/form-cover');
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
                height: 300,
                width: 300,
                quality: 85
            };

// take a picture
            this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
                this.photoCaptured = 'data:image/jpeg;base64,' + imageData;
                this.cameraPreview.stopCamera();
            }, (err) => {
                console.log(err);
                this.photoCaptured = './assets/images/demo-profile.svg';
            });

        }
    }
}
