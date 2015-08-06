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
        _super.call(this, portalService, '/Sample1/nav2/nav2.html', 'Navigation 2', 'TypeScript based', 315);
        AzurePortalNg.Debug.write('[sample1-debug] \'Nav2\' constructor called.', [this]);
        this.navItems = [
            new AzurePortalNg.BladeNavItem('Navigation 1', '/Sample1/nav1/nav1.html'),
            new AzurePortalNg.BladeNavItem('Navigation 2', '/Sample1/nav2/nav2.html'),
            new AzurePortalNg.BladeNavItem('Blade 1', '/Sample1/blade1/blade1.html'),
            new AzurePortalNg.BladeNavItem('Blade 1-1', '/Sample1/blade11/blade11.html'),
            new AzurePortalNg.BladeNavItem('Blade 2', '/Sample1/blade2/blade2.html'),
            new AzurePortalNg.BladeNavItem('Blade 2-1', '/Sample1/blade21/blade21.html'),
            new AzurePortalNg.BladeNavItem('List 1', '/Sample1/list1/list1.html'),
            new AzurePortalNg.BladeNavItem('Detail 1', '/Sample1/detail1/detail1.html'),
            new AzurePortalNg.BladeNavItem(),
            new AzurePortalNg.BladeNavItem('no path'),
            new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
        ];
        this.statusbar = 'Nav 2...';
    }
    return Nav2;
})(AzurePortalNg.BladeNav);
//#endregion
//#region Angular Registration
(function () {
    'use strict';
    angular.module('sampleapp').controller('nav2', ['azurePortalNg.portalService', Nav2]);
})();
//#endregion
