var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        //#region Constructors
        function Blade21(portalService) {
            _super.call(this, portalService, '/Sample1/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 2-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade21.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade21;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('blade21', ['azurePortalNg.portalService', Blade21]);
    })();
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=blade21.js.map