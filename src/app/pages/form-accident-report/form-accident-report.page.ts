import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {StaticDataService} from '../../services/static-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-form-accident-report',
    templateUrl: './form-accident-report.page.html',
    styleUrls: ['./form-accident-report.page.scss'],
})
export class FormAccidentReportPage {
    isSubmitted = false;
    errorMessage = '';

    formGroup: FormGroup;
    locations = DemoDataService.locations;
    types = StaticDataService.types;
    classifications = StaticDataService.classifications;
    bodyParts = StaticDataService.bodyParts;
    currentBodyPartIndex = 0;
    selectedBodyParts = {};
    accidentImage;

    activityDetail;

    accidentAlertOptions: any = {
        header: 'Where the accident happened ?',
    };

    typeAlertOptions: any = {
        header: 'Select Type',
    };

    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
        public modalController: ModalController,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
    ) {
        this.formGroup = new FormGroup({
            dateTime: new FormControl(new Date().toISOString(), Validators.compose([
                Validators.required
            ])),
            locationId: new FormControl('', Validators.compose([])),
            locationName: new FormControl('', Validators.compose([])),
            reddorReportNeeded: new FormControl('', Validators.compose([Validators.required])),
            aboutEnvironment: new FormControl(false, Validators.compose([])),
            aboutEquipment: new FormControl(false, Validators.compose([])),
            aboutPeople: new FormControl(false, Validators.compose([])),
            about: new FormControl('', Validators.compose([])),
            type: new FormControl('', Validators.compose([Validators.required])),
            classification: new FormControl('', Validators.compose([Validators.required]))
        });

        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.activityDetail) {
                    this.activityDetail = JSON.parse(params.activityDetail);
                }
            }
        });
    }

    ionViewDidEnter() {
        document.addEventListener('backbutton', (e) => {
            this.onClose();
        }, false);
    }

    ionViewWillLeave(): void {
        document.removeEventListener('backbutton', () => {
            console.log('Back Button Listner removed');
        });
    }

    previousPart() {
        if (this.currentBodyPartIndex > 0) {
            this.currentBodyPartIndex--;
        }
    }

    nextPart() {
        if (this.currentBodyPartIndex < (this.bodyParts.length - 1)) {
            this.currentBodyPartIndex++;
        }
    }

    partSelectChange(item, event) {
        this.selectedBodyParts[item.id] = {
            ...item,
            checked: event.detail.checked,
        };
        const element = document.getElementById(item.id);
        if (event.detail.checked) {
            element.style.fill = '#E74731';
        } else {
            element.style.fill = item.path.fill;
        }
    }

    pathSelect(type) {
        let selectedItem;
        this.bodyParts.map((item) => {
            item.parts.map((subItem) => {
                if (subItem.id === type) {
                    selectedItem = subItem;
                    return;
                }
            });
            if (selectedItem) {
                return;
            }
        });
        if (selectedItem) {
            this.selectedBodyParts[type] = {
                ...selectedItem,
                checked: (this.selectedBodyParts[type] && this.selectedBodyParts[type].checked) ? false : true,
            };
            const element = document.getElementById(selectedItem.id);
            if (this.selectedBodyParts[type].checked) {
                element.style.fill = '#E74731';
            } else {
                element.style.fill = selectedItem.path.fill;
            }
        }
    }

    openImageAnnotation = (photo) => {
        this.sharedDataService.setAnnotationImage(photo);
        this.sharedDataService.onAnnotationImageDone = (image) => {
            this.accidentImage = image;
        };

        this.navCtrl.navigateForward(['/image-annotation']);
    };

    photoAdded(photo) {
        this.openImageAnnotation(photo);
    }

    photoRemoved() {
        this.accidentImage = null;
    }

    removeSelectedBodyPart(item) {
        this.selectedBodyParts[item.id] = {
            ...item,
            checked: false,
        };
        const element = document.getElementById(item.id);
        element.style.fill = item.path.fill;
    }

    async onClose() {
        const modal = await this.modalController.create({
            component: ExitConfirmationPage,
            swipeToClose: false,
            showBackdrop: false,
            backdropDismiss: false,
            animated: true,
            componentProps: {}
        });
        await modal.present();

        modal.onWillDismiss().then(({data}) => {
            if (data) {
                this.navCtrl.back();
            }
        });
    }

    isBodyPartSelected = () => {
        return Object.keys(this.selectedBodyParts).length > 0;
    };

    onContinue() {
        this.isSubmitted = true;
        this.errorMessage = '';

        if (this.formGroup.valid) {
            if (!this.formGroup.controls.locationId.value && !this.formGroup.controls.locationName.value) {
                this.errorMessage = 'Select location or enter manual location';
            } else if (!this.isBodyPartSelected()) {
                this.errorMessage = 'Fill required fields';
            } else {
                this.navCtrl.navigateForward(['/signoff-digitalink'], {
                    queryParams: {
                        type: EnumService.SignOffType.ACCIDENT_REPORT,
                        data: JSON.stringify(this.activityDetail),
                    }
                });
            }
        } else {
            this.errorMessage = 'Fill required fields';
        }
    }
}
