"use strict";
var azureportalng = require('azureportalng');
var Tile = (function () {
    //#endregion
    //#region Constructors
    function Tile(title, bladePath, portalService) {
        azureportalng.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
        this.portalService = portalService;
        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = azureportalng.TileSizes.normal;
    }
    //#endregion
    //#region Methods
    Tile.prototype.clicked = function () {
        azureportalng.Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
        var blade = this.portalService.bladeArea.setFirstBlade(this.bladePath);
        blade.activate();
    };
    return Tile;
}());
exports.Tile = Tile;
