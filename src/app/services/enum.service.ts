import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnumService {

    static SignOffType = {
        HAV: 'hav-form',
        ACCIDENT_REPORT: 'accident-report',
        CUSTOM_FORM: 'custom-form',
        RISK_ASSESSMENT: 'risk-assessment',
        INDUCTION: 'induction'
    };

    static ObserverKeys = {
        BACK_BUTTON_PRESSED: 'BACK_BUTTON_PRESSED',
        NEW_CHECKED_IN: 'NEW_CHECKED_IN',
        APP_RESTORED_RESULT: 'APP_RESTORED_RESULT',
    };

    constructor() {
    }
}
