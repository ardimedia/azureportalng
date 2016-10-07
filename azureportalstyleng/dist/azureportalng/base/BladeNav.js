"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var azureportalng = require('azureportalng');
var BladeNav = (function (_super) {
    __extends(BladeNav, _super);
    //#endregion
    //#region Constructor
    function BladeNav(portalService, path, title, subtitle, width) {
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        _super.call(this, portalService, path, title, subtitle, width);
        //#region Properties
        this.navItems = new Array();
        this.isNav = true;
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);
        _super.prototype.onNavigateTo = this.navigateTo;
    }
    return BladeNav;
}(azureportalng.BladeData));
exports.BladeNav = BladeNav;
