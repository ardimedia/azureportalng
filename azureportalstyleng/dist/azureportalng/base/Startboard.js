"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var azureportalng = require('azureportalng');
var Startboard = (function (_super) {
    __extends(Startboard, _super);
    //#region Constructors
    function Startboard(portalService) {
        _super.call(this, portalService);
        azureportalng.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);
        this.tiles = new azureportalng.Tiles();
    }
    return Startboard;
}(azureportalng.UserControlBase));
exports.Startboard = Startboard;
