module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeDetail

    export class BladeDetail extends BladeData {

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        onActivate(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail.onActivate\' called.', [this]);

            return super.getDataDetail()
        }

        //#endregion
    }

    //#endregion
}