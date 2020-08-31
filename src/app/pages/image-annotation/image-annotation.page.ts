import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fabric} from 'fabric';
import {Location} from '@angular/common';
import {NavController} from '@ionic/angular';
import {AnimationOptions} from '@ionic/angular/providers/nav-controller';
import {SharedDataService} from '../../services/shared-data.service';

fabric.LineArrow = fabric.util.createClass(fabric.Line, {

    type: 'LineArrow',

    initialize: function(element, options) {
        options || (options = {});
        this.callSuper('initialize', element, options);
    },

    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'));
    },

    _render: function(ctx) {
        this.callSuper('_render', ctx);

        // do not render if width/height are zeros or object is not visible
        if (this.width === 0 && this.height === 0 || !this.visible) {
            return;
        }

        ctx.save();

        var xDiff = this.x2 - this.x1;
        var yDiff = this.y2 - this.y1;
        var angle = Math.atan2(yDiff, xDiff);
        ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
        ctx.rotate(angle);
        ctx.beginPath();
        //move 10px in front of line to start the arrow so it does not have the square line end showing in front (0,0)
        ctx.moveTo(5, 0);

        // ctx.lineTo(-0, 70);
        // ctx.lineTo(-0, -70);


        ctx.lineTo(-20, 15);
        ctx.lineTo(-20, -15);

        ctx.closePath();
        ctx.fillStyle = this.stroke;
        ctx.fill();
        ctx.restore();
    },

    clipTo: function() {
        var ctx = arguments[0];
        this._render(ctx);
    }
});

fabric.LineArrow.async = true;

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
        this.addLine();
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
            } else if (activeObject.type === 'LineArrow') {
                activeObject.set('stroke', color);
            } else if (activeObject.type === 'polyline') {
                activeObject.set('stroke', color);
                activeObject.set('fill', color);
            }
        } else if (this.canvasRef.isDrawingMode) {
            this.canvasRef.freeDrawingBrush.color = color;
        }
        this.canvasRef.requestRenderAll();
        this.defaultColor = color;
    }

    rangeChange(event) {
        const thickNess = event.target.value;
        console.log('Thickness ' + this.defaultThickness);

        const activeObject = this.canvasRef.getActiveObject();
        if (activeObject) {
            console.log('activeObject.type' + activeObject.type);

            if (activeObject.type === 'rect' || activeObject.type === 'circle' || activeObject.type === 'path') {
                activeObject.set('strokeWidth', thickNess);
                this.defaultThickness = thickNess;
            } else if (activeObject.type === 'LineArrow') {
                activeObject.strokeWidth = thickNess;
                this.defaultThickness = thickNess;
            } else if (activeObject.type === 'polyline') {
                // activeObject.strokeWidth = thickNess;
                activeObject.scale(thickNess);
                this.defaultThickness = thickNess;
            } else if (activeObject.type === 'textbox') {
                activeObject.set('fontSize', thickNess);
                this.defaultFontSize = thickNess;
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

    addPolyline(fromx, fromy, tox, toy) {
        const angle = Math.atan2(toy - fromy, tox - fromx);

        const headlen = 3;  // arrow head size

        // bring the line end back some to account for arrow head.
        tox = tox - (headlen) * Math.cos(angle);
        toy = toy - (headlen) * Math.sin(angle);

        // calculate the points.
        const points = [
            {
                x: fromx,  // start point
                y: fromy
            }, {
                x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
            }, {
                x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
            }, {
                x: tox - (headlen) * Math.cos(angle - Math.PI / 2),
                y: toy - (headlen) * Math.sin(angle - Math.PI / 2)
            }, {
                x: tox + (headlen) * Math.cos(angle),  // tip
                y: toy + (headlen) * Math.sin(angle)
            }, {
                x: tox - (headlen) * Math.cos(angle + Math.PI / 2),
                y: toy - (headlen) * Math.sin(angle + Math.PI / 2)
            }, {
                x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
            }, {
                x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
            }, {
                x: fromx,
                y: fromy
            }
        ];

        const pline = new fabric.Polyline(points, {
            fill: this.defaultColor,
            stroke: this.defaultColor,
            opacity: 1,
            strokeWidth: 3,
            originX: 'left',
            originY: 'top',
            selectable: true,
            strokeUniform: true,
        });

        this.addObjectAndActiveIt(pline);

    }

    addLine() {
        this.rangeValue = this.defaultThickness;
        this.isColorThicknessViewOpen = true;
        this.canvasRef.isDrawingMode = false;


        // click and drag to draw more arrow!
        // var startX, startY, endX, endY;
        this.addPolyline(100, 150, 125, 150);
        this.canvasRef.on('mouse:down', (event) => {
            // var pointer = this.canvasRef.getPointer(event.e);
            // startX = pointer.x;
            // startY = pointer.y;
        });
        this.canvasRef.on('mouse:up', (event) => {
            // var pointer = this.canvasRef.getPointer(event.e);
            // endX = pointer.x;
            // endY = pointer.y;
            // drawArrow(startX, startY, endX, endY);
        });

        // const arrowLine = new fabric.LineArrow([100, 0, 200, 0], {
        //     left: 50,
        //     top: 200,
        //     stroke: this.defaultColor,
        //     strokeWidth: this.defaultThickness,
        //     strokeUniform: false,
        //     padding: 10,
        //     cacheHeight: 500,
        //     width: 500,
        //     height: 500,
        //     cacheTranslationY: 500,
        // });
        //
        // this.addObjectAndActiveIt(arrowLine);
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
