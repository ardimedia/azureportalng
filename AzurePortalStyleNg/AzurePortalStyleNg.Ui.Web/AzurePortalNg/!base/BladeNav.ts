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
    }

    //#endregion

    //#region Class Definition: BladeNavItem

    export class BladeNavItem {

        //#region Constructor

        constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback = () => { }) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
            if (callback != null) {
                callback();
            }
        }

        //#endregion
    }

    //#endregion
}
