var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeData
    var BladeData = (function (_super) {
        __extends(BladeData, _super);
        //#endregion
        //#region Constructor
        function BladeData(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 300; }
            _super.call(this, portalService, path, title, subtitle, width);
            //#region Properties
            this.item = null;
            this.items = new Array();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);
            //this.blade = this;
        }
        //#endregion
        //#region Methods
        //#region GetDataList
        BladeData.prototype.getDataList = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.getDataList\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            return that.onGetDataList().success(function (data) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data, status, headers, config) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        };
        BladeData.prototype.onGetDataList = function () {
            throw new Error('[AzurePortalNg.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //#region GetDataDetail
        BladeData.prototype.getDataDetail = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.getDataDetail\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            return that.onGetDataDetail().success(function (data) {
                that.items = data;
                that.statusbar = '';
                that.statusbarClass = '';
            }).error(function (data, status, headers, config) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
            });
        };
        BladeData.prototype.onGetDataDetail = function () {
            throw new Error('[AzurePortalNg.BladeArea] \'onGetDataDetail\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //#region setObsoleteLayoutProperites (override)
        /** Obsolete */
        BladeData.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeData.setObsoleteLayoutProperites\' called.', [this]);
            if (this.items.length !== 0) {
                this.blade.navGrid.items = this.items; //--> do not uncomment, otherwise nav html pages will no longer work.
            }
            this.blade.isNavGrid = this.isNavGrid;
            _super.prototype.setObsoleteLayoutProperites.call(this);
        };
        return BladeData;
    })(AzurePortalNg.Blade);
    AzurePortalNg.BladeData = BladeData;
})(AzurePortalNg || (AzurePortalNg = {}));
