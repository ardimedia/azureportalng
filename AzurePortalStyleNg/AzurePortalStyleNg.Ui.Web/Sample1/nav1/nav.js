//#region Class Definition
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LgtbcNav = (function (_super) {
    __extends(LgtbcNav, _super);
    //#region Constructors
    function LgtbcNav(portalService) {
        _super.call(this, portalService, '/App/lgtbc/baldes/nav/nav.html', 'LGT Visitenkarten', 'LGT', 315);
        this.navItems = [
            new AzurePortalNg.BladeNavItem('Blade 1', '/Sample1/blade1/blade1.html', ''),
            new AzurePortalNg.BladeNavItem('Blade 2', '/Sample1/blade2/blade2.html', ''),
        ];
        this.activate();
    }
    //#endregion
    //#region Methods
    LgtbcNav.prototype.onNavigateTo = function (path) {
        AzurePortalNg.Debug.write('[sample1-debug] \'LgtbcNav.onNavigateTo\' called.', [this, path]);
        //this.portalService.bladeService.clearLevel(2);
        //this.portalService.bladeService.addBladeOld(path);
    };
    return LgtbcNav;
})(AzurePortalNg.BladeNav);
//#endregion
//#region Angular Registration
(function () {
    'use strict';
    angular.module('sampleapp').controller('lgtbcNav', ['azurePortalNg.portalService', LgtbcNav]);
})();
//#endregion
//# sourceMappingURL=nav.js.map