import * as azureportalng from 'azureportalng';

export class PortalShell extends azureportalng.UserControlBase {

    //#region Properties

    //#region OLD LAYOUT PROPERTIES --> OBSOLETE

    /** Obsolete
     * start using this.panorama.title */
    title: string;
    /** Obsolete
     * start using this.panorama.avatarMenu.userAccount */
    user: {};
    /** Obsolete
     * start using this.panorama.startboard.tiles */
    tiles: azureportalng.Tiles[]; // Obsolete,
    /** Obsolete
     * start using this.bladesNew.blades. */
    blades: any[];

    //#endregion

    //#endregion

    //#region Constructors

    constructor(title: string, portalService: azureportalng.PortalService) {
        super(portalService);
        azureportalng.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [this, title, portalService]);

        this.portalService = portalService;
        this.portalService.portalShell = this;
        this.portalService.panorama = new azureportalng.Panorama(title, this.portalService);
        this.portalService.bladeArea = new azureportalng.BladeArea(portalService);

        this.initialize();
    }

    //#endregion

    //#region Methods

    initialize() {
        azureportalng.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.', [this]);
        this.setObsoleteLayoutProperites();
    }

    setObsoleteLayoutProperites() {
        azureportalng.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
        this.title = this.portalService.panorama.title;
        this.tiles = this.portalService.panorama.startboard.tiles.tiles;
        this.blades = this.portalService.bladeArea.blades;

        //var bladeServiceOLD = <AzurePortalNg.Blade>this.portalService.$injector.get('bladeService');
        //bladeServiceOLD.blades = this.portalService.bladeArea.blades;

        if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
            this.user = {
                name: this.portalService.panorama.avatarMenu.userAccount.name,
                emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
            };
        }

        if (this.portalService.bladeArea != null) {
            this.portalService.bladeArea.blades.forEach(function (blade) {
                blade.setObsoleteLayoutProperites();
            });
        }
    }

    //#endregion
}
