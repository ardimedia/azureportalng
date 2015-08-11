module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeNav

    export class BladeNav extends BladeData {

        //#region Properties

        navItems: Array<BladeNavItem> = new Array<BladeNavItem>();
        isNav: boolean = true;

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);

            super.onNavigateTo = this.navigateTo;
        }

        //#endregion

        //#region Methods

        //navigateTo(path: string) {
        //}

        onNavigateTo(path: string) {
            AzurePortalNg.Debug.write('[sample1-debug] \'BladeNav.onNavigateTo\' called.', [this, path]);
            //this.portalService.bladeArea.clearLevel(2);
            this.portalService.bladeArea.addBlade(path, this.blade.path);
        }

        //#endregion
    }

    //#endregion

    //#region Class Definition: BladeNavItem

    export class BladeNavItem {

        //#region Constructor

        constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
        }

        //#endregion
    }

    //#endregion
}
