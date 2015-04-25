module AzurePortalNg {
    'use strict';

    //#region Class Definition: PortalShell

    export class PortalShell {

        //#region Properties

        /** PortalService, xxx. */
        portalService: PortalService;

        //#region OLD LAYOUT PROPERTIES --> OBSOLETE

        /** Obsolete
         * start using this.panorama.title */
        title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        tiles: Tiles[]; // Obsolete,
        /** Obsolete
         * start using this.bladesNew.blades. */
        blades: any[];

        //#endregion

        //#endregion

        //#region Constructors

        constructor(title: string, portalService: PortalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [title, portalService]);
            this.portalService = portalService;

            this.portalService.panorama = new Panorama(title);
            this.portalService.bladeService = new BladeService(portalService);

            this.initialize();
        }

        //#endregion

        //#region Methods

        initialize() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.');
            this.setObsoleteLayoutProperites();
        }

        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.');
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            //this.blades = this.portalService.bladeService.blades;
            this.blades = this.portalService.bladeService.bladeUrls;

            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
                };
            }

            if (this.portalService.bladeService != null) {
                this.portalService.bladeService.bladeUrls.forEach(function (blade) {
                    blade.setObsoleteLayoutProperites();
                });
            }
        }

        //#endregion
    }

    //#endregion

}