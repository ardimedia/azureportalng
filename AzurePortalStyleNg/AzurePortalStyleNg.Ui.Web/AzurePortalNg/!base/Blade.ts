module AzurePortalNg {
    'use strict';

    //#region Class Definition: Blade

    export class Blade extends UserControlBase {

        //#region Properties

        //#region OBSOLETE - can be removed when all html files have removed their references to 'blade'

        /** Obsolete */
        blade: Blade;
        /** Obsolete */
        isNavGrid: boolean;
        /** Obsolete */
        navGrid = {
            portalService: null,
            items: [],
            navigateTo: function (path: string) { }
        };

        //#endregion

        //#region Blade properties

        path: string;

        title: string = '';
        subTitle: string = '';
        width = { 'width': '100px' };
        widthStackLayout = { 'width': '50px' };

        isInnerHtml: boolean = true;

        statusbar: string = '';
        statusbarClass: string = '';

        searchString: string = '';

        //#endregion

        //#region Commands

        isCommandBrowse: boolean = false;
        commandBrowse: () => void = function () { this.onCommandBrowse(); };
        commandBrowseText: string = '';

        isCommandCancel: boolean = false;
        commandCancel: () => void = function () { this.onCommandCancel(); };
        commandCancelText: string = '';

        isCommandCopy: boolean = false;
        commandCopy: () => void = function () { this.onCommandCopy(); };
        commandCopyText: string = '';

        isCommandDelete: boolean = false;
        commandDelete: () => void = function () { this.onCommandDelete(); };
        commandDeleteText: string = '';

        isCommandDocument: boolean = false;
        commandDocument: () => void = function () { this.onCommandDocument(); };
        commandDocumentText: string = '';

        isCommandDocument2: boolean = false;
        commandDocument2: () => void = function () { this.onCommandDocument2(); };
        commandDocument2Text: string = '';

        isCommandDocument3: boolean = false;
        commandDocument3: () => void = function () { this.onCommandDocument3(); };
        commandDocument3Text: string = '';

        isCommandDocument4: boolean = false;
        commandDocument4: () => void = function () { this.onCommandDocument4(); };
        commandDocument4Text: string = '';

        isCommandDocument5: boolean = false;
        commandDocument5: () => void = function () { this.onCommandDocument5(); };
        commandDocument5Text: string = '';

        isCommandNew: boolean = false;
        commandNew: () => void = function () { this.onCommandNew(); };
        commandNewText: string = '';

        isCommandOrder: boolean = false;
        commandOrder: () => void = function () { this.onCommandOrder(); };
        commandOrderText: string = '';

        isCommandRestart: boolean = false;
        commandRestart: () => void = function () { this.onCommandRestart(); };
        commandRestartText: string = '';

        isCommandSave: boolean = false;
        commandSave: () => void = function () { this.onCommandSave(); };
        commandSaveText: string = '';

        isCommandSearch: boolean = false;
        commandSearch: () => void = function () { this.onCommandSearch(); };
        commandSearchText: string = '';

        isCommandStart: boolean = false;
        commandStart: () => void = function () { this.onCommandStart(); };
        commandStartText: string = '';

        isCommandStop: boolean = false;
        commandStop: () => void = function () { this.onCommandStop(); };
        commandStopText: string = '';

        isCommandSwap: boolean = false;
        commandSwap: () => void = function () { this.onCommandSwap(); };
        commandSwapText: string = '';

        //#endregion

        //#endregion

        //#region Constructor

        constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
            super(portalService);
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

        protected onCommandBrowse(): void {
            throw new Error('[azureportalng] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandCancel(): void {
            throw new Error('[azureportalng] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandCopy(): void {
            throw new Error('[azureportalng] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDelete(): void {
            throw new Error('[azureportalng] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument(): void {
            throw new Error('[azureportalng] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument2(): void {
            throw new Error('[azureportalng] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument3(): void {
            throw new Error('[azureportalng] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument4(): void {
            throw new Error('[azureportalng] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument5(): void {
            throw new Error('[azureportalng] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandNew(): void {
            throw new Error('[azureportalng] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandOrder(): void {
            throw new Error('[azureportalng] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandRestart(): void {
            throw new Error('[azureportalng] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSave(): void {
            throw new Error('[azureportalng] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSearch(): void {
            throw new Error('[azureportalng] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandStart(): void {
            throw new Error('[azureportalng] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandStop(): void {
            throw new Error('[azureportalng] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSwap(): void {
            throw new Error('[azureportalng] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        }


        //#endregion

        //#region Blade

        activate(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.', [this]);
            this.onActivate();
            this.setObsoleteLayoutProperites();
        }

        onActivate(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.onActivate\' not overriden, you could override this.', [this]);
        }

        navigateTo = function (path: string) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.navigateTo\' called.', [this, path]);
            this.onNavigateTo(path);
        }

        onNavigateTo(path: string): void {
            throw new Error('[azureportalng] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        }

        bladeClose() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.', [this]);
            this.portalService.bladeArea.clearPath(this.path);
        }

        //#endregion

        //#region OBSOLETE - can be removed when all html files have removed their references to 'blade'

        /** Obsolete */
        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.', [this]);

            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandSave = this.isCommandSave;
        }

        //#endregion

        //#endregion
    }

    //#endregion
}
