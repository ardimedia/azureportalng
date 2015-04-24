module AzurePortalNg {
    'use strict';

    export class ListViewModel extends BaseViewModel {

        //#region Properties

        listItems: Array<any>;

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string , subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
        }

        //#endregion

        //#region Methods

        activate(): angular.IHttpPromise<any> {
            var that: ListViewModel = this;

            return super.getDataList().success(function (data: any) {
                that.listItems = data;
            });

            return;
        }

        //#endregion

        //#endregion
    }

}