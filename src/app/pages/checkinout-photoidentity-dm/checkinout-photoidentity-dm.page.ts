import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions} from '@ionic-native/camera-preview/ngx';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {Response} from '../../_models';
import {PhotoService} from '../../services/photo.service';


@Component({
    selector: 'app-checkinout-photoidentity-dm',
    templateUrl: './checkinout-photoidentity-dm.page.html',
    styleUrls: ['./checkinout-photoidentity-dm.page.scss'],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {
    @ViewChild('imagePreview', {read: ElementRef}) imagePreview: ElementRef;
    @ViewChild('headerView') headerView: any;
    @ViewChild('content', {read: ElementRef}) content: ElementRef;

    photoCaptured: any;
    authFor = 'Check In/Out by Name';
    nextPage;

    errorMessage;

    constructor(
        public navController: NavController,
        private cameraPreview: CameraPreview,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        public utilService: UtilService,
        public photoService: PhotoService,
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

    }

    ionViewDidEnter = () => {
        setTimeout(() => {
            this.startCamera();
        }, 500);
    };

    ionViewWillLeave = () => {
        this.cameraPreview.stopCamera();
    };

    ionViewWillEnter() {
        const element = this.imagePreview.nativeElement;
        element.style.width = element.offsetHeight + 'px';
    }

    startCamera = () => {
        if (UtilService.isLocalHost()) {
            this.photoService.takePhotoFromCamera((photo) => {
                this.photoCaptured = photo.dataUrl;
            });
        } else {
            const element = this.imagePreview.nativeElement;
            const header = this.headerView.el;
            const content = this.content.nativeElement;

            const width = element.offsetWidth;
            const height = element.offsetHeight;
            const left = element.offsetLeft;
            const top = header.offsetHeight + element.offsetTop;

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
        }
    };

    onClose() {
        this.navController.navigateRoot('dashboard-dm', {replaceUrl: true});
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        const fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
        const mimeType = 'image/jpeg';
        this.utilService.dataUriToFile(this.photoCaptured, fileName, mimeType)
            .then((file) => {
                this.checkInPhotoUpload(file, fileName, (photoName) => {
                    this.processToNextScreen(photoName);
                });
            });

        // if (this.nextPage) {
        //     this.navController.navigateForward(this.nextPage);
        // } else if (this.authFor === 'Authentication') {
        //     this.navController.navigateForward('/form-cover-dm');
        // } else {
        //     this.navController.navigateRoot('dashboard-dm');
        // }
    }

    /**
     * Upload photo for  signoff
     */
    checkInPhotoUpload = async (file, fileName = '', callBack = null) => {
        const loading = await this.utilService.startLoadingWithOptions();

        this.apiService.inductionPhotoUpload(file, fileName).subscribe((res: Response) => {
            this.utilService.hideLoadingFor(loading);
            if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                UtilService.fireCallBack(callBack, res.Result);
            } else {
                this.errorMessage = res.Message;
            }
        }, (error) => {
            this.utilService.hideLoadingFor(loading);
            this.errorMessage = error.message ? error.message : error;
        });
    };

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
                this.photoCaptured = './assets/images/ProfileNone.png';
            });

        }
    }

    processToNextScreen = (photoName) => {
        switch (this.sharedDataService.dedicatedModeProcessType) {
            case EnumService.DedicatedModeProcessTypes.CheckinOut: {
                switch (this.sharedDataService.checkinoutDmAs) {
                    case EnumService.CheckInType.AS_GUEST:
                        this.sharedDataService.dedicatedModeGuestDetail.guestPhoto = photoName;
                        this.sharedDataService.getCheckinDetailsGuest(this.apiService, true);
                        break;
                    case EnumService.CheckInType.MY_NAME:
                        this.sharedDataService.getCheckinDetailsForDedicatedMode(this.sharedDataService.dedicatedModeUserDetail.userId, this.apiService, photoName);
                        break;
                }
                break;
            }
            case EnumService.DedicatedModeProcessTypes.Document:
                this.sharedDataService.dedicatedModeDocumentSignOffProcess(photoName);
                break;
            case EnumService.DedicatedModeProcessTypes.Form:
                this.sharedDataService.dedicatedModeFormSignOffProcess(photoName);
                break;
            case EnumService.DedicatedModeProcessTypes.WorkPermit:
                this.sharedDataService.dedicatedModeWorkPermitSignOffProcess(photoName);
                break;
            default:
        }
    };
}
