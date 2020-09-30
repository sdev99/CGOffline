import {Component, OnInit} from '@angular/core';
import {DemoDataService} from '../../services/demo-data.service';
import {NavController} from '@ionic/angular';
import {FilehandlerService} from '../../services/filehandler.service';

@Component({
    selector: 'app-my-profile-documents',
    templateUrl: './my-profile-documents.page.html',
    styleUrls: ['./my-profile-documents.page.scss'],
})
export class MyProfileDocumentsPage implements OnInit {
    list = DemoDataService.myProfileDocuments;

    constructor(
        public navCtrl: NavController,
        private filehandlerService: FilehandlerService,
    ) {
    }

    ngOnInit() {
    }

    onClose() {
        this.navCtrl.back();
    }

    openFile() {
        this.filehandlerService.openFile();
    }

}
