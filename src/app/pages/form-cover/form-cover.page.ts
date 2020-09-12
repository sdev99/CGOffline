import { Component, OnInit } from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-form-cover',
  templateUrl: './form-cover.page.html',
  styleUrls: ['./form-cover.page.scss'],
})
export class FormCoverPage implements OnInit {

  activityDetail = DemoDataService.activityList[4];

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
    this.navCtrl.navigateBack(['/tabs/tab1']);
  }
}
