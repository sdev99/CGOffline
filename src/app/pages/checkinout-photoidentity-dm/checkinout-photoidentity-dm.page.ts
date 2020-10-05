import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions} from '@ionic-native/camera-preview/ngx';


@Component({
    selector: 'app-checkinout-photoidentity-dm',
    templateUrl: './checkinout-photoidentity-dm.page.html',
    styleUrls: ['./checkinout-photoidentity-dm.page.scss'],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {

    photoCaptured = '';
    @ViewChild('imagePreview') imagePreview: ElementRef;

    constructor(
        public navController: NavController,
        private cameraPreview: CameraPreview
    ) {
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
        const top = element.offsetTop;

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
        this.navController.navigateRoot('dashboard-dm');
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
            }, (err) => {
                console.log(err);
            });


            setTimeout(() => {
                // take a snap shot
                this.cameraPreview.takeSnapshot(pictureOpts).then((imageData) => {
                    this.photoCaptured = 'data:image/jpeg;base64,' + imageData;
                    this.cameraPreview.stopCamera();
                }, (err) => {
                    console.log(err);
                    this.photoCaptured = 'assets/img/test.jpg';
                });

            }, 5000);

        }
    }
}
