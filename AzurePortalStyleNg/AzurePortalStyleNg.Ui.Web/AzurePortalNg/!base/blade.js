var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: Blade
    var Blade = (function () {
        //#endregion
        //#endregion
        //#region Constructor
        function Blade(portalService, path, title, subtitle, width) {
            if (title === void 0) { title = ''; }
            if (subtitle === void 0) { subtitle = ''; }
            if (width === void 0) { width = 200; }
            //#region Chrome
            this.title = '';
            this.subTitle = '';
            this.isInnerHtml = true;
            this.width = { 'width': '100px' };
            this.widthStackLayout = { 'width': '50px' };
            //#endregion
            //#region Statusbar
            this.statusbar = '';
            this.statusbarClass = '';
            //#endregion
            //#region Search
            this.searchString = '';
            //#endregion
            //#region Grid
            this.isNavGrid = false;
            this.navGrid = {
                portalService: null,
                items: [],
                navigateTo: function (path) {
                    //this.portalService.bladeService.cle.clearLevel(2);
                    this.portalService.bladeService.addBlade('', path);
                }
            };
            //#endregion
            //#region Commands
            this.isCommandCancel = false;
            this.commandCancel = this.onCommandCancel;
            this.commandCancelText = '';
            this.isCommandDelete = false;
            this.commandDelete = this.onCommandDelete;
            this.commandDeleteText = '';
            this.isCommandNew = false;
            this.commandNew = function () { this.onCommandNew(); };
            this.commandNewText = '';
            this.isCommandSave = false;
            this.commandSave = this.onCommandSave;
            this.commandSaveText = '';
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.portalService = portalService;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';
            this.navGrid.navigateTo = this.navigateTo;
            this.navGrid.portalService = this.portalService;
        }
        //#endregion
        //#region Methods
        //#region Commands
        Blade.prototype.onCommandCancel = function () {
            throw new Error('[azureportalng] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandDelete = function () {
            throw new Error('[azureportalng] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandNew = function () {
            throw new Error('[azureportalng] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        };
        Blade.prototype.onCommandSave = function () {
            throw new Error('[azureportalng] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        };
        //#endregion
        Blade.prototype.initialize = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.initialize\' called.', [this]);
            this.activate();
            this.setObsoleteLayoutProperites();
        };
        Blade.prototype.activate = function () {
            this.onActivate();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.', [this]);
        };
        Blade.prototype.onActivate = function () {
        };
        Blade.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandSave = this.isCommandSave;
            this.blade.isNavGrid = this.isNavGrid;
            this.blade.navGrid = this.navGrid;
        };
        Blade.prototype.navigateTo = function (path) {
            throw new Error('[azureportalng] \'navigateTo\' is an abstract function. Define one in the derived class.');
            //this.portalService.bladeService.clearLevel(2);
            //this.portalService.bladeService.addBladeOld(path);
        };
        Blade.prototype.bladeClose = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.', [this]);
            this.portalService.bladeService.clear(this.path);
        };
        return Blade;
    })();
    AzurePortalNg.Blade = Blade;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Blade.js.map