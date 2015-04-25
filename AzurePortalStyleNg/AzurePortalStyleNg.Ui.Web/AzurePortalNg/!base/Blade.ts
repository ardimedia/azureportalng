module AzurePortalNg {
    'use strict';

    //#region Class Definition: Blade

    export class Blade {

        //#region Properties

        path: string;
        blade: Blade;

        portalService: PortalService;

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

        //#region Grid

        navGrid = {
            items: []
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
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade\' constructor called.', [portalService, path, title, subtitle, width]);
            this.portalService = portalService;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';
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
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.initialize\' called.');
            this.activate();
            this.setObsoleteLayoutProperites();
        }

        activate() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.activate\' called.');
        }

        setObsoleteLayoutProperites() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.setObsoleteLayoutProperites\' called.');
            this.blade.title = this.title;
            this.blade.statusbar = this.statusbar;
            this.blade.statusbarClass = this.statusbarClass;
            this.blade.isCommandCancel = this.isCommandCancel;
            this.blade.isCommandDelete = this.isCommandDelete;
            this.blade.isCommandNew = this.isCommandNew;
            this.blade.isCommandSave = this.isCommandSave;
        }

        bladeClose() {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'Blade.bladeClose\' called.');
            this.portalService.bladeService.clear(this.path);
        }

        //#endregion
    }

    //#endregion
}
