var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: DetailViewModel
    var DetailViewModel = (function (_super) {
        __extends(DetailViewModel, _super);
        //#region Properties
        //#endregion
        //#region Constructor
        function DetailViewModel(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [portalService, path, title, subtitle, width]);
        }
        return DetailViewModel;
    })(AzurePortalNg.BladeBase);
    AzurePortalNg.DetailViewModel = DetailViewModel;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeDetail.js.map