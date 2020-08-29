import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fabric} from 'fabric';
import {Location} from '@angular/common';
import {NavController} from '@ionic/angular';
import {AnimationOptions} from '@ionic/angular/providers/nav-controller';
import {SharedDataService} from '../../services/shared-data.service';


@Component({
    selector: 'app-image-annotation',
    templateUrl: './image-annotation.page.html',
    styleUrls: ['./image-annotation.page.scss'],
})
export class ImageAnnotationPage implements OnInit {

    // Elements refrencea
    canvasRef;

    // UI variables
    isColorThicknessViewOpen = true;
    rangeValue = 1;

    // Default values
    defaultThickness = 3;
    defaultFontSize = 26;
    defaultColor = '#98C16B';
    lineArrowHeight = 10;
    lineArrowWidth = 15;
    lineArrowTopPos = 140;
    lineArrowLeftPos = 75;
    lineArrowLineWidth = 150;


    constructor(
        public navCtrl: NavController,
        public sharedDataService: SharedDataService,
    ) {

    }

    ngOnInit() {
        this.canvasRef = new fabric.Canvas('c');
        setTimeout(() => {
            this.initialise();
        }, 200);
    }

    initialise() {
        const content = document.getElementById('content');
        // Set canvas full screen size
        this.canvasRef.setDimensions({width: window.innerWidth, height: content.offsetHeight});

        // const imgURL = './assets/images/demo1.png';
        const imgURL = this.sharedDataService.getAnnotationImage().webPath;
        fabric.Image.fromURL(imgURL, (img) => {
            img.set({
                left: 0,
                top: 0,
                // width: window.innerWidth,
                // height: content.offsetHeight,
                selectable: false
            });
            img.scaleToWidth(window.innerWidth);
            img.scaleToHeight(content.offsetHeight);
            this.canvasRef.add(img);
        });
    }

    ionViewDidEnter() {
        this.customiseControl();
    }

    private customiseControl() {
        fabric.Object.prototype.cornerStyle = 'circle';
        fabric.Object.prototype.cornerColor = '#2A6FDB';
        fabric.Object.prototype.cornerSize = 16;
        fabric.Object.prototype.strokeWidth = 2;
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.hasBorders = false;
        fabric.Object.prototype.cornerStrokeColor = '#fff';
        fabric.Object.prototype.setControlsVisibility({ml: false, mr: false, mb: false, mt: false});


        fabric.Object.prototype.controls.deleteControl = this.trashControl();


        const rotateIcon = (ctx, left, top, styleOverride, fabricObject) => {
            const img = document.createElement('img');
            img.src = './assets/icon/rotate.svg';

            const size = 24;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(img, -size / 2, -size / 2, size, size);
            ctx.restore();
        };

        // Setting position of rotate corner
        fabric.Object.prototype.controls.mtr.y = 0.5;
        fabric.Object.prototype.controls.mtr.offsetY = 40;
        fabric.Object.prototype.controls.mtr.render = rotateIcon;
    }

    private commonSetting = () => {
        return {
            top: 150,
            left: 150,
            fill: 'transparent',
            stroke: this.defaultColor,
            strokeWidth: this.defaultThickness,
        };
    };


    private addObjectAndActiveIt = (object) => {
        this.canvasRef.add(object);
        this.canvasRef.setActiveObject(object);
        setTimeout(() => {
            this.canvasRef.requestRenderAll();
        }, 200);
    };

    private trashControl = () => {
        const deleteObject = (eventData, target) => {
            const canvas = target.canvas;
            canvas.remove(target);
            canvas.requestRenderAll();
        };

        const renderIcon = (ctx, left, top, styleOverride, fabricObject) => {
            const img = document.createElement('img');
            img.src = './assets/icon/trash.svg';

            const size = 24;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(img, -size / 2, -size / 2, size, size);
            ctx.restore();
        };

        return new fabric.Control({
            x: 0.75,
            y: 0,
            offsetX: 0,
            offsetY: 0,
            cursorStyle: 'pointer',
            mouseUpHandler: deleteObject,
            render: renderIcon,
        });
    };

    /**
     * UI actions methods
     */

    onColorChanged(color) {
        const activeObject = this.canvasRef.getActiveObject();
        if (activeObject) {
            console.log('activeObject.type' + activeObject.type);

            if (activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'path') {
                activeObject.set('stroke', color);
            } else if (activeObject.type === 'textbox') {
                activeObject.set('fill', color);
            } else if (activeObject.type === 'group') {
                activeObject.getObjects().map((item) => {
                    if (item.type === 'line') {
                        item.set('stroke', color);
                    }
                    if (item.type === 'triangle') {
                        item.set('fill', color);
                    }
                });
            }
        } else if (this.canvasRef.isDrawingMode) {
            this.canvasRef.freeDrawingBrush.color = color;
        }
        this.canvasRef.requestRenderAll();
        this.defaultColor = color;
    }

