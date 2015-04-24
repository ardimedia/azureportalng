var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    var ListViewModel = (function (_super) {
        __extends(ListViewModel, _super);
        //#endregion
        //#region Constructor
        function ListViewModel(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
        }
        //#endregion
        //#region Methods
        ListViewModel.prototype.activate = function () {
            var that = this;
            return _super.prototype.getDataList.call(this).success(function (data) {
                that.listItems = data;
            });
            return;
        };
        return ListViewModel;
    })(AzurePortalNg.BaseViewModel);
    AzurePortalNg.ListViewModel = ListViewModel;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeList.js.map