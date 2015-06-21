module AzurePortalNg {
    'use strict';

    //#region Class Definition: Blade

    export class Blade extends UserControlBase {

        //#region Properties

        path: string;
        blade: Blade;   // obsolete, can be removed when all html files have removed their references to 'blade'

        //#region Chrome

        title: string = '';
        subTitle: string = '';
        isInnerHtml: boolean = true;
        width = { 'width': '100px' };
        widthStackLayout = { 'width': '50px' };

        //#endregion

        //#region Statusbar

        statusbar: string = '';
        statusbarClass: string = '';

        //#endregion

        //#region Search

        searchString: string = '';

        //#endregion

        //#region Entity

        entity: any;

        //#endregion

        //#region Grid

        isNavGrid: boolean = false;
        navGrid = {
            portalService: null,
            items: [],
            navigateTo: function (path) {
                //this.portalService.bladeService.cle.clearLevel(2);
                this.portalService.bladeService.addBlade('', path);
            }
        };

        //#endregion

        //#region Commands

        isCommandCancel: boolean = false;
        commandCancel: () => void = this.onCommandCancel;
        commandCancelText: string = '';

        isCommandDelete: boolean = false;
        commandDelete: () => void = this.onCommandDelete;
        commandDeleteText: string = '';

        isCommandNew: boolean = false;
        commandNew: () => void = function () { this.onCommandNew(); };
        commandNewText: string = '';

        isCommandSave: boolean = false;
        commandSave: () => void = this.onCommandSave;
        commandSaveText: string = '';

        //#endregion

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
            super(portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [this, portalService, path, title, subtitle, width]);

            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';

            this.navGrid.navigateTo = this.onNavigateTo;
            this.navGrid.portalService = this.portalService;
        }

        //#endregion

        //#region Methods

        //#region Commands

        protected onCommandCancel(): void {
            throw new Error('[azureportalng] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDelete(): void {
            throw new Error('[azureportalng] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandNew(): void {
            throw new Error('[azureportalng] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSave(): void {
            throw new Error('[azureportalng] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        }

        //#endregion

        initialize() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.initialize\' called.', [this]);
            this.activate();
            this.setObsoleteLayoutProperites();
        }

        activate(): void {
            this.onActivate();
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.', [this]);
        }

        protected onActivate(): void {
        }

        setObsoleteLayoutProperites() {
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
        }

        onNavigateTo(path: string) {
            throw new Error('[azureportalng] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
            //this.portalService.bladeService.clearLevel(2);
            //this.portalService.bladeService.addBladeOld(path);
        }

        bladeClose() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.', [this]);
            this.portalService.bladeService.clear(this.path);
        }

        //#endregion
    }

    //#endregion
}
