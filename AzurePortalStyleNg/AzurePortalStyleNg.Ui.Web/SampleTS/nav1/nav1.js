//#region Class Definition
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Nav2 = (function (_super) {
    __extends(Nav2, _super);
    //#region Constructors
    function Nav2(portalService) {
        _super.call(this, portalService, '/SampleTS/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
        AzurePortalNg.Debug.write('[sampleTS-debug] \'Nav2\' constructor called.', [this]);
        this.navItems = [
            new AzurePortalNg.BladeNavItem('Navigation 1', '/SampleTS/nav1/nav1.html'),
            new AzurePortalNg.BladeNavItem('Blade 1-1', '/SampleTS/blade11/blade11.html'),
            new AzurePortalNg.BladeNavItem('Blade 2', '/SampleTS/blade2/blade2.html'),
            new AzurePortalNg.BladeNavItem('Blade 2-1', '/SampleTS/blade21/blade21.html'),
            new AzurePortalNg.BladeNavItem('List 1', '/SampleTS/list1/list1.html'),
            new AzurePortalNg.BladeNavItem('Detail 1', '/SampleTS/detail1/detail1.html'),
            new AzurePortalNg.BladeNavItem(),
            new AzurePortalNg.BladeNavItem('no path'),
            new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
        ];
        this.statusbar = 'Nav 1 loaded.';
    }
    return Nav2;
})(AzurePortalNg.BladeNav);
//#endregion
//#region Angular Registration
(function () {
    'use strict';
    angular.module('sampleTsApp').controller('nav2', ['azurePortalNg.portalService', Nav2]);
})();
//#endregion
//# sourceMappingURL=nav1.js.map