    rangeChange(event) {
        const thickNess = event.target.value;

        const activeObject = this.canvasRef.getActiveObject();
        if (activeObject) {
            console.log('activeObject.type' + activeObject.type);

            if (activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'path') {
                activeObject.set('strokeWidth', thickNess);
                this.defaultThickness = thickNess;
            } else if (activeObject.type === 'textbox') {
                activeObject.set('fontSize', thickNess);
                this.defaultFontSize = thickNess;
            } else if (activeObject.type === 'group') {
                this.defaultThickness = thickNess;
                activeObject.scaleX = thickNess;
                activeObject.scaleY = thickNess;

                // const lineObject = activeObject.getObjects('line')[0];
                // const triangleObject = activeObject.getObjects('triangle')[0];

                // lineObject.set('strokeWidth', thickNess);

                // triangleObject.set('width', this.lineArrowHeight + thickNess * 2);
                // triangleObject.set('height', this.lineArrowWidth + thickNess * 2);
                // triangleObject.set('top', lineObject.top + thickNess / 2 - (this.lineArrowHeight + thickNess * 2) / 2);
                // triangleObject.set('left', lineObject.x2 - lineObject.x);
            }
        } else if (this.canvasRef.isDrawingMode) {
            this.canvasRef.freeDrawingBrush.width = thickNess;
            this.defaultThickness = thickNess;
        }
        this.canvasRef.requestRenderAll();
    }


    addRectangle() {
        this.rangeValue = this.defaultThickness;
        this.isColorThicknessViewOpen = true;
        this.canvasRef.isDrawingMode = false;

        const rectangle = new fabric.Rect({
            ...this.commonSetting(),
            width: 160,
            height: 160,
        });

        this.addObjectAndActiveIt(rectangle);

    }

    addCircle() {
        this.rangeValue = this.defaultThickness;
        this.isColorThicknessViewOpen = true;
        this.canvasRef.isDrawingMode = false;

        const circle = new fabric.Circle({
            ...this.commonSetting(),
            radius: 80,
        });
        this.addObjectAndActiveIt(circle);
    }

    addLine() {
        this.rangeValue = this.defaultThickness;
        this.isColorThicknessViewOpen = true;
        this.canvasRef.isDrawingMode = false;
        const triangle = new fabric.Triangle({
            left: this.lineArrowLeftPos + this.lineArrowLineWidth + this.lineArrowWidth,
            top: this.lineArrowTopPos,
            width: this.lineArrowHeight,
            height: this.lineArrowWidth,
            fill: this.defaultColor,
            angle: 90,
        });

        const line = new fabric.Line([this.lineArrowLeftPos, this.lineArrowTopPos, this.lineArrowLeftPos + this.lineArrowLineWidth, this.lineArrowTopPos], {
            left: this.lineArrowLeftPos,
            top: this.lineArrowTopPos + this.lineArrowHeight / 2,
            stroke: this.defaultColor,
            strokeWidth: this.defaultThickness
        });

        const objs = [line, triangle];

        const alltogetherObj = new fabric.Group(objs);
        alltogetherObj.strokeUniform = true;
        this.addObjectAndActiveIt(alltogetherObj);
    }

    addFreeLine() {
        this.canvasRef.discardActiveObject();
        this.rangeValue = this.defaultThickness;
        this.isColorThicknessViewOpen = true;
        const canvas = this.canvasRef;
        canvas.isDrawingMode = true;
        this.canvasRef.freeDrawingBrush.color = this.defaultColor;
        this.canvasRef.freeDrawingBrush.width = this.defaultThickness;
    }

    addText() {
        this.rangeValue = this.defaultFontSize;
        this.isColorThicknessViewOpen = true;
        this.canvasRef.isDrawingMode = false;

        const text = new fabric.Textbox('', {
            top: window.innerHeight / 3,
            left: 10,
            width: 200,
            fill: '#98C16B',
            fontSize: this.defaultFontSize,
            textAlign: 'center',
        });
        this.canvasRef.on('text:changed', (opt) => {
            // const t1 = opt.target;
            // if (t1.width > t1.fixedWidth) {
            //     t1.fontSize *= t1.fixedWidth / (t1.width + 1);
            //     t1.width = t1.fixedWidth;
            // }
        });


        text.controls.deleteControl = this.trashControl();
        this.addObjectAndActiveIt(text);
        text.enterEditing();
        text.hiddenTextarea.focus();
    }

    onClose() {
        this.navCtrl.navigateBack(['/tabs/tab1']);
    }

    onContinue() {

        this.canvasRef.discardActiveObject();
        this.canvasRef.isDrawingMode = false;

        const downlaodImg = this.canvasRef.toDataURL('jpeg');
        this.sharedDataService.setPreviewImage(downlaodImg);
        this.navCtrl.navigateForward(['/annotation-preview']);
    }
}
