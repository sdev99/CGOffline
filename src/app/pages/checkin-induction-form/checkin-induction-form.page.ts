import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-checkin-induction-form',
    templateUrl: './checkin-induction-form.page.html',
    styleUrls: ['./checkin-induction-form.page.scss'],
})
export class CheckinInductionFormPage implements OnInit {

    list = [
        {
            question: 'I confrim i have been issued with all of the following PPE',
            note: 'is a text for the above question',
            options: [
                {title: 'Hard Hat', value: 1},
                {title: 'Safety Glasses', value: 2},
                {title: 'Safety Footware', value: 3},
                {title: 'High Visibility Vest', value: 4},
                {title: 'Hearing Protection', value: 5},
            ]
        },
        {
            question: 'How long is this induction valid?',
            options: [
                {title: '1 Week', value: 1},
                {title: '1 Month', value: 2},
                {title: '1 year', value: 3},
            ],
        }
    ];

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.navCtrl.navigateForward(['/checkin-induction-va']);
    }

}
