import * as azureportalng from 'azureportalng';

export class BladeNavItem {

    //#region Constructor

    constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback: () => any = null, public bladeNav: azureportalng.BladeNav = null) {
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
    }

    //#endregion

    //#region

    onNavItemClick() {
        azureportalng.Debug.write('[azureportalng-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
        if (this.callback != null) {
            this.callback();
        }
    }

    //endregion
}
