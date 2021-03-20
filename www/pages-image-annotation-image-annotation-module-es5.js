(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-annotation-image-annotation-module"], {
    /***/
    "//m/":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-annotation/image-annotation.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar mode=\"md\">\n    <div class=\"tools-button-container\">\n      <ion-button size=\"small\" fill=\"clear\" (click)=\"addLine()\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/icon/Arrow.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button size=\"small\" fill=\"clear\" (click)=\"addCircle()\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/icon/Circle.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button size=\"small\" fill=\"clear\" (click)=\"addRectangle()\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/icon/Square.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button size=\"small\" fill=\"clear\" (click)=\"addFreeLine()\">\n        <ion-icon\n          slot=\"icon-only\"\n          src=\"./assets/icon/PencilEditCreate.svg\"\n        ></ion-icon>\n      </ion-button>\n\n      <ion-button\n        size=\"small\"\n        fill=\"clear\"\n        class=\"text-edit-button\"\n        (click)=\"addText()\"\n      >\n        <ion-icon slot=\"icon-only\" src=\"./assets/icon/TextEdit.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button size=\"small\" fill=\"clear\" (click)=\"onClose()\">\n        <ion-icon slot=\"icon-only\" src=\"./assets/icon/ic_close.svg\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" mode=\"md\">\n  <div\n    class=\"color-thickness-picker-container\"\n    [hidden]=\"!isColorThicknessViewOpen\"\n  >\n    <app-color-picker\n      (colorChanged)=\"onColorChanged($event)\"\n      [hexColor]=\"defaultColor\"\n    ></app-color-picker>\n    <ion-range\n      [ngModel]=\"rangeValue\"\n      class=\"range\"\n      mode=\"md\"\n      color=\"dark\"\n      min=\"1\"\n      max=\"100\"\n      (ionChange)=\"rangeChange($event)\"\n    ></ion-range>\n  </div>\n\n  <div class=\"canvas-view\">\n    <!--  <ion-img src=\"./assets/images/etienne-girardet-sgYamIzhAhg-unsplash 1.png\" class=\"bg-img\" id=\"bgImg\"></ion-img>-->\n    <canvas id=\"c\" class=\"annotation canvas-container-c\"></canvas>\n  </div>\n\n  <div class=\"continue-button-container\">\n    <ion-button expand=\"full\" class=\"action-btn\" (click)=\"onContinue()\"\n      >Continue</ion-button\n    >\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "2OWm":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/image-annotation/image-annotation.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ImageAnnotationPage */

    /***/
    function OWm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageAnnotationPage", function () {
        return ImageAnnotationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_annotation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-annotation.page.html */
      "//m/");
      /* harmony import */


      var _image_annotation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-annotation.page.scss */
      "h9z/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! fabric */
      "epSk");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/static-data.service */
      "hYb0");

      fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].LineArrow = fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.createClass(fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Line, {
        type: "LineArrow",
        initialize: function initialize(element, options) {
          options || (options = {});
          this.callSuper("initialize", element, options);
        },
        toObject: function toObject() {
          return fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.object.extend(this.callSuper("toObject"));
        },
        _render: function _render(ctx) {
          this.callSuper("_render", ctx); // do not render if width/height are zeros or object is not visible

          if (this.width === 0 && this.height === 0 || !this.visible) {
            return;
          }

          ctx.save();
          var xDiff = this.x2 - this.x1;
          var yDiff = this.y2 - this.y1;
          var angle = Math.atan2(yDiff, xDiff);
          ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
          ctx.rotate(angle);
          ctx.beginPath(); //move 10px in front of line to start the arrow so it does not have the square line end showing in front (0,0)

          ctx.moveTo(5, 0); // ctx.lineTo(-0, 70);
          // ctx.lineTo(-0, -70);

          ctx.lineTo(-20, 15);
          ctx.lineTo(-20, -15);
          ctx.closePath();
          ctx.fillStyle = this.stroke;
          ctx.fill();
          ctx.restore();
        },
        clipTo: function clipTo() {
          var ctx = arguments[0];

          this._render(ctx);
        }
      });
      fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].ArrowLine = fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.createClass(fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Polyline, {
        type: "ArrowLine",
        initialize: function initialize(element, options) {
          options || (options = {});
          this.callSuper("initialize", element, options);
        },
        toObject: function toObject() {
          return fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.object.extend(this.callSuper("toObject"));
        },
        _render: function _render(ctx) {
          this.callSuper("_render", ctx);
        }
      });
      fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].LineArrow.async = true;
      fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].ArrowLine.async = true;

      var ImageAnnotationPage = /*#__PURE__*/function () {
        function ImageAnnotationPage(routerOutlet, navCtrl, sharedDataService, alertController, observablesService, screenOrientation) {
          var _this = this;

          _classCallCheck(this, ImageAnnotationPage);

          this.routerOutlet = routerOutlet;
          this.navCtrl = navCtrl;
          this.sharedDataService = sharedDataService;
          this.alertController = alertController;
          this.observablesService = observablesService;
          this.screenOrientation = screenOrientation; // UI variables

          this.isColorThicknessViewOpen = false;
          this.rangeValue = 1;
          this.imageMultiplier = 1; // Default values

          this.defaultThickness = 3;
          this.defaultFontSize = 26;

          this.ionViewWillLeave = function () {
            _this.routerOutlet.swipeGesture = true;
          };

          this.commonSetting = function () {
            return {
              top: 150,
              left: 150,
              fill: "transparent",
              stroke: _this.defaultColor,
              strokeWidth: _this.defaultThickness
            };
          };

          this.addObjectAndActiveIt = function (object) {
            object.on("selected", function () {
              _this.isColorThicknessViewOpen = true;
            });
            object.on("deselected", function () {
              _this.isColorThicknessViewOpen = false;
            });

            _this.canvasRef.add(object);

            _this.canvasRef.setActiveObject(object);

            setTimeout(function () {
              _this.canvasRef.requestRenderAll();
            }, 200);
          };

          this.trashControl = function () {
            var deleteObject = function deleteObject(eventData, target) {
              var canvas = target.canvas || _this.canvasRef;
              var targetObj = target.canvas ? target : target.target;

              if (targetObj.getObjects) {
                targetObj.getObjects().map(function (item) {
                  canvas.remove(item);
                });
              }

              canvas.remove(targetObj);
              canvas.requestRenderAll();
              _this.isColorThicknessViewOpen = false;
            };

            var renderIcon = function renderIcon(ctx, left, top, styleOverride, fabricObject) {
              var img = document.createElement("img");
              img.src = "./assets/icon/trash.svg";

              img.onload = function () {
                var size = 24;
                ctx.save();
                ctx.translate(left, top);
                ctx.rotate(fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.degreesToRadians(fabricObject.angle));
                ctx.drawImage(img, -size / 2, -size / 2, size, size);
                ctx.restore();
              };
            };

            return new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Control({
              x: 0.75,
              y: 0,
              offsetX: 0,
              offsetY: 0,
              cursorStyle: "pointer",
              mouseUpHandler: deleteObject,
              render: renderIcon
            });
          };

          this.getArrowLinePoints = function (fromx, fromy, tox, toy, headlen) {
            headlen = 10 + headlen + headlen / 4;
            var angle = Math.atan2(toy - fromy, tox - fromx); // bring the line end back some to account for arrow head.

            tox = tox - headlen * Math.cos(angle);
            toy = toy - headlen * Math.sin(angle); // calculate the points.

            var points = [{
              x: fromx,
              y: fromy
            }, {
              x: fromx - headlen / 4 * Math.cos(angle - Math.PI / 2),
              y: fromy - headlen / 4 * Math.sin(angle - Math.PI / 2)
            }, {
              x: tox - headlen / 4 * Math.cos(angle - Math.PI / 2),
              y: toy - headlen / 4 * Math.sin(angle - Math.PI / 2)
            }, {
              x: tox - headlen * Math.cos(angle - Math.PI / 2),
              y: toy - headlen * Math.sin(angle - Math.PI / 2)
            }, {
              x: tox + headlen * Math.cos(angle),
              y: toy + headlen * Math.sin(angle)
            }, {
              x: tox - headlen * Math.cos(angle + Math.PI / 2),
              y: toy - headlen * Math.sin(angle + Math.PI / 2)
            }, {
              x: tox - headlen / 4 * Math.cos(angle + Math.PI / 2),
              y: toy - headlen / 4 * Math.sin(angle + Math.PI / 2)
            }, {
              x: fromx - headlen / 4 * Math.cos(angle + Math.PI / 2),
              y: fromy - headlen / 4 * Math.sin(angle + Math.PI / 2)
            }, {
              x: fromx,
              y: fromy
            }];
            return points;
          };

          this.defaultColor = sharedDataService.annotationColor;
        }

        _createClass(ImageAnnotationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.canvasRef = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Canvas("c");
            setTimeout(function () {
              _this2.initialise();
            }, 200);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routerOutlet.swipeGesture = false;
            this.customiseControl();
          }
        }, {
          key: "initialise",
          value: function initialise() {
            var _this3 = this;

            var content = document.getElementById("content"); // Set canvas full screen size

            this.canvasRef.setDimensions({
              width: window.innerWidth,
              height: content.offsetHeight
            }); // const imgURL = './assets/images/demo1.png';

            var annotationImage = this.sharedDataService.getAnnotationImage();
            var imgURL = "";

            if (typeof annotationImage === "object" && annotationImage.dataUrl) {
              imgURL = annotationImage.dataUrl;
            } else {
              imgURL = annotationImage;
            }

            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Image.fromURL(imgURL, function (img) {
              _this3.canvasRef.add(img);

              var aspectRatio = img.width / img.height;
              var imgWidth = img.width;
              var imgHeight = img.height; // If image size is less then available screen size

              if (imgWidth < window.innerWidth && imgHeight < content.offsetHeight) {
                if (imgWidth < window.innerWidth) {
                  imgWidth = window.innerWidth;
                  imgHeight = window.innerWidth / aspectRatio;
                }

                if (imgHeight < content.offsetHeight) {
                  imgWidth = content.offsetHeight * aspectRatio;
                  imgHeight = content.offsetHeight;
                }
              } // If image size is greater then available screen size


              if (imgWidth > window.innerWidth || imgHeight > content.offsetHeight) {
                if (imgWidth > window.innerWidth) {
                  imgWidth = window.innerWidth;
                  imgHeight = window.innerWidth / aspectRatio;
                }

                if (imgHeight > content.offsetHeight) {
                  imgWidth = content.offsetHeight * aspectRatio;
                  imgHeight = content.offsetHeight;
                }
              }

              var left = (window.innerWidth - imgWidth) / 2;
              var top = (content.offsetHeight - imgHeight) / 2;
              img.set({
                left: 0,
                top: 0,
                selectable: false
              }); // Calculate Image Multipler for Output image

              if (img.height > _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].photoMaxHeight) {
                _this3.imageMultiplier = _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].photoMaxHeight / imgHeight;
              } else {
                _this3.imageMultiplier = img.height / imgHeight;
              }

              img.scale(window.innerWidth / img.width); // img.scaleToWidth(imgWidth);
              // img.scaleToHeight(imgHeight);

              var canvasRef = _this3.canvasRef;
              canvasRef.cacheCanvasEl.style.top = top + "px";

              _this3.canvasRef.setDimensions({
                width: imgWidth,
                height: imgHeight
              });

              _this3.canvasRef.renderAll();
            });
            this.canvasRef.on("selection:created", function () {
              _this3.isColorThicknessViewOpen = true;
            });
            this.canvasRef.on("selection:cleared", function () {
              _this3.isColorThicknessViewOpen = false;
            });
          }
        }, {
          key: "customiseControl",
          value: function customiseControl() {
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.cornerStyle = "circle";
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.cornerColor = "#2A6FDB";
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.cornerSize = 16;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.strokeWidth = 2;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.transparentCorners = false;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.hasBorders = false;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.cornerStrokeColor = "#fff";
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.setControlsVisibility({
              ml: false,
              mr: false,
              mb: false,
              mt: false
            });
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.controls.deleteControl = this.trashControl();

            var rotateIcon = function rotateIcon(ctx, left, top, styleOverride, fabricObject) {
              var img = document.createElement("img");
              img.src = "./assets/icon/rotate.svg";

              img.onload = function () {
                var size = 24;
                ctx.save();
                ctx.translate(left, top);
                ctx.rotate(fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.degreesToRadians(fabricObject.angle));
                ctx.drawImage(img, -size / 2, -size / 2, size, size);
                ctx.restore();
              };
            }; // Setting position of rotate corner


            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.controls.mtr.y = 0.5;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.controls.mtr.offsetY = 40;
            fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Object.prototype.controls.mtr.render = rotateIcon;
          }
          /**
           * UI actions methods
           */

        }, {
          key: "onColorChanged",
          value: function onColorChanged(color) {
            var activeObject = this.canvasRef.getActiveObject();

            if (activeObject) {
              console.log("activeObject.type" + activeObject.type);

              if (activeObject.type === "rect" || activeObject.type === "circle" || activeObject.type === "path") {
                activeObject.set("stroke", color);
              } else if (activeObject.type === "textbox") {
                activeObject.set("fill", color);
              } else if (activeObject.type === "ArrowLine") {
                activeObject.set("stroke", color);
                activeObject.set("fill", color);
              }
            } else if (this.canvasRef.isDrawingMode) {
              this.canvasRef.freeDrawingBrush.color = color;
            }

            this.canvasRef.requestRenderAll();
            this.defaultColor = color;
            this.sharedDataService.annotationColor = color;
          }
        }, {
          key: "rangeChange",
          value: function rangeChange(event) {
            var thickNess = event.target.value;
            console.log("Thickness " + this.defaultThickness);
            var activeObject = this.canvasRef.getActiveObject();

            if (activeObject) {
              if (activeObject.type === "rect" || activeObject.type === "circle" || activeObject.type === "path") {
                activeObject.set("strokeWidth", thickNess);
                this.defaultThickness = thickNess;
              } else if (activeObject.type === "ArrowLine") {
                this.addPolylinePoint(activeObject, 100, 150, 150 + this.defaultThickness * 2, 150, this.defaultThickness);
                this.defaultThickness = thickNess;
              } else if (activeObject.type === "textbox") {
                activeObject.set("fontSize", thickNess);
                this.defaultFontSize = thickNess;
              }
            } else if (this.canvasRef.isDrawingMode) {
              this.canvasRef.freeDrawingBrush.width = thickNess;
              this.defaultThickness = thickNess;
            }

            this.canvasRef.requestRenderAll();
          }
        }, {
          key: "addRectangle",
          value: function addRectangle() {
            this.rangeValue = this.defaultThickness;
            this.isColorThicknessViewOpen = true;
            this.canvasRef.isDrawingMode = false;
            var rectangle = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Rect(Object.assign(Object.assign({}, this.commonSetting()), {
              width: 160,
              height: 160
            }));
            this.addObjectAndActiveIt(rectangle);
          }
        }, {
          key: "addCircle",
          value: function addCircle() {
            this.rangeValue = this.defaultThickness;
            this.isColorThicknessViewOpen = true;
            this.canvasRef.isDrawingMode = false;
            var circle = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Circle(Object.assign(Object.assign({}, this.commonSetting()), {
              radius: 80
            }));
            this.addObjectAndActiveIt(circle);
          }
        }, {
          key: "addPolyline",
          value: function addPolyline(fromx, fromy, tox, toy, headlen) {
            var points = this.getArrowLinePoints(fromx, fromy, tox, toy, headlen);
            var pline = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].ArrowLine(points, {
              fill: this.defaultColor,
              stroke: this.defaultColor,
              opacity: 1,
              strokeWidth: 1,
              selectable: true,
              strokeUniform: false,
              padding: 10
            });
            this.addObjectAndActiveIt(pline);
          }
        }, {
          key: "addPolylinePoint",
          value: function addPolylinePoint(shape, fromx, fromy, tox, toy, headlen) {
            shape.points = this.getArrowLinePoints(fromx, fromy, tox, toy, headlen);
            this.canvasRef.remove(shape);
            var obj = shape.toObject();
            shape = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].ArrowLine(shape.points, obj);
            this.addObjectAndActiveIt(shape);
          }
        }, {
          key: "addLine",
          value: function addLine() {
            this.rangeValue = this.defaultThickness;
            this.isColorThicknessViewOpen = true;
            this.canvasRef.isDrawingMode = false;
            var strokeWidth = this.defaultThickness;
            this.addPolyline(100, 150, 150 + strokeWidth * 2, 150, strokeWidth);
          }
        }, {
          key: "addFreeLine",
          value: function addFreeLine() {
            this.canvasRef.discardActiveObject();
            this.rangeValue = this.defaultThickness;
            this.isColorThicknessViewOpen = true;
            var canvas = this.canvasRef;
            canvas.isDrawingMode = true;
            this.canvasRef.freeDrawingBrush.color = this.defaultColor;
            this.canvasRef.freeDrawingBrush.width = this.defaultThickness;
          }
        }, {
          key: "addText",
          value: function addText() {
            this.rangeValue = this.defaultFontSize;
            this.isColorThicknessViewOpen = true;
            this.canvasRef.isDrawingMode = false;
            var text = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Textbox("", {
              top: window.innerHeight / 3,
              left: 10,
              width: 200,
              fill: this.defaultColor,
              fontSize: this.defaultFontSize,
              textAlign: "center"
            });
            this.canvasRef.on("text:changed", function (opt) {// const t1 = opt.target;
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
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "You are leaving",
                        message: "<strong>Are you sure to exit without saving?</strong>",
                        buttons: [{
                          text: "No",
                          role: "cancel",
                          cssClass: "secondary",
                          handler: function handler(blah) {
                            console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "Yes",
                          handler: function handler() {
                            _this4.navCtrl.back();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onContinue",
          value: function onContinue() {
            this.canvasRef.discardActiveObject();
            this.canvasRef.isDrawingMode = false;
            var imageMultiplier = this.imageMultiplier;
            var qualityVal = _services_static_data_service__WEBPACK_IMPORTED_MODULE_9__["StaticDataService"].photoQuality / 100;
            var downlaodImg = this.canvasRef.toDataURL({
              format: "jpeg",
              quality: qualityVal,
              multiplier: imageMultiplier
            });

            if (this.sharedDataService.onAnnotationImageDone) {
              this.sharedDataService.onAnnotationImageDone(downlaodImg);
            }

            this.navCtrl.back();
          }
        }]);

        return ImageAnnotationPage;
      }();

      ImageAnnotationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_7__["ObservablesService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]
        }];
      };

      ImageAnnotationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-image-annotation",
        template: _raw_loader_image_annotation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_annotation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImageAnnotationPage);
      /***/
    },

    /***/
    "h9z/":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/image-annotation/image-annotation.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function h9z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\nion-content .canvas-view {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.canvas-container-c {\n  background-color: #EEE !important;\n}\nion-toolbar {\n  --background: #F8F9FB;\n}\nion-toolbar .tools-button-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  background-color: #F8F9FB;\n  margin: 0 16px;\n}\nion-toolbar .tools-button-container ion-button {\n  width: 24px;\n  height: 24px;\n  font-size: 11px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n.color-thickness-picker-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px 5%;\n  background-color: #F8F9FB;\n  height: 112px;\n  max-height: 112px;\n  position: absolute;\n  z-index: 999;\n  overflow: hidden;\n}\n.color-thickness-picker-container .range {\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n.text-edit-button {\n  font-size: 8px !important;\n}\n.continue-button-container {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n.bg-img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-range {\n  --bar-height: 8px;\n  --knob-size: 24px;\n  --height: 30px;\n}\nion-range::part(bar) {\n  background-color: transparent;\n  background-image: url('thickness-slider.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\nion-range::part(bar-active) {\n  background-color: transparent;\n}\nion-range::part(knob) {\n  border: 2px solid #fff;\n  top: calc(50% - 2px - var(--knob-size) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLWFubm90YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBR0E7RUFDRSxpQ0FBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU9BO0VBQ0UseUJBQUE7QUFKRjtBQU9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUpGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUpGO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpGO0FBT0E7RUFDRSw2QkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBSkY7QUFPQTtFQUNFLDZCQUFBO0FBSkY7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsMkNBQUE7QUFKRiIsImZpbGUiOiJpbWFnZS1hbm5vdGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5jYW52YXMtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uY2FudmFzLWNvbnRhaW5lci1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0Y4RjlGQjtcblxuICAudG9vbHMtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkI7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5jb2xvci10aGlja25lc3MtcGlja2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQjtcbiAgaGVpZ2h0OiAxMTJweDtcbiAgbWF4LWhlaWdodDogMTEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5yYW5nZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuXG4udGV4dC1lZGl0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250aW51ZS1idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uYmctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW9uLXJhbmdlIHtcbiAgLS1iYXItaGVpZ2h0OiA4cHg7XG4gIC0ta25vYi1zaXplOiAyNHB4O1xuICAtLWhlaWdodDogMzBweDtcbn1cblxuaW9uLXJhbmdlOjpwYXJ0KGJhcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90aGlja25lc3Mtc2xpZGVyLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tcmFuZ2U6OnBhcnQoYmFyLWFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJhbmdlOjpwYXJ0KGtub2IpIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "mu+s":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/image-annotation/image-annotation.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ImageAnnotationPageModule */

    /***/
    function muS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageAnnotationPageModule", function () {
        return ImageAnnotationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _image_annotation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-annotation-routing.module */
      "wbWn");
      /* harmony import */


      var _image_annotation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image-annotation.page */
      "2OWm");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var ImageAnnotationPageModule = function ImageAnnotationPageModule() {
        _classCallCheck(this, ImageAnnotationPageModule);
      };

      ImageAnnotationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_annotation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageAnnotationPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_image_annotation_page__WEBPACK_IMPORTED_MODULE_6__["ImageAnnotationPage"]]
      })], ImageAnnotationPageModule);
      /***/
    },

    /***/
    "wbWn":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/image-annotation/image-annotation-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ImageAnnotationPageRoutingModule */

    /***/
    function wbWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageAnnotationPageRoutingModule", function () {
        return ImageAnnotationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _image_annotation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-annotation.page */
      "2OWm");

      var routes = [{
        path: '',
        component: _image_annotation_page__WEBPACK_IMPORTED_MODULE_3__["ImageAnnotationPage"]
      }];

      var ImageAnnotationPageRoutingModule = function ImageAnnotationPageRoutingModule() {
        _classCallCheck(this, ImageAnnotationPageRoutingModule);
      };

      ImageAnnotationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImageAnnotationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-image-annotation-image-annotation-module-es5.js.map