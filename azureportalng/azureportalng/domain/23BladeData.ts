namespace AzurePortalNg {

    //#region Class Definition: BladeData

    export class BladeData extends Blade {

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super(portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        processException(data: IException) {
            var that = this;
            that.statusbar = data.Message;
            that.statusbar += ' - ';
            data.Messages.forEach(function (item) {
                that.statusbar += item + ' - ';
            })
        }

        //#endregion
    }

    //#endregion
}
