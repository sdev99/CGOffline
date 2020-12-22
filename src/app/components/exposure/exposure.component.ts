import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-exposure',
    templateUrl: './exposure.component.html',
    styleUrls: ['./exposure.component.scss'],
})
export class ExposureComponent implements OnInit {
    @Input() label: string;
    @Input() points: string;
    @Input() containerClassName: string;

    constructor() {
    }

    ngOnInit() {
    }


    getPointColor() {
        const points = parseInt(this.points, 0);
        if (points >= 0 && points <= 63) {
            // Below Action
            return '#19DC76';
        } else if (points >= 64 && points <= 99) {
            // Likely Below Action
            return '#91E7BA';
        } else if (points >= 100 && points <= 250) {
            // Above Action
            return '#FFF500';
        } else if (points >= 251 && points <= 399) {
            // Likely Above Limit
            return '#FFBA00';
        } else if (points >= 400) {
            // Above Limit
            return '#E74731';
        }
        return '#19DC76';
    }

}
