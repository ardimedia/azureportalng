import * as azureportalng from 'azureportalng';

export class Tile {

    //#region Properties

    portalService: azureportalng.PortalService;

    title: string;
    subTitle: string;

    bladePath: string;

    tileSize: azureportalng.TileSizes;
    size: string; // CSS style class name - refactor: rename to cssClass

    left: string; // Obsolete, use leftN
    top: string; // Obsolete, use topN
    leftN: string; // left position (CSS) - during refactoring, rename to left
    topN: string; // top position (CSS) - during refactoring, rename to top

    //#endregion

    //#region Constructors

    constructor(title: string, bladePath: string, portalService: azureportalng.PortalService) {
        azureportalng.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
        this.portalService = portalService;

        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = azureportalng.TileSizes.normal;
    }

    //#endregion

    //#region Methods

    clicked() {
        azureportalng.Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
        var blade = <azureportalng.Blade>this.portalService.bladeArea.setFirstBlade(this.bladePath);
        blade.activate();
    }

    //#endregion
}
