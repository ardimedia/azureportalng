module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeData

    export class BladeData extends Blade {

        //#region Properties

        item: any;

        items: Array<any> = new Array<any>();

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string, width: number = 300) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);

            this.blade = this;
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
                that.setObsoleteLayoutProperites();
            }).error(function (data: any, status: any, headers: any, config: any) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
                that.setObsoleteLayoutProperites();
            });
        }

        protected onGetDataList(): angular.IHttpPromise<any> {
            throw new Error('DEVELOPER: [onGetDataList] is an abstract function. Define one in the derived class.');
        }

        //#endregion

        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.setObsoleteLayoutProperites\' called.', [this]);

            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> do not uncomment, otherwise nav html pages will no longer work.
            }

            this.blade.isNavGrid = this.isNavGrid;

            super.setObsoleteLayoutProperites();
        }

        //#endregion
    }

    //#endregion
}
