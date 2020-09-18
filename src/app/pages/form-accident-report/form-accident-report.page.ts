import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DemoDataService} from '../../services/demo-data.service';
import {StaticDataService} from '../../services/static-data.service';

@Component({
    selector: 'app-form-accident-report',
    templateUrl: './form-accident-report.page.html',
    styleUrls: ['./form-accident-report.page.scss'],
})
export class FormAccidentReportPage implements OnInit {
    isSubmitted = false;
    formGroup: FormGroup;
    locations = DemoDataService.locations;
    types = StaticDataService.types;
    classifications = StaticDataService.classifications;
    bodyParts = StaticDataService.bodyParts;
    currentBodyPartIndex = 0;
    selectedBodyParts = {};
    accidentImage;

    accidentAlertOptions: any = {
        header: 'Where the accident happened ?',
    };

    typeAlertOptions: any = {
        header: 'Select Type',
    };


    constructor(
        public navCtrl: NavController,
    ) {
        this.formGroup = new FormGroup({
            dateTime: new FormControl(new Date().toISOString(), Validators.compose([
                Validators.required
            ])),
            locationId: new FormControl('', Validators.compose([])),
            locationName: new FormControl('', Validators.compose([])),
            reddorReportNeeded: new FormControl('', Validators.compose([])),
            aboutEnvironment: new FormControl(false, Validators.compose([])),
            aboutEquipment: new FormControl(false, Validators.compose([])),
            aboutPeople: new FormControl(false, Validators.compose([])),
            about: new FormControl('', Validators.compose([])),
            type: new FormControl('', Validators.compose([])),
            classification: new FormControl('', Validators.compose([]))
        });
    }

    ngOnInit() {
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

    photoAdded(photo) {
        this.accidentImage = photo;
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

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/signoff-digitalink']);
    }
}
