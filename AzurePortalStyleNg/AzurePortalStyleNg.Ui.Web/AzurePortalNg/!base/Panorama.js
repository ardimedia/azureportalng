var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Panorama
    var Panorama = (function (_super) {
        __extends(Panorama, _super);
        //#endregion
        //#region Constructors
        function Panorama(title, portalService) {
            _super.call(this, portalService);
            this.isVisible = true;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [this, title]);
            this.title = title;
            this.portalService.panorama = this;
            this.avatarMenu = new AzurePortalNg.AvatarMenu(this.portalService);
            this.startboard = new AzurePortalNg.Startboard(this.portalService);
        }
        return Panorama;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.Panorama = Panorama;
})(AzurePortalNg || (AzurePortalNg = {}));
