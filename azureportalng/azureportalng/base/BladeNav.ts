import * as azureportalng from 'azureportalng';

export class BladeNav extends azureportalng.BladeData {
    //#region Properties

    navItems: Array<azureportalng.BladeNavItem> = new Array<azureportalng.BladeNavItem>();
    isNav: boolean = true;

    //#endregion

    //#region Constructor

    constructor(portalService: azureportalng.PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
        super(portalService, path, title, subtitle, width);
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);

        super.onNavigateTo = this.navigateTo;
    }

    //#endregion
}
