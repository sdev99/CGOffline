import {Injectable} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {EnumService} from './enum.service';
import {SharedDataService} from './shared-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from './validator.service';

declare global {
    interface Array<T> {
        clone(): Array<T>;
    }
}

Array.prototype.clone = function() {
    return JSON.parse(JSON.stringify(this));
};

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    loading: HTMLIonLoadingElement = null;
    loadingStarting = false;
    loadingStopping = false;

    static InductionContentTypeScreenIdentify(contentType) {
        let routeName = '';
        switch (contentType) {
            case EnumService.InductionContentTypes.VIDEO_FILE:
                routeName = 'checkin-induction-video-file';
                break;
            case EnumService.InductionContentTypes.IMAGE_FILE:
                routeName = 'checkin-induction-image-file';
                break;
            case EnumService.InductionContentTypes.RICH_TEXT:
                routeName = 'checkin-induction-rich-text';
                break;
            case EnumService.InductionContentTypes.FORM:
                // routeName = 'checkin-induction-form';
                routeName = 'form-cover';
                break;
            case EnumService.InductionContentTypes.VISITOR_AGREEMENT:
                routeName = 'checkin-induction-va';
                break;
        }
        return routeName;
    }

    static FileIcon(type) {
        let iconName = '';
        switch (type) {
            case 'document':
                iconName = 'attachment1';
                break;
            case 'pdf':
                iconName = 'attachment2';
                break;
            case 'form':
                iconName = 'attachment3';
                break;
            case 'folder':
                iconName = 'attachment4';
                break;
            case 'image':
                iconName = 'attachment5';
                break;
            case 'video':
                iconName = 'attachment6';
                break;
            default:
                iconName = 'attachment1';

        }
        return './assets/icon/' + iconName + '.svg';
    }


    static findObj(list, key, value, defaultIndex = 0) {
        if (list && list.length > 0) {
            let resultData = list[defaultIndex];
            list.map((data) => {
                if (data[key] === value) {
                    resultData = data;
                    return;
                }
            });
            return resultData;
        }
        return null;
    }

    static randomBoolean() {
        return Math.round(Math.random());
    }

    /**
     *  Dynamic FormControlName with section and question id
     */
    static FCName(questionId) {
        return 'FormControl_' + questionId;
    }

    /**
     *  Dynamic Html Element id
     */
    static HtmlElementId(sectionId, questionId) {
        return 'Question_' + sectionId + '_' + questionId;
    }

    static fixTimeString(value) {
        return value.replace('T', ' ');
    }

    static getQueryStringValue = (url, key) => {
        return decodeURIComponent(url.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
    };

    static fireCallBack(callBack = null, data = null) {
        if (callBack) {
            callBack(data);
        }
    }

    constructor(
        private loadingController: LoadingController,
        private alertController: AlertController,
        private validatorService: ValidatorService,
        private navCtrl: NavController,
    ) {
    }

    async startLoadingWithOptions(message = ''): Promise<HTMLIonLoadingElement> {
        const loading = await this.loadingController.create({
            cssClass: 'my-loading-class',
            spinner: null,
            message: '<ion-icon src="./assets/icon/Loader.svg"/>',
            translucent: false,
            backdropDismiss: false,
            mode: 'md'
        });
        await loading.present();
        return loading;
    }

    async hideLoadingFor(loading: HTMLIonLoadingElement) {
        if (loading) {
            loading.dismiss();
            loading = null;
        }
    }

    dataUriToFile(url, filename, mimeType) {
        return new Promise((resolve, reject) => {
            const byteString = window.atob(url.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const imageBlob = new Blob([int8Array], {type: mimeType});
            resolve(imageBlob);
        });
    }

    presentLoadingWithOptions(message = '') {
        console.log('Show loading');
        if (!this.loading && !this.loadingStarting) {
            this.loadingStarting = true;
            console.log('Show loading 1');
            this.loadingController.create({
                cssClass: 'my-loading-class',
                spinner: null,
                message: '<ion-icon src="./assets/icon/Loader.svg"/>',
                translucent: false,
                backdropDismiss: false,
                mode: 'md'
            }).then((loading) => {
                this.loading = loading;
                this.loadingStarting = false;
                this.loading.present();
            });
        }
    }

    hideLoading() {
        console.log('Hide loading');
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }

    async showAlert(message = '', title = '', callBack = null) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: callBack
                }
            ]
        });

        await alert.present();
    }

    getCurrentTimeStamp() {
        return Math.floor(Date.now());
    }

    getCurrentDateTIme() {
        return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    addDynamicFormControls(question, formGroup: FormGroup) {
        const validators = [];
        if (question.questionIsRequired) {
            validators.push(Validators.required);
        }

        if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
            const checkboxFormGroup = new FormGroup({}, {validators: question.questionIsRequired ? this.validatorService.validateCheckboxes : null});
            if (question.answerChoiceAttributes) {
                question.answerChoiceAttributes.map((choice) => {
                    checkboxFormGroup.addControl(UtilService.FCName(choice.answerChoiceAttributeId), new FormControl(false));
                });
            }

            formGroup.addControl(UtilService.FCName(question.questionId), checkboxFormGroup);
        } else {
            formGroup.addControl(UtilService.FCName(question.questionId), new FormControl('', Validators.compose(validators)));
        }
    }

    // Extract id from string (eg. L|10)
    getRelevantEntityId = (entityId) => {
        const response = {
            InventoryID: 0,
            ProjectID: 0,
            LocationID: 0
        };
        const entityIdSplits = entityId.split('|');
        if (entityIdSplits && entityIdSplits.length >= 2) {
            if (entityIdSplits[0] === 'I') {
                response.InventoryID = entityIdSplits[1];
            } else if (entityIdSplits[0] === 'P') {
                response.ProjectID = entityIdSplits[1];
            } else {
                response.LocationID = entityIdSplits[1];
            }
        }
        return response;
    };


}
