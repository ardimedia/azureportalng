var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: BladeDetail
    var BladeDetail = (function (_super) {
        __extends(BladeDetail, _super);
        //#endregion
        //#region Constructor
        function BladeDetail(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService, path, title, subtitle, width);
            //#region Properties
            this.item = null;
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.isCommandNew = true;
            this.commandNewText = 'neu';
            this.isCommandSave = true;
            this.commandSaveText = 'speichern';
            this.isCommandDelete = true;
            this.commandDeleteText = 'löschen';
            this.isCommandCancel = true;
            this.commandCancelText = 'abbrechen';
        }
        //#endregion
        //#region Methods
        BladeDetail.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BladeDetail.activate\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            var onActivate = that.onActivate();
            if (onActivate === null || onActivate === undefined) {
                that.item = null;
                that.statusbar = '';
                that.statusbarClass = '';
            }
            else {
                onActivate.success(function (data) {
                    that.item = data;
                    that.statusbar = '';
                    that.statusbarClass = '';
                }).error(function (data, status, headers, config) {
                    that.item = null;
                    that.statusbar = 'FEHLER: ' + data;
                    that.statusbarClass = 'message-info message-off';
                });
            }
            that.onActivated();
        };
        BladeDetail.prototype.onActivate = function () {
            throw new Error('[AzurePortalNg.BladeDetail] \'onActivate\' is an abstract function. Define one in the derived class.');
        };
        BladeDetail.prototype.onActivated = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'onActivated\' called. You could override this.');
        };
        BladeDetail.prototype.onCommandCancel = function () {
            this.close();
        };
        return BladeDetail;
    })(AzurePortalNg.BladeData);
    AzurePortalNg.BladeDetail = BladeDetail;
})(AzurePortalNg || (AzurePortalNg = {}));
