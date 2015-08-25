//#region Class Definition

class Nav2 extends AzurePortalNg.BladeNav {

    //#region Constructors

    constructor(portalService: AzurePortalNg.PortalService) {
        super(portalService, '/Sample1/nav2/nav2.html', 'Navigation 2', 'TypeScript based', 315);
        AzurePortalNg.Debug.write('[sample1-debug] \'Nav2\' constructor called.', [this]);

        this.navItems = [
            new AzurePortalNg.BladeNavItem('Navigation 2', '/Sample1/nav2/nav2.html'),
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

    //#endregion
}

//#endregion

//#region Angular Registration

(function () {
    'use strict';
    angular.module('sampleapp').controller('nav2', ['azurePortalNg.portalService', Nav2]);
})();

//#endregion
