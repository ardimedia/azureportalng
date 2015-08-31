var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: AvatarMenu
    var UserControlBase = (function () {
        //#endregion
        //#region Constructors
        function UserControlBase(portalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }
        return UserControlBase;
    })();
    AzurePortalNg.UserControlBase = UserControlBase;
})(AzurePortalNg || (AzurePortalNg = {}));
