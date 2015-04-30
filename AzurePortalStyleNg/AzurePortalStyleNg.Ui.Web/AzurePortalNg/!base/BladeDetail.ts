module AzurePortalNg {
    'use strict';

    //#region Class Definition: DetailViewModel

    export class DetailViewModel extends BladeBase {

        //#region Properties

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion
    }

    //#endregion
}