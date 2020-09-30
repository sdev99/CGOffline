import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {fabric} from 'fabric';
import {ActivatedRoute} from '@angular/router';
import {ObservablesService} from '../../services/observables.service';
import {EnumService} from '../../services/enum.service';

@Component({
    selector: 'app-signoff-digitalink',
    templateUrl: './signoff-digitalink.page.html',
    styleUrls: ['./signoff-digitalink.page.scss'],
})
export class SignoffDigitalinkPage implements OnInit {
    isConfirm = false;
    canvasRef;

    pageTitle = 'Sign-Off';
    title = 'You are signing-off';
    subTitle = '';
    aggrementTitle = '';
    showDigitalInk = false;

    type;
    data;

    constructor(
        public navCtrl: NavController,
        public route: ActivatedRoute,
        public observablesService: ObservablesService,
    ) {
        route.queryParams.subscribe((params: any) => {
            if (params) {
                if (params.type) {
                    this.type = params.type;
                }
                if (params.data) {
                    this.data = JSON.parse(params.data);
                }
            }
        });
    }

    ngOnInit() {
        switch (this.type) {
            case EnumService.SignOffType.HAV:
            case EnumService.SignOffType.ACCIDENT_REPORT:
            case EnumService.SignOffType.CUSTOM_FORM:
            case EnumService.SignOffType.RISK_ASSESSMENT:
                this.aggrementTitle = 'I confirm that I\'ve filled the above form.';
                this.subTitle = this.data.name;
                this.showDigitalInk = true;
                this.initialiseDrawing();
                break;

            case EnumService.SignOffType.INDUCTION:
                this.aggrementTitle = 'I confirm that I\'ve read the induction.';
                this.subTitle = 'Induction';
                this.showDigitalInk = true;
                this.initialiseDrawing();
                break;

            default:
        }
    }

    initialiseDrawing() {
        setTimeout(() => {
            this.canvasRef = new fabric.Canvas('digital-signature');
            this.canvasRef.setDimensions({width: window.innerWidth - 46, height: (window.innerHeight * 28 / 100)});
            this.canvasRef.on('selection:created', () => {
            });
            this.canvasRef.on('selection:cleared', () => {
            });
            this.canvasRef.freeDrawingBrush.color = '#171538';
            this.canvasRef.freeDrawingBrush.width = 4;
            this.canvasRef.isDrawingMode = true;
        }, 200);
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
        if (this.isConfirm) {
            let downlaodImg;
            if (this.showDigitalInk) {
                this.canvasRef.discardActiveObject();
                downlaodImg = this.canvasRef.toDataURL('jpeg');
            }

            switch (this.type) {
                case EnumService.SignOffType.HAV:
                case EnumService.SignOffType.ACCIDENT_REPORT:
                case EnumService.SignOffType.CUSTOM_FORM:
                case EnumService.SignOffType.RISK_ASSESSMENT:
                    this.navCtrl.navigateForward(['/signoff-photo'], {
                        queryParams: {
                            type: this.type,
                            data: JSON.stringify(this.data)
                        }
                    });

                    break;

                case EnumService.SignOffType.INDUCTION:
                    this.navCtrl.navigateForward(['/signoff-photo'], {
                        queryParams: {
                            type: this.type,
                            data: JSON.stringify(this.data)
                        }
                    });
                    break;

                default:
                    this.navCtrl.navigateForward(['/checkin-fail'], {});
            }
        }
    }

}
