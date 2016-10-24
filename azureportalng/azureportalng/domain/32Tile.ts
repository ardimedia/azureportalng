namespace AzurePortalNg {
    'use strict';

    //#region Enum Definition: TileSizes

    /** The names are used in CSS for layouting, e.g. style='mini' */
    export enum TileSizes {
        small,
        mini,
        normal,
        herowide
    }

    //#endregion

    //#region Class Definition: TileSize

    export class TileSize {

        //#region Constructors

        constructor(public tileSizes: TileSizes, public width: number, public height: number) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
        }

        //#endregion

        //#region Methods

        static getTileSizes(): Array<TileSize> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
            var tileSizes = Array<TileSize>();

            tileSizes.push(new TileSize(TileSizes.small, 90, 90));
            tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
            tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
            tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));

            return tileSizes;
        }

        //#endregion
    }

    //#endregion

    //#region Class Definition: Tile

    export class Tile {

        //#region Properties

        portalService: PortalService;

        title: string;
        subTitle: string;

        bladePath: string;

        tileSize: TileSizes;
        size: string; // CSS style class name - refactor: rename to cssClass

        left: string; // Obsolete, use leftN
        top: string; // Obsolete, use topN
        leftN: string; // left position (CSS) - during refactoring, rename to left
        topN: string; // top position (CSS) - during refactoring, rename to top

        //#endregion

        //#region Constructors

        constructor(title: string, bladePath: string, portalService: PortalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
            this.portalService = portalService;

            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = TileSizes.normal;
        }

        //#endregion

        //#region Methods

        clicked() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
            var blade = <Blade>this.portalService.bladeArea.setFirstBlade(this.bladePath);
            blade.activate();
        }

        //#endregion
    }

    //#endregion

    //#region Class Definition: Tiles

    export class Tiles {

        //#region Properties

        showTiles: boolean = true;
        tiles: Array<any> = new Array<any>();
        hideTileIfOnlyOne: boolean = true;  // not yet evaluated in HTML, but this is the standard behavior

        private tileSizes = TileSize.getTileSizes();
        private nextLeft: number = 0;
        private nextTop: number = 0;
        private columnHeightMax: number = 0;

        //#endregion

        //#region Methods

        addTile(tile: Tile): AzurePortalNg.Tile {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tiles.addTile\' called.', [this, tile]);
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes[tile.tileSize];  // Get CSS Name

            tile.top = this.nextTop + 'px';
            tile.left = this.nextLeft + 'px';

            this.nextLeft += tileSize.width;

            if (tileSize.height > this.columnHeightMax) {
                this.columnHeightMax = tileSize.height;
            }

            if (this.nextLeft > 360) {
                this.nextLeft = 0;
                this.nextTop += this.columnHeightMax;
                this.columnHeightMax = 0;
            }

            this.tiles.push(tile);

            return tile;
        }

        //#endregion
    }

    //#endregion
}