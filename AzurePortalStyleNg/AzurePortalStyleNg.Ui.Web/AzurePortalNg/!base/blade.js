var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Blade
    var Blade = (function (_super) {
        __extends(Blade, _super);
        //#endregion
        //#endregion
        //#region Constructor
        function Blade(portalService, path, title, subtitle, width) {
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService);
            /** Obsolete */
            this.navGrid = {
                portalService: null,
                items: [],
                navigateTo: function (path) { }
            };
            this.title = '';
            this.subTitle = '';
            this.width = { 'width': '100px' };
            this.widthStackLayout = { 'width': '50px' };
            this.isInnerHtml = true;
            this.statusbar = '';
            this.statusbarClass = '';
            this.searchString = '';
            //#endregion
            //#region Commands
            this.isCommandBrowse = false;
            this.commandBrowse = function () { this.onCommandBrowse(); };
            this.commandBrowseText = '';
            this.isCommandCancel = false;
            this.commandCancel = function () { this.onCommandCancel(); };
            this.commandCancelText = '';
            this.isCommandCopy = false;
            this.commandCopy = function () { this.onCommandCopy(); };
            this.commandCopyText = '';
            this.isCommandDelete = false;
            this.commandDelete = function () { this.onCommandDelete(); };
            this.commandDeleteText = '';
            this.isCommandDocument = false;
            this.commandDocument = function () { this.onCommandDocument(); };
            this.commandDocumentText = '';
            this.isCommandDocument2 = false;
            this.commandDocument2 = function () { this.onCommandDocument2(); };
            this.commandDocument2Text = '';
            this.isCommandDocument3 = false;
            this.commandDocument3 = function () { this.onCommandDocument3(); };
            this.commandDocument3Text = '';
            this.isCommandDocument4 = false;
            this.commandDocument4 = function () { this.onCommandDocument4(); };
            this.commandDocument4Text = '';
            this.isCommandDocument5 = false;
            this.commandDocument5 = function () { this.onCommandDocument5(); };
            this.commandDocument5Text = '';
            this.isCommandNew = false;
            this.commandNew = function () { this.onCommandNew(); };
            this.commandNewText = '';
            this.isCommandOrder = false;
            this.commandOrder = function () { this.onCommandOrder(); };
            this.commandOrderText = '';
            this.isCommandRestart = false;
            this.commandRestart = function () { this.onCommandRestart(); };
            this.commandRestartText = '';
            this.isCommandSave = false;
            this.commandSave = function () { this.onCommandSave(); };
            this.commandSaveText = '';
            this.isCommandSearch = false;
            this.commandSearch = function () { this.onCommandSearch(); };
            this.commandSearchText = '';
            this.isCommandStart = false;
            this.commandStart = function () { this.onCommandStart(); };
            this.commandStartText = '';
            this.isCommandStop = false;
            this.commandStop = function () { this.onCommandStop(); };
            this.commandStopText = '';
            this.isCommandSwap = false;
            this.commandSwap = function () { this.onCommandSwap(); };
            this.commandSwapText = '';
            this.navigateTo = function (pathOrId) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.navigateTo\' called.', [this, pathOrId]);
                this.onNavigateTo(pathOrId);
            };
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.blade = this;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';
        }
        //#endregion
        //#region Methods
        //#region Commands
        Blade.prototype.onCommandBrowse = function () {
            throw new Error('[azureportalng] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCancel = function () {
            throw new Error('[azureportalng] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCopy = function () {
            throw new Error('[azureportalng] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDelete = function () {
            throw new Error('[azureportalng] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument = function () {
            throw new Error('[azureportalng] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument2 = function () {
            throw new Error('[azureportalng] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument3 = function () {
            throw new Error('[azureportalng] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument4 = function () {
            throw new Error('[azureportalng] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument5 = function () {
            throw new Error('[azureportalng] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandNew = function () {
            throw new Error('[azureportalng] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandOrder = function () {
            throw new Error('[azureportalng] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandRestart = function () {
            throw new Error('[azureportalng] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSave = function () {
            throw new Error('[azureportalng] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSearch = function () {
            throw new Error('[azureportalng] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStart = function () {
            throw new Error('[azureportalng] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStop = function () {
            throw new Error('[azureportalng] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSwap = function () {
            throw new Error('[azureportalng] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //#region Blade
        Blade.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.', [this]);
            this.onActivate();
            this.setObsoleteLayoutProperites();
        };
        Blade.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.onActivate\' not overriden, you could override this.', [this]);
        };
        Blade.prototype.onNavigateTo = function (pathOrId) {
            throw new Error('[azureportalng] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.bladeClose = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.', [this]);
            this.portalService.bladeArea.clearPath(this.path);
        };
        //#endregion
        //#region OBSOLETE - can be removed when all html files have removed their references to 'blade'
        /** Obsolete */
        Blade.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandSave = this.isCommandSave;
        };
        return Blade;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.Blade = Blade;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Blade.js.map