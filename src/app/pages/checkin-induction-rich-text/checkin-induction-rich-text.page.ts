import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {DemoDataService} from '../../services/demo-data.service';

@Component({
  selector: 'app-checkin-induction-rich-text',
  templateUrl: './checkin-induction-rich-text.page.html',
  styleUrls: ['./checkin-induction-rich-text.page.scss'],
})
export class CheckinInductionRichTextPage implements OnInit {

  inductionFiles = DemoDataService.inductionFiles;
  files = [];
  currentIndex = 0;

  constructor(
      public navCtrl: NavController,
  ) {
    this.inductionFiles.map((item) => {
      if (item.type === 'richtext') {
        this.files = item.content;
        return;
      }
    });
  }

  ngOnInit() {
  }

  onClose() {
    this.navCtrl.back();
  }

  onContinue() {
    if (this.files.length > (this.currentIndex + 1)) {
      this.currentIndex++;
    } else {
      this.navCtrl.navigateForward('/checkin-induction-form');
    }
  }
}
