//#region Class Definition

class Nav1 extends AzurePortalNg.BladeNav {

    //#region Constructors

    constructor(portalService: AzurePortalNg.PortalService) {
        super(portalService, '/Sample1/nav1/nav1.html', 'Navigation 1', 'Sample 1', 315);
        AzurePortalNg.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);

        this.navItems = [
            new AzurePortalNg.BladeNavItem('Blade 1', '/Sample1/blade1/blade1.html', ''),
            new AzurePortalNg.BladeNavItem('Blade 2', '/Sample1/blade2/blade2.html', ''),
        ];

        this.activate();
    }

    //#endregion

    //#region Methods

    //onNavigateTo(path: string) {
    //    AzurePortalNg.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
    //    //this.portalService.bladeService.clearLevel(2);
    //    //this.portalService.bladeService.addBladeOld(path);
    //}

    //#endregion
}

//#endregion

//#region Angular Registration

(function () {
    'use strict';
    angular.module('sampleapp').controller('nav1', ['azurePortalNg.portalService', Nav1]);
})();

//#endregion
