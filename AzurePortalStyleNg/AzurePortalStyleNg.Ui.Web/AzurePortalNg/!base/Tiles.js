//#region Class Definition
var Tiles = (function () {
    //#endregion
    //#region Constructors
    function Tiles() {
        //#region Properties
        this.tiles = new Array();
        this.nextLeft = 1;
        this.nextTop = 1;
    }
    //#endregion
    //#region Methods
    Tiles.prototype.addTile = function (tile) {
        tile.left = this.nextLeft;
        tile.top = this.nextTop;
        this.nextLeft++;
        if (this.nextLeft > 3) {
            this.nextLeft = 1;
            this.nextTop++;
        }
        this.tiles.push(tile);
    };
    return Tiles;
})();
//#endregion 
//# sourceMappingURL=Tiles.js.map