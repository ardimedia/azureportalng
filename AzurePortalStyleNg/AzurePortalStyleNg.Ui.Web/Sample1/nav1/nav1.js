//#region Class Definition
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Nav1 = (function (_super) {
    __extends(Nav1, _super);
    //#region Constructors
    function Nav1(portalService) {
        _super.call(this, portalService, '/Sample1/nav1/nav1.html', 'Navigation 1', 'Sample 1', 315);
        AzurePortalNg.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);
        this.navItems = [
            new AzurePortalNg.BladeNavItem('Blade 1', '/Sample1/blade1/blade1.html', ''),
            new AzurePortalNg.BladeNavItem('Blade 2', '/Sample1/blade2/blade2.html', ''),
        ];
        this.activate();
    }
    return Nav1;
})(AzurePortalNg.BladeNav);
//#endregion
//#region Angular Registration
(function () {
    'use strict';
    angular.module('sampleapp').controller('nav1', ['azurePortalNg.portalService', Nav1]);
})();
//#endregion
//# sourceMappingURL=nav1.js.map