module AzurePortalNg {
    'use strict';

    //#region Class Definition: Blade

    export class Blade extends UserControlBase {

        //#region Properties

        //#region Properties

        path: string;

        title: string = '';
        subTitle: string = '';
        width = { 'width': '0' };
        widthStackLayout = { 'width': '50px' };

        isInnerHtml: boolean = true;

        statusbar: string = '';
        statusbarClass: string = '';

        searchString: string = '';

        //#endregion

        //#region Properties Old (OBSOLETE)

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

        constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [this, portalService, path, title, subtitle, width]);

            this.blade = this;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';

            this.navGrid.portalService = portalService;

            if (!portalService) { throw new Error('[AzurePortalNg.Blade] constructor parameter \'portalService\' must be provided.'); }
            if (!path) { throw new Error('[AzurePortalNg.Blade] constructor parameter \'path\' must be a string.'); }
            if (!title && title !== '') { throw new Error('[AzurePortalNg.Blade] constructor parameter \'title\' must be a string when provided.'); }
            if (!subtitle && subtitle !== '') { throw new Error('[AzurePortalNg.Blade] constructor parameter \'subtitle\' must be a string when provided.'); }
            if (!width && width !== 0) { throw new Error('[AzurePortalNg.Blade] constructor parameter \'width\' must be a number when provided.'); }

            if (width < 50) { throw new Error('[AzurePortalNg.Blade] constructor parameter \'width\' must be at least 50.'); }
        }

        //#endregion

        //#region Methods

        //#region Commands

        protected onCommandBrowse(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandCancel(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandCopy(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDelete(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument2(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument3(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument4(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandDocument5(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandNew(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandOrder(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandRestart(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSave(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSearch(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandStart(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandStop(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        }

        protected onCommandSwap(): void {
            throw new Error('[AzurePortalNg.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        }


        //#endregion

        //#region Functions

        activate(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.', [this]);
            this.onActivate();
            this.setObsoleteLayoutProperites();
        }

        onActivate(): void {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.onActivate\' not overriden, you could override this.', [this]);
        }

        navigateTo = function (pathOrId: string|number) {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.navigateTo\' called.', [this, pathOrId]);
            this.onNavigateTo(pathOrId);
        }

        onNavigateTo(pathOrId: string|number): void {
            throw new Error('[AzurePortalNg.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        }

        //bladeClose() {
        //    AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.', [this]);

        //    if (this.portalService.bladeArea !== undefined) {
        //        this.portalService.bladeArea.clearPath(this.path);
        //    }
        //}

        //#endregion

        //#region setObsoleteLayoutProperites (OBSOLETE)

        /** Obsolete */
        setObsoleteLayoutProperites() {
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
        }

        //#endregion

        //#endregion
    }

    //#endregion
}
