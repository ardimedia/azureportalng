var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: AvatarMenu
    var AvatarMenu = (function (_super) {
        __extends(AvatarMenu, _super);
        //#endregion
        //#region Constructors
        function AvatarMenu(portalService) {
            _super.call(this, portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this]);
        }
        return AvatarMenu;
    }(AzurePortalNg.UserControlBase));
    AzurePortalNg.AvatarMenu = AvatarMenu;
})(AzurePortalNg || (AzurePortalNg = {}));
