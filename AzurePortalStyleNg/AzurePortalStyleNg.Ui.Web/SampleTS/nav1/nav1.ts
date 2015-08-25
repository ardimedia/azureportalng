//#region Class Definition

class Nav2 extends AzurePortalNg.BladeNav {

    //#region Constructors

    constructor(portalService: AzurePortalNg.PortalService) {
        super(portalService, '/SampleTS/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
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

    //#endregion
}

//#endregion

//#region Angular Registration

(function () {
    'use strict';
    angular.module('sampleTsApp').controller('nav2', ['azurePortalNg.portalService', Nav2]);
})();

//#endregion
