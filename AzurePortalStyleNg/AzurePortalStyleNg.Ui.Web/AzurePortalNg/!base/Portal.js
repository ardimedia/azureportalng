var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Portal
    var Portal = (function () {
        //#endregion
        //#endregion
        //#region Constructors
        function Portal($window, title, portalService) {
            this.$window = $window;
            this.panorama = new AzurePortalNg.Panorama(title);
            this.bladesNew = new AzurePortalNg.Blades($window);
            this.initialize();
            console.log(portalService);
        }
        //#endregion
        //#region Methods
        Portal.prototype.initialize = function () {
            this.setObsoleteLayoutProperites();
        };
        Portal.prototype.navigateTo = function (path) {
            console.log(path);
            this.bladesNew.addBladeFirst(path);
        };
        Portal.prototype.setObsoleteLayoutProperites = function () {
            this.title = this.panorama.title;
            this.tiles = this.panorama.startboard.tiles.tiles;
            this.blades = this.bladesNew.blades;
            if (this.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.panorama.avatarMenu.userAccount.userName,
                    emailaddress: this.panorama.avatarMenu.userAccount.emailAddress
                };
            }
        };
        return Portal;
    })();
    AzurePortalNg.Portal = Portal;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Portal.js.map