import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {
    CameraPreview,
    CameraPreviewPictureOptions,
    CameraPreviewOptions,
    CameraPreviewDimensions
} from '@ionic-native/camera-preview/ngx';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {EnumService} from '../../services/enum.service';
import {ApiService} from '../../services/api.service';
import {UtilService} from '../../services/util.service';
import {Response} from '../../_models';
import {PhotoService} from '../../services/photo.service';
import {StaticDataService} from '../../services/static-data.service';


@Component({
    selector: 'app-checkinout-photoidentity-dm',
    templateUrl: './checkinout-photoidentity-dm.page.html',
    styleUrls: ['./checkinout-photoidentity-dm.page.scss'],
})
export class CheckinoutPhotoidentityDmPage implements OnInit {
    @ViewChild('imagePreview', {read: ElementRef}) imagePreview: ElementRef;
    @ViewChild('headerView') headerView: any;
    @ViewChild('content', {read: ElementRef}) content: ElementRef;

    authFor = 'Check In/Out by Name';
    photoCaptured: any;
    nextPage;

    errorMessage;

    viewLoaded = false;

    constructor(
        public navController: NavController,
        private cameraPreview: CameraPreview,
        public activatedRoute: ActivatedRoute,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        public utilService: UtilService,
        public photoService: PhotoService,
    ) {
        if (sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Auth || sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.LocationPhoto) {
            if (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST) {
                this.authFor = 'Check In/Out as Guest';
            } else {
                this.authFor = 'Check In/Out by Name';
            }
        } else if (sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Signoff) {
            this.authFor = 'Sign-Off';
        }
    }

    ngOnInit() {
    }

    ionViewDidEnter = () => {
        setTimeout(() => {
            this.viewLoaded = true;
            this.startCamera();
        }, 100);
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


    onBack() {
        this.navController.back();
    }

    takePhoto() {
        if (this.photoCaptured) {
            this.photoCaptured = null;
            this.startCamera();
        } else {
            const pictureOpts: CameraPreviewPictureOptions = {
                quality: StaticDataService.photoQuality,
                width: StaticDataService.photoMaxHeight,
                height: StaticDataService.photoMaxHeight,
            };


            this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
                this.photoCaptured = 'data:image/jpeg;base64,' + imageData;
                this.cameraPreview.stopCamera();
            }, (err) => {
                console.log(err);
                this.photoCaptured = './assets/images/ProfileNone.png';
            });
        }
    }

    onContinue() {
        const fileName = 'photo' + this.utilService.getCurrentTimeStamp() + '.jpeg';
        const mimeType = 'image/jpeg';
        this.utilService.dataUriToFile(this.photoCaptured, fileName, mimeType).then((file) => {
            if ((this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Auth || this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.LocationPhoto) &&
                this.sharedDataService.dedicatedModeProcessType === EnumService.DedicatedModeProcessTypes.CheckinOut) {
                this.checkInPhotoUpload(file, fileName, (photoName) => {
                    this.sharedDataService.dedicatedModeCapturedSelfieForCheckinProcess = photoName;
                    this.processToNextScreen(photoName);
                });
            } else {
                this.uploadInductionPhoto(file, fileName, (photoName) => {
                    this.processToNextScreen(photoName);
                });
            }
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
    uploadInductionPhoto = (file, fileName = '', callBack = null) => {
        this.utilService.presentLoadingWithOptions();
        this.apiService.inductionPhotoUpload(file, fileName).subscribe((res: Response) => {
            this.utilService.hideLoading();
            if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                UtilService.fireCallBack(callBack, res.Result);
            } else {
                this.errorMessage = res.Message;
            }
        }, (error) => {
            this.utilService.hideLoading();
            this.errorMessage = error.message ? error.message : error;
        });
    };


    checkInPhotoUpload = async (file, fileName = '', callBack = null) => {
        this.utilService.presentLoadingWithOptions();

        this.apiService.checkInPhotoUpload(file, fileName).subscribe((res: Response) => {
            this.utilService.hideLoading();
            if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                UtilService.fireCallBack(callBack, res.Result);
            } else {
                this.errorMessage = res.Message;
            }
        }, (error) => {
            this.utilService.hideLoading();
            this.errorMessage = error.message ? error.message : error;
        });
    };

    processToNextScreen = (photoName) => {
        if (this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Auth) {
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
        } else if (this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.LocationPhoto) {
            switch (this.sharedDataService.checkinoutDmAs) {
                case EnumService.CheckInType.AS_GUEST:
                    this.sharedDataService.checkInPostData.guestPhoto = photoName;
                    break;
                case EnumService.CheckInType.MY_NAME:
                    this.sharedDataService.checkInPostData.userPhoto = photoName;
                    break;
            }
            this.sharedDataService.processCheckinDetailsStepInduction(this.apiService, (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST));
        } else if (this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Signoff) {
            switch (this.sharedDataService.signOffFor) {
                case EnumService.SignOffType.INDUCTION:
                    this.sharedDataService.checkInPostData.userSignaturePhoto = photoName;
                    this.sharedDataService.processCheckinDetailsStepSubmit(this.apiService, (this.sharedDataService.checkinoutDmAs === EnumService.CheckInType.AS_GUEST));
                    break;

                case EnumService.SignOffType.DOCUMENT_DM:
                case EnumService.SignOffType.FORMS_DM:
                case EnumService.SignOffType.WORK_PERMIT_DM:
                    this.sharedDataService.signOffDetailsPostData.userSignaturePhoto = photoName;
                    this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                    break;

                default:
            }
        }
    };

    onClose() {
        if (this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Auth || this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.LocationPhoto) {
            this.navController.navigateRoot('dashboard-dm', {replaceUrl: true});
        } else if (this.sharedDataService.dedicatedModeCapturePhotoFor === EnumService.DedicatedModeCapturePhotoForType.Signoff) {
            if (this.sharedDataService.signOffFor === EnumService.SignOffType.INDUCTION) {
                this.navController.navigateRoot('/dashboard-dm', {replaceUrl: true});
            } else if (this.sharedDataService.signOffFor === EnumService.SignOffType.DOCUMENT_DM) {
                this.navController.navigateRoot('/documents-dm', {replaceUrl: true});
            } else if (this.sharedDataService.signOffFor === EnumService.SignOffType.FORMS_DM) {
                this.navController.navigateRoot('/forms-dm', {replaceUrl: true});
            } else if (this.sharedDataService.signOffFor === EnumService.SignOffType.WORK_PERMIT_DM) {
                this.navController.navigateRoot('/permits-dm', {replaceUrl: true});
            }
        }
    }
}
