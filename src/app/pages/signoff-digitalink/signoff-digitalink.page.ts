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
    isSignOffWithDigitalInk = 0;
    aggrementTitle = 'I confirm that I\'ve read the induction.';
    signoffFor = 'Induction';

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.aggrementTitle) {
                    this.aggrementTitle = params.aggrementTitle;
                }
                if (params.signoffFor) {
                    this.signoffFor = params.signoffFor;
                }

                if (params.isSignOffWithDigitalInk) {
                    this.isSignOffWithDigitalInk = parseInt(params.isSignOffWithDigitalInk, 0);
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

    isDigitalSignEmpty = () => {
        if (this.canvasRef) {
            const context = this.canvasRef.getContext('2d');
            const pixelBuffer = new Uint32Array(
                context.getImageData(0, 0, this.canvasRef.width, this.canvasRef.height).data.buffer
            );
            return !pixelBuffer.some(color => color !== 0);
        }
        return true;
    };

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
