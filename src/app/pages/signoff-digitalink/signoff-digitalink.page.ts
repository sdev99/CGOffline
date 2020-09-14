import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {fabric} from 'fabric';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-signoff-digitalink',
    templateUrl: './signoff-digitalink.page.html',
    styleUrls: ['./signoff-digitalink.page.scss'],
})
export class SignoffDigitalinkPage implements OnInit {
    isConfirm = false;
    canvasRef;
    isSignOffWithDigitalInk = false;
    aggrementTitle = 'I confirm that I\'ve read the induction.';
    signoffFor = 'Induction';

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        route.params.subscribe((params: any) => {
            if (params) {
                if (params.aggrementTitle) {
                    this.aggrementTitle = params.aggrementTitle;
                }
                if (params.signoffFor) {
                    this.signoffFor = params.signoffFor;
                }
            }
        });
    }

    ngOnInit() {
        if (this.isSignOffWithDigitalInk) {
            setTimeout(() => {
                this.canvasRef = new fabric.Canvas('digital-signature');
                this.initialise();
            }, 200);
        }
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
        if (this.isSignOffWithDigitalInk) {
            this.canvasRef.discardActiveObject();
            const downlaodImg = this.canvasRef.toDataURL('jpeg');
        }

        this.navCtrl.navigateForward(['/checkin-success']);
    }

}
