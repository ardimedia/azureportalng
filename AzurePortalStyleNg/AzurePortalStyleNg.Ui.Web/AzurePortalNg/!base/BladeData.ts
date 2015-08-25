module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeData

    export class BladeData extends Blade {

        //#region Properties

        item: any = null;

        items: Array<any> = new Array<any>();

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);

            //this.blade = this;
        }

        //#endregion

        //#region Methods

        //#region GetDataList

        getDataList(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.getDataList\' called.', [this]);
            var that = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            return that.onGetDataList().success(function (data: any) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data: any, status: any, headers: any, config: any) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        }

        protected onGetDataList(): angular.IHttpPromise<any> {
            throw new Error('[AzurePortalNg.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.');
        }

        //#endregion

        //#region GetDataDetail

        getDataDetail(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.getDataDetail\' called.', [this]);
            var that = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            return that.onGetDataDetail().success(function (data: any) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data: any, status: any, headers: any, config: any) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        }

        protected onGetDataDetail(): angular.IHttpPromise<any> {
            throw new Error('[AzurePortalNg.BladeData] \'onGetDataDetail\' is an abstract function. Define one in the derived class.');
        }

        //#endregion

        //#region setObsoleteLayoutProperites (override)

        /** Obsolete */
        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.setObsoleteLayoutProperites\' called.', [this]);

            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> do not uncomment, otherwise nav html pages will no longer work.
            }

            this.blade.isNavGrid = this.isNavGrid;

            super.setObsoleteLayoutProperites();
        }

        //#endregion

        //#endregion
    }

    //#endregion
}
