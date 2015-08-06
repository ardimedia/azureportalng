var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeNav
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
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);
            _super.prototype.onNavigateTo = this.navigateTo;
        }
        //#endregion
        //#region Methods
        //navigateTo(path: string) {
        //}
        BladeNav.prototype.onNavigateTo = function (path) {
            AzurePortalNg.Debug.write('[sample1-debug] \'BladeNav.onNavigateTo\' called.', [this, path]);
            //this.portalService.bladeArea.clearLevel(2);
            this.portalService.bladeArea.addBlade(this.blade.path, path);
        };
        return BladeNav;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeNav = BladeNav;
    //#endregion
    //#region Class Definition: BladeNavItem
    var BladeNavItem = (function () {
        //#region Constructor
        function BladeNavItem(title, bladePath, hrefPath, roles, isVisible) {
            if (title === void 0) { title = ''; }
            if (bladePath === void 0) { bladePath = ''; }
            if (hrefPath === void 0) { hrefPath = ""; }
            if (roles === void 0) { roles = ""; }
            if (isVisible === void 0) { isVisible = true; }
            this.title = title;
            this.bladePath = bladePath;
            this.hrefPath = hrefPath;
            this.roles = roles;
            this.isVisible = isVisible;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
        }
        return BladeNavItem;
    })();
    AzurePortalNg.BladeNavItem = BladeNavItem;
})(AzurePortalNg || (AzurePortalNg = {}));
