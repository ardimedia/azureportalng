var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeList
    var BladeList = (function (_super) {
        __extends(BladeList, _super);
        //#region Constructor
        function BladeList(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }
        //#endregion
        //#region Methods
        BladeList.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeList.activate\' called.', [this]);
            //var that = this;
            return _super.prototype.getDataList.call(this);
            //return super.getDataList().success(function (data: any) {
            //    that.listItems = data;
            //});
            //return;
        };
        return BladeList;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeList = BladeList;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeList.js.map