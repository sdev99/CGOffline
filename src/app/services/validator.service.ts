import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    constructor() {
    }

    validateCheckboxes(boxes: FormControl) {
        let valid = false;
        let k: any;

        // tslint:disable-next-line:forin
        for (k in boxes.value) {
            const val = boxes.value[k];

            if (val) {
                valid = true;
                break;
            }
        }

        if (valid) {
            return null;
        }

        return {
            checkboxRequired: true
        };
    }
}
