'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@angular/core');
var core$1 = require('@ionic-native/core');

var DiskCheckPlugin = /** @class */ (function (_super) {
    tslib.__extends(DiskCheckPlugin, _super);
    function DiskCheckPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiskCheckPlugin.prototype.info = function (options) { return cordova(this, "info", {}, arguments); };
    DiskCheckPlugin.pluginName = "DiskCheckPlugin";
    DiskCheckPlugin.plugin = "sdev99-cordova-disk-check-plugin";
    DiskCheckPlugin.pluginRef = "DiskCheckPlugin";
    DiskCheckPlugin.repo = "https://github.com/sdev99/sdev99-cordova-disk-check-plugin";
    DiskCheckPlugin.install = "";
    DiskCheckPlugin.installVariables = [];
    DiskCheckPlugin.platforms = ["Android", "iOS"];
    DiskCheckPlugin.decorators = [
        { type: core.Injectable }
    ];
    return DiskCheckPlugin;
}(core$1.IonicNativePlugin));

exports.DiskCheckPlugin = DiskCheckPlugin;
