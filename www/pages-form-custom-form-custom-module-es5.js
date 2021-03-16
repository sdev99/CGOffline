(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-custom-form-custom-module"], {
    /***/
    "9nib":
    /*!*********************************************************!*\
      !*** ./src/app/pages/form-custom/form-custom.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function nib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.dedicated-mode {\n  --background: #F6F9FB;\n}\nion-content.dedicated-mode ion-list {\n  width: 70%;\n  border-radius: 12px;\n  margin: 20px auto 0;\n}\nion-content.dedicated-mode .text-bottom-msg {\n  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);\n  margin-top: 40px;\n  color: #171538;\n  padding: 0 16px;\n  background-color: #ffffff;\n}\nion-content.dedicated-mode .text-bottom-msg ion-label {\n  padding: 16px 0;\n}\nion-content.dedicated-mode .text-bottom-msg .action-btn {\n  width: 200px;\n  margin: 0;\n  margin-left: 16px;\n}\nion-content ion-list .list-item-container {\n  padding: 1px 0;\n}\nion-content ion-list ion-list-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-top: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n  --border-width: 1px 0 0;\n  --border-style: solid;\n  --border-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list ion-list-header h6 {\n  margin: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content ion-list ion-list-header .note-item {\n  margin: 0;\n}\nion-content ion-list ion-list-header .note-item ion-label {\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  color: #171538;\n}\nion-content ion-list ion-list-header .form-item {\n  margin: 0;\n}\nion-content ion-list ion-list-header ion-item:last-child {\n  margin-bottom: 12px;\n}\nion-content ion-list .hr-line {\n  margin: 0 23px 16px;\n  width: auto;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list .hr-line-full {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(74, 144, 226, 0.2);\n}\nion-content ion-list ion-item {\n  --min-height: 18px;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-end: 0;\n  margin: 0 23px;\n}\nion-content ion-list ion-item ion-radio {\n  --border-radius: 12px;\n  --color: #A1A8CA;\n  --color-checked: #A1A8CA;\n  --inner-border-radius: 11px;\n  margin-right: 13px;\n}\nion-content ion-list ion-item ion-checkbox {\n  --border-color: #A1A8CA;\n  --border-color-checked: #A1A8CA;\n  --checkmark-color: #A1A8CA;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 2px;\n  --background-checked: transparent;\n  --background: transparent;\n}\nion-content ion-list ion-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content ion-list ion-item:last-child {\n  margin-bottom: 14px;\n}\nion-content ion-list ion-item.form-item ion-icon {\n  width: 17.31px;\n  height: 20px;\n  margin-right: 12px;\n}\nion-content ion-list ion-item.form-item ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  color: #2A6FDB;\n}\nion-content ion-list ion-item.date-item .date-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: 1px solid #E8EAF2;\n  border-radius: 3px;\n  padding: 2px 16px;\n  width: 150px;\n}\nion-content ion-list ion-item.date-item ion-datetime {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #777595;\n}\nion-content ion-list ion-item.time-item .time-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nion-content ion-list ion-item.time-item ion-datetime {\n  width: 120px;\n  border: 1px solid #E8EAF2;\n  border-radius: 3px;\n  padding: 2px 16px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  height: 40px;\n  color: #777595;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\nion-content ion-list ion-item.time-item .am-pm-btns {\n  border: 1px solid #E8EAF2;\n  border-radius: 5px;\n  height: 40px;\n  margin-left: 16px;\n}\nion-content ion-list ion-item.time-item .am-pm-btns ion-button {\n  margin: 0;\n  height: 100%;\n  padding: 0 8px;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: #777595;\n  text-align: center;\n  background-color: #F7FAFE;\n}\nion-content ion-list ion-item.time-item .am-pm-btns ion-button.active {\n  border: 1px solid rgba(74, 144, 226, 0.5);\n  border-radius: 5px;\n  background-color: #ffffff;\n}\nion-content ion-list .additional-comment {\n  margin: 23px;\n}\nion-content ion-list .additional-comment ion-label {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  color: #171538;\n}\nion-content ion-list .additional-comment .hr-line-full {\n  margin-top: 16px;\n}\nion-content ion-list .additional-comment ion-textarea {\n  margin-top: 16px;\n  --border-radius: 3px;\n  --placeholder-color: #A1A8CA;\n  --color: #A1A8CA;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E8EAF2;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\nion-content ion-list .notes-view {\n  margin: 16px 23px;\n  background: #F7FAFE;\n  padding: 5px 10px;\n}\nion-content ion-list .notes-view .add-note-btn {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 21px;\n  color: #2A6FDB;\n  height: 40px;\n}\nion-content ion-list .notes-view ion-textarea {\n  margin-top: 8px;\n  --border-radius: 3px;\n  --placeholder-color: #A1A8CA;\n  --color: #A1A8CA;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E8EAF2;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\nion-content ion-list .image-view {\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border-radius: 4px;\n  overflow: hidden;\n}\nion-content ion-list .image-view ion-img {\n  width: 100%;\n  height: calc(100% - 40px);\n  background-color: #E6EFFB;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content ion-list .image-view .close-btn {\n  width: 100%;\n  background-color: #D6E5F9;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nion-content ion-list .image-view .close-btn ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: #777595;\n}\nion-content ion-list .image-view .close-btn ion-button.edit-btn {\n  height: 27px;\n  width: 27px;\n}\nion-content ion-list .add-image {\n  margin-bottom: 16px;\n  background: #F7FAFE;\n  min-height: 200px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-list .add-image ion-img {\n  width: 100%;\n  height: 100%;\n}\nion-content ion-list .add-image ion-button.add-img-btn {\n  height: auto;\n}\nion-content ion-list .add-image ion-button.add-img-btn ion-icon {\n  width: 80px;\n  height: 80px;\n}\nion-content ion-list .picture-additional-text {\n  --border-radius: 3px;\n  --placeholder-color: #A1A8CA;\n  --color: #A1A8CA;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  width: auto;\n  border: 1px solid #E8EAF2;\n  background: #FFFFFF;\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\nion-content ion-list .text-bottom-msg {\n  font-family: IBM Plex Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #171538;\n  padding: 16px 32px;\n}\nion-content ion-list .action-btn {\n  width: 100%;\n  margin: 0;\n  --border-radius: 3px;\n  border-radius: 3px;\n  overflow: hidden;\n}\nion-content ion-list .photo-view-container {\n  margin: 0 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tY3VzdG9tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLHFCQUFBO0FBTEo7QUFPSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTE47QUFRSTtFQUNFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUE47QUFTTTtFQUNFLGVBQUE7QUFQUjtBQVVNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQVJSO0FBY0k7RUFDRSxjQUFBO0FBWk47QUFlSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkE3Q2M7RUE4Q2QsbUJBOUNjO0VBK0NkLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQWJOO0FBZU07RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJSO0FBZ0JNO0VBQ0UsU0FBQTtBQWRSO0FBZ0JRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFkVjtBQWtCTTtFQUNFLFNBQUE7QUFoQlI7QUFtQk07RUFDRSxtQkFBQTtBQWpCUjtBQXFCSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQW5CTjtBQXNCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFwQk47QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQXJCTjtBQXVCTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFyQlI7QUF3Qk07RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FBdEJSO0FBMEJNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXhCUjtBQTJCTTtFQUNFLG1CQUFBO0FBekJSO0FBOEJRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTVCVjtBQStCUTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE3QlY7QUFrQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFoQ1Y7QUFtQ1E7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBakNWO0FBc0NRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFwQ1Y7QUF1Q1E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXJDVjtBQXdDUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF0Q1Y7QUF3Q1U7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF0Q1o7QUF3Q1k7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF0Q2Q7QUE4Q0k7RUFDRSxZQTFPYztBQThMcEI7QUE4Q007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBNUNSO0FBK0NNO0VBQ0UsZ0JBQUE7QUE3Q1I7QUFnRE07RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTlDUjtBQW1ESTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWpETjtBQW1ETTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBakRSO0FBb0RNO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWxEUjtBQXNESTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBckROO0FBdURNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBckRSO0FBd0RNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdERSO0FBd0RRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF0RFY7QUF3RFU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXREWjtBQTZESTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEzRE47QUE2RE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTNEUjtBQThETTtFQUNFLFlBQUE7QUE1RFI7QUE4RFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVEVjtBQWlFSTtFQUNFLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUEvRE47QUFrRUk7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWhFTjtBQW1FSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBakVOO0FBb0VJO0VBQ0UsY0FBQTtBQWxFTiIsImZpbGUiOiJmb3JtLWN1c3RvbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZ0hvcml6b250YWw6IDIzcHg7XG5pb24taGVhZGVyIHtcblxufVxuXG5pb24tY29udGVudCB7XG4gICYuZGVkaWNhdGVkLW1vZGUge1xuICAgIC0tYmFja2dyb3VuZDogI0Y2RjlGQjtcblxuICAgIGlvbi1saXN0IHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgICB9XG5cbiAgICAudGV4dC1ib3R0b20tbXNnIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgY29sb3I6ICMxNzE1Mzg7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxcHggMDtcbiAgICB9XG5cbiAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZ0hvcml6b250YWw7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZ0hvcml6b250YWw7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAxNDQsIDIyNiwgMC4yKTtcblxuICAgICAgaDYge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgfVxuXG4gICAgICAubm90ZS1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZm9ybS1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaHItbGluZSB7XG4gICAgICBtYXJnaW46IDAgJHBhZGRpbmdIb3Jpem9udGFsIDE2cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgfVxuXG4gICAgLmhyLWxpbmUtZnVsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgbWFyZ2luOiAwICRwYWRkaW5nSG9yaXpvbnRhbDtcblxuICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAtLWNvbG9yOiAjQTFBOENBO1xuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNBMUE4Q0E7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgfVxuXG4gICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI0ExQThDQTtcbiAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0ExQThDQTtcbiAgICAgICAgLS1jaGVja21hcmstY29sb3I6ICNBMUE4Q0E7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgIH1cblxuICAgICAgJi5mb3JtLWl0ZW0ge1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB3aWR0aDogMTcuMzFweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjMkE2RkRCO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZGF0ZS1pdGVtIHtcbiAgICAgICAgLmRhdGUtZmllbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjNzc3NTk1O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudGltZS1pdGVtIHtcbiAgICAgICAgLnRpbWUtZmllbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RUFGMjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDE2cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBjb2xvcjogIzc3NzU5NTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFtLXBtLWJ0bnMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEVBRjI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NzU5NTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0ZBRkU7XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMTQ0LCAyMjYsIDAuNSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRpdGlvbmFsLWNvbW1lbnQge1xuICAgICAgbWFyZ2luOiAkcGFkZGluZ0hvcml6b250YWw7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMTcxNTM4O1xuICAgICAgfVxuXG4gICAgICAuaHItbGluZS1mdWxsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNBMUE4Q0E7XG4gICAgICAgIC0tY29sb3I6ICNBMUE4Q0E7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RUFGMjtcbiAgICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5ub3Rlcy12aWV3IHtcbiAgICAgIG1hcmdpbjogMTZweCAkcGFkZGluZ0hvcml6b250YWw7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjdGQUZFO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbiAgICAgIC5hZGQtbm90ZS1idG4ge1xuICAgICAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgY29sb3I6ICMyQTZGREI7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0ExQThDQTtcbiAgICAgICAgLS1jb2xvcjogI0ExQThDQTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFQUYyO1xuICAgICAgICBmb250LWZhbWlseTogSUJNIFBsZXggU2FucztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZS12aWV3IHtcbiAgICAgIC8vaGVpZ2h0OiAyMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFRkZCO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgfVxuXG4gICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENkU1Rjk7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICAgICAgY29sb3I6ICM3Nzc1OTU7XG5cbiAgICAgICAgICAmLmVkaXQtYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFkZC1pbWFnZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI0Y3RkFGRTtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlvbi1idXR0b24uYWRkLWltZy1idG4ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5waWN0dXJlLWFkZGl0aW9uYWwtdGV4dCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNBMUE4Q0E7XG4gICAgICAtLWNvbG9yOiAjQTFBOENBO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFQUYyO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGZvbnQtZmFtaWx5OiBJQk0gUGxleCBTYW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvdHRvbS1tc2cge1xuICAgICAgZm9udC1mYW1pbHk6IElCTSBQbGV4IFNhbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzE3MTUzODtcbiAgICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucGhvdG8tdmlldy1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwICRwYWRkaW5nSG9yaXpvbnRhbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "KBqV":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/form-custom/form-custom-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FormCustomPageRoutingModule */

    /***/
    function KBqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormCustomPageRoutingModule", function () {
        return FormCustomPageRoutingModule;
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


      var _form_custom_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-custom.page */
      "vyEn");

      var routes = [{
        path: '',
        component: _form_custom_page__WEBPACK_IMPORTED_MODULE_3__["FormCustomPage"]
      }];

      var FormCustomPageRoutingModule = function FormCustomPageRoutingModule() {
        _classCallCheck(this, FormCustomPageRoutingModule);
      };

      FormCustomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormCustomPageRoutingModule);
      /***/
    },

    /***/
    "fEoH":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-custom/form-custom.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fEoH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-portrait-orientation *ngIf=\"isShowOritationPortrait;else formView\"\n                          (close)=\"isShowOritationPortrait=false\"></app-portrait-orientation>\n\n<ng-template #formView>\n    <ion-header mode=\"ios\">\n        <ng-container *ngIf=\"sharedDataService.dedicatedMode; else personalMode\">\n            <app-modal-header-dm [modalTitle]=\"sharedDataService.getCurrentCheckedInEntityName()\"\n                                 (closeModal)=\"onClose()\"\n                                 [modalSubTitle]=\"formBuilderDetail?.title\"></app-modal-header-dm>\n        </ng-container>\n\n        <ng-template #personalMode>\n            <app-modal-header [modalTitle]=\"formBuilderDetail?.title\" (closeModal)=\"onClose()\"></app-modal-header>\n\n            <app-next-prev-toolbar content [isError]=\"(errorMessage && errorMessage.length>0)\"\n                                   [currentCount]=\"currentQuestionIndex\"\n                                   [totalCount]=\"questionElementIds?.length\" (next)=\"next()\"\n                                   (previous)=\"previous()\"></app-next-prev-toolbar>\n        </ng-template>\n\n        <app-warning-component *ngIf=\"errorMessage\" [message]=\"errorMessage\"></app-warning-component>\n\n    </ion-header>\n\n\n    <ion-content\n        #content\n        [scrollEvents]=\"true\"\n        (ionScrollEnd)=\"onScrollEnd($event)\"\n        (ionScroll)=\"onScroll($event)\"\n        mode=\"ios\"\n        [ngClass]=\"{'dedicated-mode':sharedDataService.dedicatedMode}\">\n\n        <div class=\"content-container\">\n            <Form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n\n                <ion-list lines=\"none\" mode=\"ios\">\n\n                    <ng-container *ngFor=\"let section of formBuilderDetail?.sections; let sectionIndex = index;\">\n                        <ng-container *ngIf=\"utilService.shouldShowSection(section)\">\n                            <app-section-title\n                                    [title]=\"UtilService.findObj(section.sectionTranslations, 'sectionTranslationLanguageId', sharedDataService.getLanguageIdForForm()).sectionTranslationTitle\">\n                            </app-section-title>\n\n                            <app-custom-questions-container\n                                    [sectionIndex]=\"sectionIndex\"\n                                    [sectionId]=\"section.sectionId\"\n                                    [questionElementIds]=\"questionElementIds\"\n                                    [questions]=\"section.questions\"\n                                    [isSubmitted]=\"isSubmitted\"\n                                    [formGroup]=\"formGroup\"\n                                    [section]=\"section\"\n                            ></app-custom-questions-container>\n                        </ng-container>\n                    </ng-container>\n\n\n                    <!--        End of form -->\n                    <ng-container\n                            *ngIf=\"!sharedDataService.dedicatedMode\">\n\n                        <div class=\"hr-line-full ion-margin-top\"></div>\n\n                        <ion-item class=\"ion-margin-vertical text-bottom-msg\">\n                            <ion-label class=\"ion-text-wrap ion-text-center\">\n                                You've reached the end of the form.\n                                Please check your answers and sign-off.\n                            </ion-label>\n                        </ion-item>\n\n                        <ion-item class=\"ion-margin-vertical ion-padding-bottom\">\n                            <ion-button type=\"submit\" expand=\"full\" class=\"action-btn\">Sign-Off</ion-button>\n                        </ion-item>\n\n                    </ng-container>\n\n\n                </ion-list>\n            </Form>\n\n            <div class=\"fill-vertical-space\"></div>\n            <!--        End of form -->\n            <ng-container *ngIf=\"sharedDataService.dedicatedMode\">\n                <ion-item class=\"text-bottom-msg\" lines=\"none\">\n                    <ion-label class=\"ion-text-wrap ion-padding\">\n                        You've reached the end of the form.\n                        Please check your answers and sign-off.\n                    </ion-label>\n                    <ion-button slot=\"end\" class=\"action-btn\" (click)=\"onSubmit()\">Sign-Off</ion-button>\n                </ion-item>\n            </ng-container>\n        </div>\n    </ion-content>\n</ng-template>\n\n\n\n";
      /***/
    },

    /***/
    "vyEn":
    /*!*******************************************************!*\
      !*** ./src/app/pages/form-custom/form-custom.page.ts ***!
      \*******************************************************/

    /*! exports provided: FormCustomPage */

    /***/
    function vyEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormCustomPage", function () {
        return FormCustomPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_custom_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-custom.page.html */
      "fEoH");
      /* harmony import */


      var _form_custom_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-custom.page.scss */
      "9nib");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/demo-data.service */
      "vH+u");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");
      /* harmony import */


      var _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/shared-data.service */
      "msgi");
      /* harmony import */


      var _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../modals/exit-confirmation/exit-confirmation.page */
      "GR7D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_enum_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/enum.service */
      "AIDl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_filehandler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/filehandler.service */
      "rz59");
      /* harmony import */


      var _services_observables_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/observables.service */
      "mxI+");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/account.service */
      "flj8");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/util.service */
      "2Rin");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/api.service */
      "H+bZ");

      var FormCustomPage = /*#__PURE__*/function () {
        function FormCustomPage(navCtrl, photoService, sharedDataService, observablesService, modalController, route, filehandlerService, screenOrientation, ngZone, apiService, utilService, accountService) {
          var _this = this;

          _classCallCheck(this, FormCustomPage);

          this.navCtrl = navCtrl;
          this.photoService = photoService;
          this.sharedDataService = sharedDataService;
          this.observablesService = observablesService;
          this.modalController = modalController;
          this.route = route;
          this.filehandlerService = filehandlerService;
          this.screenOrientation = screenOrientation;
          this.ngZone = ngZone;
          this.apiService = apiService;
          this.utilService = utilService;
          this.accountService = accountService;
          this.EnumService = _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"];
          this.UtilService = _services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"];
          this.errorMessage = '';
          this.isSubmitted = false;
          this.list = _services_demo_data_service__WEBPACK_IMPORTED_MODULE_5__["DemoDataService"].activityCustomForm.clone();
          this.answer = {};
          this.totalPage = 32;
          this.isShowOritationPortrait = false; // formBuilderDetail = JSON.parse('{"formId":154,"title":"Complex Form Logics","description":null,"formVersionId":237,"formVersionNo":1,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":262,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":374,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section 1"}],"questions":[{"questionId":662,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":262,"questionTranslations":[{"questionTranslationId":753,"questionTranslationLanguageId":35,"questionTranslationTitle":"This Question has choices which each has a different logic rule to test.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":660,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":779,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"1- if chosen, makes section 2 visible."}]},{"answerChoiceAttributeId":661,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":780,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"2- if chosen, makes question 2 hidden"}]},{"answerChoiceAttributeId":662,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":781,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"3- if chosen, duplicates Question 3"}]},{"answerChoiceAttributeId":663,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":782,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"4- if chosen, marks question as failed"}]},{"answerChoiceAttributeId":664,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":783,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"5- if chosen, notifies a user"}]},{"answerChoiceAttributeId":665,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":784,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"6- if chosen, makes section 3 hidden"}]}],"questionLogics":[{"questionLogicId":74,"questionChoiceSetSequence":1,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":1,"questionActionOnID":"2-0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":75,"questionChoiceSetSequence":2,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"1-2","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":76,"questionChoiceSetSequence":3,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-3","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":77,"questionChoiceSetSequence":4,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":4,"questionActionOnID":"0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},{"questionLogicId":78,"questionChoiceSetSequence":5,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":5,"questionActionOnID":"0","questionID":662,"questionLogicOrder":0,"notificationID":65,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":true,"isSMSNotification":true,"selectedUsersAndGroups":[{"notifyUserAndGroupId":46,"notificationID":65,"userId":"b01f4cf5-c26c-4c8f-be94-a7c68fede752","groupId":null,"name":"Arvin2 Biricik2","notifyType":1}]}},{"questionLogicId":79,"questionChoiceSetSequence":6,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":2,"questionActionOnID":"3-0","questionID":662,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}}],"questionAttachments":[]},{"questionId":663,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":2,"sectionID":262,"questionTranslations":[{"questionTranslationId":754,"questionTranslationLanguageId":35,"questionTranslationTitle":"This question will be hidden if Question 1-Choice 2 is chosen.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":664,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":262,"questionTranslations":[{"questionTranslationId":755,"questionTranslationLanguageId":35,"questionTranslationTitle":"This question will be hidden if  Question 1-Choice 2 is chosen.","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":263,"sectionIsHidden":true,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":375,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section 2 - This section will be hidden by default. And shown when Section 1- Question 1-Choice 1 is chosen."}],"questions":[{"questionId":665,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":1,"questionDisplayOrder":1,"sectionID":263,"questionTranslations":[{"questionTranslationId":756,"questionTranslationLanguageId":35,"questionTranslationTitle":"Section2-Question1","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":666,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":785,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"no logic option 1"}]},{"answerChoiceAttributeId":667,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"white","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":786,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"no logic option 2"}]}],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":264,"sectionIsHidden":false,"sectionDisplayOrder":3,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":376,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"section 3. This is visible by default and will be hidden if  Section 1- Question 1-Choice 6 is chosen."}],"questions":[{"questionId":666,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":1,"sectionID":264,"questionTranslations":[{"questionTranslationId":757,"questionTranslationLanguageId":35,"questionTranslationTitle":"Dummy question","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');

          this.formBuilderDetail = JSON.parse('{"formId":328,"title":"Duplicate Section-Question Logic Test","description":null,"formVersionId":489,"formVersionNo":4,"isDraft":false,"formTypeID":1,"companyId":27,"defaultLanguageId":35,"sections":[{"sectionId":627,"sectionIsHidden":false,"sectionDisplayOrder":1,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":769,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section One"}],"questions":[{"questionId":1874,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":1,"sectionID":627,"questionTranslations":[{"questionTranslationId":2146,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question One","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":1520,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1724,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"1.. Duplicate Question 2"}]},{"answerChoiceAttributeId":1521,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1725,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"2. Duplicate Question 3"}]},{"answerChoiceAttributeId":1522,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1726,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"3. Duplicate Question 4"}]},{"answerChoiceAttributeId":1523,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1727,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"4. Duplicate Question 3"}]},{"answerChoiceAttributeId":1524,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1728,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"5. Duplicate Section 3"}]}],"questionLogics":[{"questionLogicId":408,"questionChoiceSetSequence":1,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-2","questionID":1874,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]},{"questionLogicId":409,"questionChoiceSetSequence":2,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-3","questionID":1874,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]},{"questionLogicId":410,"questionChoiceSetSequence":3,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-4","questionID":1874,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]},{"questionLogicId":411,"questionChoiceSetSequence":4,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"1-3","questionID":1874,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]},{"questionLogicId":412,"questionChoiceSetSequence":5,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"3-0","questionID":1874,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]}],"questionAttachments":[]},{"questionId":1875,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":2,"sectionID":627,"questionTranslations":[{"questionTranslationId":2147,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Two","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":1876,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":3,"sectionID":627,"questionTranslations":[{"questionTranslationId":2148,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Three","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]},{"questionId":1877,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":false,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":3,"questionDisplayOrder":4,"sectionID":627,"questionTranslations":[{"questionTranslationId":2149,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question Four","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[],"questionLogics":[],"questionAttachments":[]}],"tasks":[]},{"sectionId":628,"sectionIsHidden":false,"sectionDisplayOrder":2,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":770,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Two"}],"questions":[{"questionId":1878,"questionIsHidden":false,"questionIsRequired":false,"allowInstructionOrNote":false,"allowTextLabel":false,"shouldShowOptionalComment":false,"allowAttachment":false,"allowQuestionLogic":true,"isExistingFile":false,"shouldShowAnswerChoiceTemplate":false,"selectedAnswerTypeId":2,"questionDisplayOrder":1,"sectionID":628,"questionTranslations":[{"questionTranslationId":2150,"questionTranslationLanguageId":35,"questionTranslationTitle":"Question One","questionTranslationInstructionOrNote":"","questionTranslationTextLabel":""}],"answerChoiceAttributes":[{"answerChoiceAttributeId":1525,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1729,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Duplicate Section Three"}]},{"answerChoiceAttributeId":1526,"answerChoiceAttributeText":null,"answerChoiceAttributeColor":"black","answerChoiceAttributeScoreOrWeight":0,"answerChoiceAttributeHeaders":[{"answerChoiceAttributeHeaderId":1730,"answerChoiceAttributeHeaderLanguageId":35,"answerChoiceAttributeHeaderTitle":"Duplicate Section Four"}]}],"questionLogics":[{"questionLogicId":413,"questionChoiceSetSequence":1,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"3-0","questionID":1878,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]},{"questionLogicId":414,"questionChoiceSetSequence":2,"questionChoiceSetTypeID":1,"questionOperatorTypeID":null,"integerValue":null,"decimalValue":null,"dateValue":null,"timeValue":null,"hourFormatID":null,"questionActionTypeID":3,"questionActionOnID":"4-0","questionID":1878,"questionLogicOrder":0,"notificationID":null,"questionLogicNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"selectedSecQuesModule":null,"availableSecQuesModules":[],"questionActionTypeList":[]}],"questionAttachments":[]}],"tasks":[]},{"sectionId":629,"sectionIsHidden":false,"sectionDisplayOrder":3,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":771,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Three"}],"questions":[],"tasks":[]},{"sectionId":630,"sectionIsHidden":false,"sectionDisplayOrder":4,"isRiskAssessmentSection":false,"isHAVSection":false,"isAccidentReportSection":false,"sectionTranslations":[{"sectionTranslationId":772,"sectionTranslationLanguageId":35,"sectionTranslationTitle":"Section Four"}],"questions":[],"tasks":[]}],"selectedLanguage":null,"selectedLanguages":[{"languageId":35,"languageLabel":"English"}],"supportedLanguages":[],"answerTypes":[],"answerChoiceColors":null,"hourFormats":null,"questionActionOnList":null,"questionActionTypes":null,"questionChoiceSetTypes":null,"questionOperatorTypes":null,"userList":null,"groupList":null,"workPermitDetails":{"workPermitId":0,"totalScore":null,"hasExpirationDate":false,"hasExpiresOn":false,"expiresOnDate":null,"hasExpiresAfter":false,"durationValue":null,"hasPermitIssuedNotification":false,"hasPermitNotIssuedNotification":false,"operatorTypeID":null,"durationTypeID":null,"permitIssuedNotificationID":null,"permitNotIssuedNotificationID":null,"formVersionID":0,"permitNotIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]},"permitIssuedNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"accidentReport":{"accidentReportId":0,"hasAccidentNotification":false,"notificationID":null,"formVersionID":0,"accidentNotification":{"notifyUser":true,"selectedUserId":"00000000-0000-0000-0000-000000000000","selectedUsers":[],"notifyGroup":false,"selectedGroupId":0,"selectedGroups":[],"isSystemNotification":true,"isEmailNotification":false,"isSMSNotification":false,"selectedUsersAndGroups":[]}},"modifiedBy":"00000000-0000-0000-0000-000000000000","folderDocumentList":null,"folderDocumentTreeList":null,"signedUsers":[],"taskTemplates":[]}');
          this.questionElementIds = [];
          this.currentQuestionIndex = 0;

          this.handleOrientation = function () {
            if (_this.sharedDataService.dedicatedMode) {
              if (_this.screenOrientation.type.includes('landscape')) {
                _this.screenOrientation.unlock();

                _this.isShowOritationPortrait = true;
              } else {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"].isLocalHost()) {
                  _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
              }

              _this.screenOrientationSubscribe = _this.screenOrientation.onChange().subscribe(function () {
                _this.ngZone.run(function () {
                  if (_this.screenOrientation.type.includes('portrait')) {
                    if (!_services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"].isLocalHost()) {
                      _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                    }

                    _this.isShowOritationPortrait = false;
                  }

                  if (_this.screenOrientation.type.includes('landscape')) {
                    _this.isShowOritationPortrait = true;
                  }
                });
              });
            }
          };

          this.onScrollEnd = function (event) {
            if (_this.scrollingDetail) {
              var scrollTop = _this.scrollingDetail.scrollTop;

              if (scrollTop === 0) {
                _this.currentQuestionIndex = 0;
              } else {
                _this.questionElementIds.map(function (elementId, key) {
                  var _a;

                  var y = (_a = document.getElementById(elementId)) === null || _a === void 0 ? void 0 : _a.offsetTop;

                  if (scrollTop >= y) {
                    _this.currentQuestionIndex = key;
                    return;
                  }
                });
              }
            }
          };

          this.onScroll = function (event) {
            _this.scrollingDetail = event.detail;
          };

          this.scrollToQuestion = function () {
            var _a;

            var elementId = _this.questionElementIds[_this.currentQuestionIndex];
            var y = (_a = document.getElementById(elementId)) === null || _a === void 0 ? void 0 : _a.offsetTop;

            _this.content.scrollToPoint(0, y, 500);
          };

          this.user = accountService.userValue;

          if (sharedDataService.formBuilderDetails) {
            this.formBuilderDetail = sharedDataService.formBuilderDetails;
          } // Dynamic form controls add


          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({});
          var sections = this.formBuilderDetail.sections;

          this.utilService.questionElementIdsUpdate = function (questionElementIds) {
            _this.questionElementIds = questionElementIds;
          };

          this.utilService.addFormControlsForVisibleFields(sections, this.formGroup); // --End
        }

        _createClass(FormCustomPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sharedDataService.isOpenImageAnnotation = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.handleOrientation();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            if (this.sharedDataService.dedicatedMode) {
              if (!this.sharedDataService.isOpenImageAnnotation) {
                if (!_services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"].isLocalHost()) {
                  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                  this.screenOrientationSubscribe.unsubscribe();
                }
              }
            }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modals_exit_confirmation_exit_confirmation_page__WEBPACK_IMPORTED_MODULE_8__["ExitConfirmationPage"],
                        swipeToClose: false,
                        showBackdrop: false,
                        backdropDismiss: false,
                        animated: true,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      modal.onWillDismiss().then(function (_ref) {
                        var data = _ref.data;

                        if (data) {
                          _this2.onBack();
                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onBack",
          value: function onBack() {
            if (this.sharedDataService.viewFormFor === _services_enum_service__WEBPACK_IMPORTED_MODULE_10__["EnumService"].ViewFormForType.Induction) {
              this.navCtrl.navigateBack('/checkinout-confirm');
            } else {
              this.navCtrl.back();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.isSubmitted = true;
            this.errorMessage = '';
            this.sharedDataService.saveFormAnswers(this.apiService, this.formGroup, this.formBuilderDetail, this.user, function (status, result) {
              if (status) {} else {
                _this3.errorMessage = result;
              }
            });
          } // Navigate to question

        }, {
          key: "previous",
          value: function previous() {
            if (this.currentQuestionIndex > 0) {
              this.currentQuestionIndex--;
              this.scrollToQuestion();
            }
          }
        }, {
          key: "next",
          value: function next() {
            if (this.currentQuestionIndex < this.questionElementIds.length - 1) {
              this.currentQuestionIndex++;
              this.scrollToQuestion();
            }
          }
        }]);

        return FormCustomPage;
      }();

      FormCustomPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"]
        }, {
          type: _services_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataService"]
        }, {
          type: _services_observables_service__WEBPACK_IMPORTED_MODULE_13__["ObservablesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _services_filehandler_service__WEBPACK_IMPORTED_MODULE_12__["FilehandlerService"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__["ScreenOrientation"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"]
        }];
      };

      FormCustomPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]]
        }]
      };
      FormCustomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-custom',
        template: _raw_loader_form_custom_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_custom_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormCustomPage);
      /***/
    },

    /***/
    "xev1":
    /*!*********************************************************!*\
      !*** ./src/app/pages/form-custom/form-custom.module.ts ***!
      \*********************************************************/

    /*! exports provided: FormCustomPageModule */

    /***/
    function xev1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormCustomPageModule", function () {
        return FormCustomPageModule;
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


      var _form_custom_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-custom-routing.module */
      "KBqV");
      /* harmony import */


      var _form_custom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-custom.page */
      "vyEn");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var FormCustomPageModule = function FormCustomPageModule() {
        _classCallCheck(this, FormCustomPageModule);
      };

      FormCustomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_custom_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCustomPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_form_custom_page__WEBPACK_IMPORTED_MODULE_6__["FormCustomPage"]]
      })], FormCustomPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-form-custom-form-custom-module-es5.js.map