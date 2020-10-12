import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';
import {ExitConfirmationPage} from '../../modals/exit-confirmation/exit-confirmation.page';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {EnumService} from '../../services/enum.service';
import {ObservablesService} from '../../services/observables.service';
import {Subscription} from 'rxjs';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-form-hav',
    templateUrl: './form-hav.page.html',
    styleUrls: ['./form-hav.page.scss'],
})
export class FormHavPage {
    isSubmitted = false;
    formGroup: FormGroup;
    errorMessage = '';
    activityDetail;

    toolManufacturers = DemoDataService.toolManufacturers.clone();
    toolTypes = DemoDataService.toolTypes.clone();
    toolModels = DemoDataService.toolModels.clone();

    constructor(
        public navCtrl: NavController,
        public modalController: ModalController,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
        public sharedDataService: SharedDataService,
    ) {
        this.formGroup = new FormGroup({
            dateOfUsage: new FormControl(new Date().toISOString(), Validators.compose([
                Validators.required
            ])),
            toolType: new FormControl('', Validators.compose([Validators.required])),
            toolManufacturer: new FormControl('', Validators.compose([Validators.required])),
            toolModel: new FormControl('', Validators.compose([Validators.required])),
            plannedTime: new FormControl('', Validators.compose([Validators.required])),
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

    }

    ionViewWillLeave(): void {

    }

    isError(field) {
        return (this.isSubmitted && !this.formGroup.controls[field].valid);
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

    onSubmit() {
        this.isSubmitted = true;
        this.errorMessage = '';
        const {dateOfUsage, type, manufacturer, model, plannedTime} = this.formGroup.controls;
        if (this.formGroup.valid) {
            this.navCtrl.navigateForward(['/signoff-digitalink'], {
                queryParams: {
                    type: EnumService.SignOffType.HAV,
                    data: JSON.stringify(this.activityDetail),
                }
            });
        } else if (!dateOfUsage.value && !type.value && !model.value && !manufacturer.value && !plannedTime.value) {
            this.errorMessage = 'All Required fields missings.';
        } else {
            let missingFieldCount = 0;
            Object.keys(this.formGroup.controls).map((controlName) => {
                const control = this.formGroup.controls[controlName];
                if (!control.valid) {
                    missingFieldCount++;
                }
            });
            this.errorMessage = missingFieldCount + ' required field' + (missingFieldCount > 1 ? 's' : '') + ' missing';
        }
    }

}
