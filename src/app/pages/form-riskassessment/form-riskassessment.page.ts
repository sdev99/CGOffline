import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
    selector: 'app-form-riskassessment',
    templateUrl: './form-riskassessment.page.html',
    styleUrls: ['./form-riskassessment.page.scss'],
})
export class FormRiskassessmentPage implements OnInit {
    totalItem = 42;
    currentItem = 1;

    list = DemoDataService.riskAssesmentQuestions;
    locations = DemoDataService.locations;
    users = DemoDataService.users;

    ionSelectInterface = 'popover';

    addedUsers = {};
    selectedUser;
    userGroupTypes = [{name: 'Users', id: 'users'}, {name: 'Groups', id: 'groups'}];
    selectedUserGroupType = this.userGroupTypes[0];

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    previous() {
        if (this.currentItem > 1) {
            this.currentItem--;
        }
    }

    next() {
        if (this.currentItem < this.totalItem) {
            this.currentItem++;
        }
    }

    residualRiskRatingChange(event, section, type) {
        section[type] = event.detail.checked;
    }


    addUser() {
        this.users.map((item) => {
            if (item.id === this.selectedUser) {
                this.addedUsers[this.selectedUser] = item;
                return;
            }
        });
        this.selectedUser = null;
    }

    removeUser(id) {
        delete this.addedUsers[id];
    }

    onContinue() {
        this.navCtrl.navigateForward(['/signoff-digitalink']);
    }

}
