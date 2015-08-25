var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeDetail
    var BladeDetail = (function (_super) {
        __extends(BladeDetail, _super);
        //#region Constructor
        function BladeDetail(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }
        //#endregion
        //#region Methods
        BladeDetail.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail.onActivate\' called.', [this]);
            return _super.prototype.getDataDetail.call(this);
        };
        return BladeDetail;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeDetail = BladeDetail;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeDetail.js.map