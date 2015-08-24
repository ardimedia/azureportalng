module AzurePortalNg {
    'use strict';

    //#region Class Definition: BladeDetail

    export class BladeDetail extends BladeData {

        //#region Properties

        listener1: Function;

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [this, portalService, path, title, subtitle, width]);

            var that = this;
            this.listener1 = this.blade.portalService.$rootScope.$on('bladeService.parameter', function (event, parameter) {
                console.log(that.portalService.bladeArea.parameter);
                that.onActivate();
            });
            console.log(this.portalService.bladeArea.parameter);
            that.onActivate();
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