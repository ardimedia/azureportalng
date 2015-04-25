var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Panorama
    var Panorama = (function () {
        //#endregion
        //#region Constructors
        function Panorama(title) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [title]);
            this.title = title;
            this.avatarMenu = new AzurePortalNg.AvatarMenu();
            this.startboard = new AzurePortalNg.Startboard();
        }
        return Panorama;
    })();
    AzurePortalNg.Panorama = Panorama;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Panorama.js.map