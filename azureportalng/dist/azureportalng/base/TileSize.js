"use strict";
var azureportalng = require('azureportalng');
var TileSize = (function () {
    //#region Constructors
    function TileSize(tileSizes, width, height) {
        this.tileSizes = tileSizes;
        this.width = width;
        this.height = height;
        azureportalng.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
    }
    //#endregion
    //#region Methods
    TileSize.getTileSizes = function () {
        azureportalng.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
        var tileSizes = Array();
        tileSizes.push(new TileSize(azureportalng.TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(azureportalng.TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(azureportalng.TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(azureportalng.TileSizes.herowide, 540, 360));
        return tileSizes;
    };
    return TileSize;
}());
exports.TileSize = TileSize;
