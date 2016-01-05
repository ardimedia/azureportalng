var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AzurePortalNg;
(function (AzurePortalNg) {
    //#region Class Definition: Blade
    var Blade = (function (_super) {
        __extends(Blade, _super);
        //#endregion
        //#endregion
        //#region Constructor
        function Blade(portalService, path, title, subtitle, width) {
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            _super.call(this, portalService);
            this.title = '';
            this.subTitle = '';
            this.width = { 'width': '0' };
            this.widthStackLayout = { 'width': '50px' };
            this.isInnerHtml = true;
            this.statusbar = '';
            this.statusbarClass = '';
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
            /** Obsolete */
            this.navGrid = {
                portalService: null,
                items: [],
                navigateTo: function (path) { }
            };
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [this, portalService, path, title, subtitle, width]);
            var that = this;
            this.blade = this;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';
            this.navGrid.portalService = portalService;
            if (!portalService) {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'portalService\' must be provided.');
            }
            if (!path) {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'path\' must be a string.');
            }
            if (!title && title !== '') {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'title\' must be a string when provided.');
            }
            if (!subtitle && subtitle !== '') {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'subtitle\' must be a string when provided.');
            }
            if (!width && width !== 0) {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'width\' must be a number when provided.');
            }
            if (width < 50) {
                throw new Error('[AzurePortalNg.Blade] constructor parameter \'width\' must be at least 50.');
            }
            //#region Add BladeArea.AddBlade event listener
            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof AzurePortalNg.PortalService == false) {
                return;
            }
            /** OBSOLETE: end */
            // Register listener1
            this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event, args) {
                AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' BladeArea.AddBlade event processing.', [this, event, args]);
                if (args.path === that.blade.path) {
                    that.activate();
                }
            });
            //#endregion
        }
        //#endregion
        //#region Methods
        //#region Methods
        Blade.prototype.activate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called. You could override this, but proably you should call super.activate().', [this]);
            this.onActivate();
        };
        Blade.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.onActivate\' not overriden. You could override this.', [this]);
        };
        Blade.prototype.navigateTo = function (arg) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.navigateTo\' called. You should not override this, use onNavigateTo instead.', [this, arg]);
            this.onNavigateTo(arg);
        };
        Blade.prototype.onNavigateTo = function (arg) {
            throw new Error('[AzurePortalNg.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        };
        /** close blade. */
        Blade.prototype.close = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.close\' called.', [this]);
            this.listener1(); // Unregister listener1
            if (this.portalService.bladeArea !== undefined) {
                this.portalService.bladeArea.clearPath(this.path);
            }
            else {
                throw new Error('[AzurePortalNg.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.bladeArea\' available.');
            }
        };
        //#endregion
        //#region Commands
        Blade.prototype.onCommandBrowse = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCancel = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandCopy = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDelete = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument2 = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument3 = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument4 = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDocument5 = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandNew = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandOrder = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandRestart = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSave = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSearch = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStart = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandStop = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSwap = function () {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        //#region OBSOLETE
        /** Obsolete */
        Blade.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandBrowse = this.isCommandBrowse;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandCopy = this.isCommandCopy;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandDocument = this.isCommandDocument;
            this.blade.isCommandDocument2 = this.isCommandDocument2;
            this.blade.isCommandDocument3 = this.isCommandDocument3;
            this.blade.isCommandDocument4 = this.isCommandDocument4;
            this.blade.isCommandDocument5 = this.isCommandDocument5;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandOrder = this.isCommandOrder;
            this.blade.isCommandRestart = this.isCommandRestart;
            this.blade.isCommandSave = this.isCommandSave;
            this.blade.isCommandSearch = this.isCommandSearch;
            this.blade.isCommandStart = this.isCommandStart;
            this.blade.isCommandStop = this.isCommandStop;
            this.blade.isCommandSwap = this.isCommandSwap;
        };
        /** Obsolete */
        Blade.prototype.bladeClose = function () {
            this.close();
        };
        return Blade;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.Blade = Blade;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Blade.js.map