module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeList

    export class BladeList extends BladeData {

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        activate(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.activate\' called.', [this]);
            //var that = this;

            return super.getDataList()

            //return super.getDataList().success(function (data: any) {
            //    that.listItems = data;
            //});

            //return;
        }

        //#endregion
    }

    //#endregion
}