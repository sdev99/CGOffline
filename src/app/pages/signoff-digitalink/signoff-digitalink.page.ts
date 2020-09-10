import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {fabric} from 'fabric';

@Component({
    selector: 'app-signoff-digitalink',
    templateUrl: './signoff-digitalink.page.html',
    styleUrls: ['./signoff-digitalink.page.scss'],
})
export class SignoffDigitalinkPage implements OnInit {
    isConfirm = false;
    canvasRef;

    constructor(
        public navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        this.canvasRef = new fabric.Canvas('digital-signature');
        setTimeout(() => {
            this.initialise();
        }, 200);
    }

    initialise() {
        this.canvasRef.setDimensions({width: window.innerWidth - 46, height: (window.innerHeight * 28 / 100)});
        this.canvasRef.on('selection:created', () => {
        });
        this.canvasRef.on('selection:cleared', () => {
        });
        this.canvasRef.freeDrawingBrush.color = '#171538';
        this.canvasRef.freeDrawingBrush.width = 4;
        this.canvasRef.isDrawingMode = true;
    }

    onClose() {
        this.navCtrl.back();
    }

    onContinue() {
        this.canvasRef.discardActiveObject();
        const downlaodImg = this.canvasRef.toDataURL('jpeg');
        this.navCtrl.navigateForward(['/checkin-success']);
    }

}
