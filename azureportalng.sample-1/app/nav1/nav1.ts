namespace Sample1 {

    class Nav1 extends AzurePortalNg.BladeNav {
        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            AzurePortalNg.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);

            this.navItems = [
                new AzurePortalNg.BladeNavItem('Navigation 1 (BladeNav)', '/app/nav1/nav1.html'),
                new AzurePortalNg.BladeNavItem('Blade 1-1 (BladeList)', '/app/blade11/blade11.html', null, null, true, this.callback1, this),
                new AzurePortalNg.BladeNavItem('Blade 2 (BladeList)', '/app/blade2/blade2.html'),
                new AzurePortalNg.BladeNavItem('Blade 2-1 (BladeList)', '/app/blade21/blade21.html'),
                new AzurePortalNg.BladeNavItem('List 1 (BladeList)', '/app/list1/list1.html'),
                new AzurePortalNg.BladeNavItem('Detail 1 (BladeDetail)', '/app/detail1/detail1.html'),
                new AzurePortalNg.BladeNavItem(),
                new AzurePortalNg.BladeNavItem('no path'),
                new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
            ];

            this.statusbar = 'Nav 1 loaded.';
        }

        //#endregion

        //#region Methods

        onNavigateTo(path: string) {
            AzurePortalNg.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') { return; }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        }

        callback1() {
            console.log(this);
        }

        //#endregion
    }

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sample1App').controller('nav1', ['azurePortalNg.portalService', Nav1]);
    })();

    //#endregion
}