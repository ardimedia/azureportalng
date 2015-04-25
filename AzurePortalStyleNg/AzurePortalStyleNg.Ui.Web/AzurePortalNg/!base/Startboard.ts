module AzurePortalNg {
    'use strict';

    //#region Class Definition: Startboard

    export class Startboard {

        //#region Properties

        tiles: Tiles;

        //#endregion

        //#region Constructors

        constructor() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.');
            this.tiles = new Tiles();
        }

        //#endregion
    }

    //#endregion
}