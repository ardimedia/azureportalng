var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Startboard
    var Startboard = (function (_super) {
        __extends(Startboard, _super);
        //#endregion
        //#region Constructors
        function Startboard(portalService) {
            _super.call(this, portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);
            this.tiles = new AzurePortalNg.Tiles();
        }
        return Startboard;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.Startboard = Startboard;
})(AzurePortalNg || (AzurePortalNg = {}));
