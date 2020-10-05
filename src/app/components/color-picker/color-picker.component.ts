import {Component, Output, Input, ViewChild, EventEmitter, OnInit, ElementRef} from '@angular/core';

const POUCH = [
    {
        START: 'mousedown',
        MOVE: 'mousemove',
        STOP: 'mouseup'
    },
    {
        START: 'touchstart',
        MOVE: 'touchmove',
        STOP: 'touchend'
    }
];

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {

    @Input() hexColor: string;

    @Output() colorChanged = new EventEmitter<string>();

    @Output() colorTouchStart = new EventEmitter<void>();

    @Output() colorTouchEnd = new EventEmitter<void>();

    // this is the main palette
    @ViewChild('palette') palette: ElementRef;

    // this is the color chooser
    @ViewChild('chooser') chooser: ElementRef;

    ctxPalette: CanvasRenderingContext2D;

    requestAnimationFrameID: number;

    color: string;

    colorFromChooser: string;

    paletteX: number;

    paletteY: number;

    chooserX: number;

    chooserHeight = 16;

    ngOnInit() {
        if (this.hexColor) {
            this.colorFromChooser = this.hexColor;
        } else {
            this.colorFromChooser = '#0000FF';
        }

        setTimeout(() => {
            this.init();
        }, 200);
    }

    init = () => {
        // Set default position of coloe chooser
        const canvasChooser = this.chooser.nativeElement;
        const context = canvasChooser.getContext('2d');
        const bounding = canvasChooser.getBoundingClientRect();
        const currentWidth = window.innerWidth;
        const width = currentWidth * 90 / 100;

        const touchX = width / 2;
        const x = (touchX - bounding.left) * this.getPixelRatio(context);
        this.chooserX = x;
        this.colorFromChooser = '#000';

        this.initChooser();
        this.initPalette();
    };

    drawSelector = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, y, 10 * this.getPixelRatio(ctx), 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };

    drawChooserSelector = (ctx: CanvasRenderingContext2D, x: number) => {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, ctx.canvas.height / 2, ctx.canvas.height / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colorFromChooser;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };

    initPalette = () => {
        const canvasPalette = this.palette.nativeElement;
        this.ctxPalette = canvasPalette.getContext('2d');

        const currentWidth = window.innerWidth;

        const pixelRatio = this.getPixelRatio(this.ctxPalette);

        const width = currentWidth * 90 / 100;
        const height = width * 0.5;

        this.ctxPalette.canvas.width = width * pixelRatio;
        this.ctxPalette.canvas.height = height * pixelRatio;

        this.ctxPalette.canvas.style.width = width + 'px';
        this.ctxPalette.canvas.style.height = height + 'px';

        this.drawPalette(this.colorFromChooser);

        const eventChangeColor = (event) => {
            this.updateColor(event, canvasPalette, this.ctxPalette);
        };

        POUCH.forEach(pouch => {
            canvasPalette.addEventListener(pouch.START, (event) => {
                this.colorTouchStart.emit();
                this.drawPalette(this.colorFromChooser);
                canvasPalette.addEventListener(pouch.MOVE, eventChangeColor);
                this.updateColor(event, canvasPalette, this.ctxPalette);
            });

            canvasPalette.addEventListener(pouch.STOP, (event) => {
                this.colorTouchEnd.emit();
                canvasPalette.removeEventListener(pouch.MOVE, eventChangeColor);
                this.updateColor(event, canvasPalette, this.ctxPalette);
                this.drawSelector(this.ctxPalette, this.paletteX, this.paletteY);
            });
        });
    };

    drawPalette = (endColor: string) => {

        this.ctxPalette.clearRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);

        let gradient = this.ctxPalette.createLinearGradient(0, 0, this.ctxPalette.canvas.width, 0);

        // Create color gradient
        gradient.addColorStop(0, '#FFFFFF');
        gradient.addColorStop(1, endColor);

        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);

        // Create semi transparent gradient (white -> trans. -> black)
        gradient = this.ctxPalette.createLinearGradient(0, 0, 0, this.ctxPalette.canvas.height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
        gradient.addColorStop(1, 'rgba(0,     0,   0, 1)');

        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
    };

    initChooser = () => {
        const canvasChooser = this.chooser.nativeElement;
        const ctx = canvasChooser.getContext('2d');

        const currentWidth = window.innerWidth;

        const pixelRatio = this.getPixelRatio(ctx);

        const width = currentWidth * 90 / 100;
        const height = this.chooserHeight;

        ctx.canvas.width = width * pixelRatio;
        ctx.canvas.height = height * pixelRatio;

        ctx.canvas.style.width = width + 'px';
        ctx.canvas.style.height = height + 'px';

        this.drawChooser(ctx);

        setTimeout(() => {
            this.drawChooserSelector(ctx, this.chooserX);
        }, 100);

        const eventChangeColorChooser = (event) => {
            this.updateColorChooser(event, canvasChooser, ctx);
            this.drawSelector(this.ctxPalette, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height / 2);
        };

        POUCH.forEach(pouch => {
            canvasChooser.addEventListener(pouch.START, (event) => {
                this.drawChooser(ctx);
                canvasChooser.addEventListener(pouch.MOVE, eventChangeColorChooser);
                this.updateColorChooser(event, canvasChooser, ctx);
                this.drawSelector(this.ctxPalette, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height / 2);
            });

            canvasChooser.addEventListener(pouch.STOP, (event) => {
                canvasChooser.removeEventListener(pouch.MOVE, eventChangeColorChooser);
                this.updateColorChooser(event, canvasChooser, ctx);
                this.drawChooser(ctx);
                this.drawChooserSelector(ctx, this.chooserX);
                this.drawSelector(this.ctxPalette, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height / 2);
            });
        });
    };

    drawChooser = (ctx: CanvasRenderingContext2D) => {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);


        const colors = ['#FFFFFF', '#000000', '#FF0000', '#FDD220', '#8ABF77', '#78F6DA', '#413BFB', '#FF00EC', '#FF0000'];
        const interval = 1 / (colors.length - 1);
        colors.map((color, key) => {
            gradient.addColorStop(key * interval, color);
        });

        // Apply gradient to canvas
        ctx.fillStyle = gradient;
        const x = 0;
        const y = ctx.canvas.height / 4;
        const w = ctx.canvas.width;
        const h = ctx.canvas.height / 2;
        const r = ctx.canvas.height / 4;

        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
        ctx.fill();
    };

    getPixelRatio = (ctx) => {
        const dpr = window.devicePixelRatio || 1;

        const bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;

        return dpr / bsr;
    };

    updateColorChooser = (event, canvas, context) => {
        this.color = this.colorFromChooser = this.getColor(event, canvas, context, true);
        this.colorChanged.emit(this.color);
        this.drawPalette(this.color);
    };

    updateColor = (event, canvas, context) => {
        this.color = this.getColor(event, canvas, context, false);
        this.colorChanged.emit(this.color);
    };

    getColor = (event, canvas, context, fromChooser: boolean): string => {

        console.log('Color_Event ' + JSON.stringify(event));
        const bounding = canvas.getBoundingClientRect();
        const touchX = event.pageX || event.changedTouches[0].pageX || event.changedTouches[0].screenX;
        const touchY = event.pageY || event.changedTouches[0].pageY || event.changedTouches[0].screenY;

        const x = (touchX - bounding.left) * this.getPixelRatio(context);
        const y = (touchY - bounding.top) * this.getPixelRatio(context);

        console.log('x ' + x);
        console.log('y ' + y);
        console.log('touchX ' + touchX);
        console.log('touchY ' + touchY);
        // console.log('bounding.top ' + bounding.top);

        if (fromChooser) {
            this.chooserX = x;
        } else {
            this.paletteX = x;
            this.paletteY = y;
        }

        // const imageData = context.getImageData(x, y, 1, 1);
        const imageData = context.getImageData(x, 15, 1, 1);
        const red = imageData.data[0];
        const green = imageData.data[1];
        const blue = imageData.data[2];
        return '#' + this.toHex(red) + this.toHex(green) + this.toHex(blue);
    };

    toHex = (n) => {
        n = parseInt(n, 10);
        if (isNaN(n)) {
            return '00';
        }
        n = Math.max(0, Math.min(n, 255));
        return '0123456789ABCDEF'.charAt((n - n % 16) / 16) + '0123456789ABCDEF'.charAt(n % 16);
    };
}
