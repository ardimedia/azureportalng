var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Enum Definition: TileSizes
    /** The names are used in CSS for layouting, e.g. style='mini' */
    (function (TileSizes) {
        TileSizes[TileSizes["small"] = 0] = "small";
        TileSizes[TileSizes["mini"] = 1] = "mini";
        TileSizes[TileSizes["normal"] = 2] = "normal";
        TileSizes[TileSizes["herowide"] = 3] = "herowide";
    })(AzurePortalNg.TileSizes || (AzurePortalNg.TileSizes = {}));
    var TileSizes = AzurePortalNg.TileSizes;
    //#endregion
    //#region Class Definition: TileSize
    var TileSize = (function () {
        //#region Constructors
        function TileSize(tileSizes, width, height) {
            this.tileSizes = tileSizes;
            this.width = width;
            this.height = height;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
        }
        //#endregion
        //#region Methods
        TileSize.getTileSizes = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
            var tileSizes = Array();
            tileSizes.push(new TileSize(0 /* small */, 90, 90));
            tileSizes.push(new TileSize(1 /* mini */, 180, 90));
            tileSizes.push(new TileSize(2 /* normal */, 180, 180));
            tileSizes.push(new TileSize(3 /* herowide */, 540, 360));
            return tileSizes;
        };
        return TileSize;
    })();
    AzurePortalNg.TileSize = TileSize;
    //#endregion
    //#region Class Definition: Tile
    var Tile = (function () {
        //#endregion
        //#region Constructors
        function Tile(title, bladePath, portalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
            this.portalService = portalService;
            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = 2 /* normal */;
        }
        //#endregion
        //#region Methods
        Tile.prototype.clicked = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'clicked\' called.', [this]);
            var blade = this.portalService.bladeService.setFirstBlade(this.bladePath);
            blade.activate();
        };
        return Tile;
    })();
    AzurePortalNg.Tile = Tile;
    //#endregion
    //#region Class Definition: Tiles
    var Tiles = (function () {
        function Tiles() {
            //#region Properties
            this.tiles = new Array();
            this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
            this.tileSizes = TileSize.getTileSizes();
            this.nextLeft = 0;
            this.nextTop = 0;
            this.columnHeightMax = 0;
        }
        //#endregion
        //#region Methods
        Tiles.prototype.addTile = function (tile) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Tiles.addTile\' called.', [this, tile]);
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes[tile.tileSize]; // Get CSS Name
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
        };
        return Tiles;
    })();
    AzurePortalNg.Tiles = Tiles;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Tile.js.map