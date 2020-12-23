import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, NavController} from '@ionic/angular';
import {fabric} from 'fabric';
import {ActivatedRoute} from '@angular/router';
import {ObservablesService} from '../../services/observables.service';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {UtilService} from '../../services/util.service';
import {ApiService} from '../../services/api.service';
import {Response, User} from '../../_models';
import {AccountService} from '../../services/account.service';
import {FilehandlerService} from '../../services/filehandler.service';

@Component({
    selector: 'app-signoff-digitalink',
    templateUrl: './signoff-digitalink.page.html',
    styleUrls: ['./signoff-digitalink.page.scss'],
})
export class SignoffDigitalinkPage implements OnInit {
    errorMessage;

    user: User;
    isConfirm = false;
    canvasRef;

    pageTitle = 'Sign-Off';
    title = 'You are signing-off';
    subTitle = 'Digital Ink Signature';
    aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
    showDigitalInk = false;

    type;
    data;

    constructor(
        public navCtrl: NavController,
        public utilService: UtilService,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
        public apiService: ApiService,
        private routerOutlet: IonRouterOutlet,
        private accountService: AccountService,
    ) {
        this.user = this.accountService.userValue;

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.type) {
                    this.type = params.type;
                }
                if (params.data) {
                    this.data = JSON.parse(params.data);
                }
            }
        });

        if (sharedDataService.signOffFor) {
            this.type = sharedDataService.signOffFor;
        }
    }


    ionViewDidEnter = () => {
        this.routerOutlet.swipeGesture = false;
    };

    ionViewWillLeave = () => {
        this.routerOutlet.swipeGesture = true;
    };

    ngOnInit() {
        switch (this.type) {
            case EnumService.SignOffType.INDUCTION:
                this.aggrementTitle = 'I confirm that I\'ve read the induction.';
                this.subTitle = 'Induction';
                if (this.sharedDataService.checkInDetail && this.sharedDataService.checkInDetail.checkInInduction.isSignatureSignOff) {
                    this.showDigitalInk = true;
                    this.initialiseDrawing();
                }
                break;


            case EnumService.SignOffType.DOCUMENT_ACTIVITY:
            case EnumService.SignOffType.DOCUMENT_CURRENT_CHECKIN:
                this.aggrementTitle = 'I confirm that I\'ve read the above document.';
                if (this.sharedDataService.signOffDocumentDetail) {
                    this.subTitle = this.sharedDataService.signOffDocumentDetail?.documentTitle;
                    if (this.sharedDataService.signOffDocumentDetail && this.sharedDataService.signOffDocumentDetail?.isSignatureSignOff) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                break;

            case EnumService.SignOffType.FORM_ACTIVITY:
            case EnumService.SignOffType.FORM_CURRENT_CHECKIN:
            case EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
                this.aggrementTitle = 'I confirm that I\'ve filled the above form.';
                if (this.sharedDataService.signOffFormDetail) {
                    this.subTitle = this.sharedDataService.signOffFormDetail.formData.formTitle;
                    if (this.sharedDataService.signOffFormDetail && this.sharedDataService.signOffFormDetail.formData.isSignatureSignOff) {
                        this.showDigitalInk = true;
                        this.initialiseDrawing();
                    }
                }
                break;

            case EnumService.SignOffType.DOCUMENT_DM:
                this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
                this.pageTitle = 'Sign-Off';
                this.title = 'Sign-Off';
                this.subTitle = '';
                this.showDigitalInk = true;
                this.initialiseDrawing();
                break;

            case EnumService.SignOffType.WORK_PERMIT:
                this.aggrementTitle = 'I herby confirm that I\'ve read and understood everything I viewed.';
                this.pageTitle = 'Sign-Off';
                this.title = 'Sign-Off';
                this.subTitle = '';
                this.showDigitalInk = true;
                this.initialiseDrawing();
                break;

            default:
                this.showDigitalInk = true;
                this.initialiseDrawing();
        }
    }

    initialiseDrawing() {
        setTimeout(() => {
            this.canvasRef = new fabric.Canvas('digital-signature');
            if (this.sharedDataService.dedicatedMode) {
                const ele = document.getElementById('digital-signature');
                this.canvasRef.setDimensions({width: ele.offsetWidth, height: ele.offsetHeight});
            } else {
                this.canvasRef.setDimensions({width: window.innerWidth - 46, height: (window.innerHeight * 28 / 100)});
            }
            this.canvasRef.on('selection:created', () => {
            });
            this.canvasRef.on('selection:cleared', () => {
            });
            this.canvasRef.freeDrawingBrush.color = '#171538';
            this.canvasRef.freeDrawingBrush.width = 4;
            this.canvasRef.isDrawingMode = true;
        }, 200);
    }

    isDigitalSignEmpty = () => {
        if (this.canvasRef) {
            return this.canvasRef.isEmpty();
        }
        return true;
    };

    onClose() {
        this.navCtrl.back();
    }

    urltoFile(url, filename, mimeType) {
        mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
        return (fetch(url)
                .then((res) => {
                    return res.arrayBuffer();
                })
                .then((buf) => {
                    return new File([buf], filename, {type: mimeType});
                })
        );
    }

    async onContinue() {
        this.errorMessage = '';

        if (this.isConfirm) {
            let downlaodImg;
            if (this.showDigitalInk) {
                this.canvasRef.discardActiveObject();
                downlaodImg = this.canvasRef.toDataURL('jpeg');

                const fileName = 'signature' + this.utilService.getCurrentTimeStamp() + '.jpeg';
                const mimeType = 'image/jpeg';
                const loading = await this.utilService.startLoadingWithOptions();
                this.utilService.dataUriToFile(downlaodImg, fileName, mimeType).then((file) => {
                    this.apiService.inductionSignatureUpload(file, fileName).subscribe((res: Response) => {
                        this.utilService.hideLoadingFor(loading);
                        if (res.StatusCode === EnumService.ApiResponseCode.RequestSuccessful) {
                            this.nextStep(res.Result);
                        } else {
                            this.errorMessage = res.Message;
                        }
                    }, (error) => {
                        this.utilService.hideLoadingFor(loading);
                        this.errorMessage = error.message ? error.message : error;
                    });
                }, error => {
                    this.utilService.hideLoadingFor(loading);
                });
            } else {
                this.nextStep();
            }
        }
    }

    nextStep(signatureFileName = '') {
        switch (this.type) {
            case EnumService.SignOffType.INDUCTION:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.checkInPostData.digitalInkSignature = signatureFileName;
                }

                if (this.sharedDataService.checkInDetail && this.sharedDataService.checkInDetail?.checkInInduction?.isPhotoSignOff) {
                    this.navCtrl.navigateForward(['/signoff-photo']);
                } else {
                    this.sharedDataService.submitInductionCheckInData(this.apiService);
                }
                break;

            case EnumService.SignOffType.DOCUMENT_ACTIVITY:
            case EnumService.SignOffType.DOCUMENT_CURRENT_CHECKIN:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.signOffDetailsPostData.digitalInkSignature = signatureFileName;
                }

                if (this.sharedDataService.signOffDocumentDetail && this.sharedDataService.signOffDocumentDetail?.isPhotoSignOff) {
                    this.navCtrl.navigateForward(['/signoff-photo']);
                } else {
                    this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                }
                break;

            case EnumService.SignOffType.FORM_ACTIVITY:
            case EnumService.SignOffType.FORM_CURRENT_CHECKIN:
            case EnumService.SignOffType.WORKPERMIT_FORM_CURRENT_CHECKIN:
                if (this.showDigitalInk && signatureFileName) {
                    this.sharedDataService.signOffDetailsPostData.digitalInkSignature = signatureFileName;
                }

                if (this.sharedDataService.signOffFormDetail && this.sharedDataService.signOffFormDetail?.formData?.isPhotoSignOff) {
                    this.navCtrl.navigateForward(['/signoff-photo']);
                } else {
                    this.sharedDataService.submitPersonalModeSignoffData(this.apiService);
                }
                break;

            default:
            // if (this.sharedDataService.dedicatedMode) {
            //     if (UtilService.randomBoolean()) {
            //         this.navCtrl.navigateForward(['/checkinout-success-dm'], {
            //             queryParams: {
            //                 message: 'You have now checked-in',
            //                 nextPage: 'dashboard-dm'
            //             }
            //         });
            //     } else {
            //         this.navCtrl.navigateForward(['/checkinout-fail-dm'], {
            //             queryParams: {
            //                 failTitle: 'No Qualification',
            //                 failSubTitle: 'Check in Not Allowed',
            //                 failMessage: 'This check-in requires to have certain \n' +
            //                     'qualifications which you do not have.',
            //                 nextPage: 'dashboard-dm'
            //             }
            //         });
            //     }
            // }
        }
    }
}
