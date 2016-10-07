"use strict";
var azureportalng = require('azureportalng');
var BladeNavItem = (function () {
    //#region Constructor
    function BladeNavItem(title, bladePath, hrefPath, roles, isVisible, callback, bladeNav) {
        if (title === void 0) { title = ''; }
        if (bladePath === void 0) { bladePath = ''; }
        if (hrefPath === void 0) { hrefPath = ""; }
        if (roles === void 0) { roles = ""; }
        if (isVisible === void 0) { isVisible = true; }
        if (callback === void 0) { callback = null; }
        if (bladeNav === void 0) { bladeNav = null; }
        this.title = title;
        this.bladePath = bladePath;
        this.hrefPath = hrefPath;
        this.roles = roles;
        this.isVisible = isVisible;
        this.callback = callback;
        this.bladeNav = bladeNav;
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
    }
    //#endregion
    //#region
    BladeNavItem.prototype.onNavItemClick = function () {
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
        if (this.callback != null) {
            this.callback();
        }
    };
    return BladeNavItem;
}());
exports.BladeNavItem = BladeNavItem;
