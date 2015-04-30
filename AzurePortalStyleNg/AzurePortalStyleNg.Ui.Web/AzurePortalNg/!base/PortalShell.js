var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalShell
    var PortalShell = (function () {
        //#endregion
        //#endregion
        //#region Constructors
        function PortalShell(title, portalService) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [this, title, portalService]);
            this.portalService = portalService;
            this.portalService.panorama = new AzurePortalNg.Panorama(title);
            this.portalService.bladeService = new AzurePortalNg.BladeService(portalService);
            this.initialize();
        }
        //#endregion
        //#region Methods
        PortalShell.prototype.initialize = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.', [this]);
            this.setObsoleteLayoutProperites();
        };
        PortalShell.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            this.blades = this.portalService.bladeService.bladeUrls;
            var bladeServiceOLD = this.portalService.$injector.get('bladeService');
            bladeServiceOLD.blades = this.portalService.bladeService.bladeUrls;
            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
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