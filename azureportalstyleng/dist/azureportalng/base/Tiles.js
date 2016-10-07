"use strict";
var azureportalng = require('azureportalng');
var Tiles = (function () {
    function Tiles() {
        //#region Properties
        this.showTiles = true;
        this.tiles = new Array();
        this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        this.tileSizes = azureportalng.TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
    }
    //#endregion
    //#region Methods
    Tiles.prototype.addTile = function (tile) {
        azureportalng.Debug.write('[azureportalng-debug] \'Tiles.addTile\' called.', [this, tile]);
        var tileSize = this.tileSizes[tile.tileSize];
        tile.size = azureportalng.TileSizes[tile.tileSize]; // Get CSS Name
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
    };
    return Tiles;
}());
exports.Tiles = Tiles;
