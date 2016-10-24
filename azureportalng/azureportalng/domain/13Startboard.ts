namespace AzurePortalNg {
    'use strict';

    //#region Class Definition: Startboard

    export class Startboard extends UserControlBase {

        //#region Properties

        tiles: Tiles;

        //#endregion

        //#region Constructors

        constructor(portalService: PortalService) {
            super(portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);

            this.tiles = new Tiles();
        }

        //#endregion
    }

    //#endregion
}