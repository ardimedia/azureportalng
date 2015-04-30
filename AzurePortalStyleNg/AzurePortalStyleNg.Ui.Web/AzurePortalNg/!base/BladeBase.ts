module AzurePortalNg {
    'use strict';

    //#region Class Definition: BaseViewModel

    export class BladeBase extends Blade {

        //#region Properties

        portalService: PortalService;

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string, width: number = 300) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BaseViewModel\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.blade = this;
        }

        //#endregion

        //#region Methods

        //#region GetDataList

        getDataList(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BaseViewModel.getDataList\' called.', [this]);
            var that: BladeBase = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            return this.onGetDataList().success(function (data: any) {
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

        //#endregion
    }

    //#endregion
}
