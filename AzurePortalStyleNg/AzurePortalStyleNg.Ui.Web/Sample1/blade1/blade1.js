var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Blade1 = (function (_super) {
        __extends(Blade1, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Blade1(portalService) {
            _super.call(this, portalService, '/Sample1/blade1/blade1.html', 'Blade-1', 'subtitle', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade-11';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade-2';
            this.initialize();
            this.setObsoleteLayoutProperites();
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade1.prototype.onCommandNew = function () {
            this.portalService.bladeService.addBlade(this.path, '/Sample1/blade11/blade11.html');
        };
        Blade1.prototype.onCommandSave = function () {
            this.portalService.bladeService.addBlade(this.path, '/Sample1/blade2/blade2.html');
        };
        //#endregion
        //#region Data Access
        Blade1.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade1;
    })(AzurePortalNg.ListViewModel);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade1', ['azurePortalNg.portalService', Blade1]);
    })();
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=blade1.js.map