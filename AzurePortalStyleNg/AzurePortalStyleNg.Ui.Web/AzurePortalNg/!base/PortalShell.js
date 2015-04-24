var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalShell
    var PortalShell = (function () {
        //#endregion
        //#endregion
        //#region Constructors
        function PortalShell(title, portalService) {
            this.portalService = portalService;
            this.portalService.panorama = new AzurePortalNg.Panorama(title);
            this.portalService.bladeService = new AzurePortalNg.BladeService(portalService);
            this.initialize();
        }
        //#endregion
        //#region Methods
        PortalShell.prototype.initialize = function () {
            this.setObsoleteLayoutProperites();
        };
        PortalShell.prototype.setObsoleteLayoutProperites = function () {
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            //this.blades = this.portalService.bladeService.blades;
            this.blades = this.portalService.bladeService.bladeUrls;
            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.userName,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.emailAddress
                };
            }
            if (this.portalService.bladeService != null) {
                this.portalService.bladeService.bladeUrls.forEach(function (blade) {
                    blade.setObsoleteLayoutProperites();
                });
            }
        };
        return PortalShell;
    })();
    AzurePortalNg.PortalShell = PortalShell;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=PortalShell.js.map