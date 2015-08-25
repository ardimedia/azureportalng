/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/ngdialog/ngdialog.d.ts" />
declare var azurePortalNg: ng.IModule;
declare module AzurePortalNg {
    class AvatarMenu extends UserControlBase {
        userAccount: UserAccount;
        constructor(portalService: PortalService);
    }
}
declare module AzurePortalNg {
    class Blade extends UserControlBase {
        path: string;
        title: string;
        subTitle: string;
        width: {
            'width': string;
        };
        widthStackLayout: {
            'width': string;
        };
        isInnerHtml: boolean;
        statusbar: string;
        statusbarClass: string;
        searchString: string;
        /** Obsolete */
        blade: Blade;
        /** Obsolete */
        isNavGrid: boolean;
        /** Obsolete */
        navGrid: {
            portalService: any;
            items: any[];
            navigateTo: (path: string) => void;
        };
        isCommandBrowse: boolean;
        commandBrowse: () => void;
        commandBrowseText: string;
        isCommandCancel: boolean;
        commandCancel: () => void;
        commandCancelText: string;
        isCommandCopy: boolean;
        commandCopy: () => void;
        commandCopyText: string;
        isCommandDelete: boolean;
        commandDelete: () => void;
        commandDeleteText: string;
        isCommandDocument: boolean;
        commandDocument: () => void;
        commandDocumentText: string;
        isCommandDocument2: boolean;
        commandDocument2: () => void;
        commandDocument2Text: string;
        isCommandDocument3: boolean;
        commandDocument3: () => void;
        commandDocument3Text: string;
        isCommandDocument4: boolean;
        commandDocument4: () => void;
        commandDocument4Text: string;
        isCommandDocument5: boolean;
        commandDocument5: () => void;
        commandDocument5Text: string;
        isCommandNew: boolean;
        commandNew: () => void;
        commandNewText: string;
        isCommandOrder: boolean;
        commandOrder: () => void;
        commandOrderText: string;
        isCommandRestart: boolean;
        commandRestart: () => void;
        commandRestartText: string;
        isCommandSave: boolean;
        commandSave: () => void;
        commandSaveText: string;
        isCommandSearch: boolean;
        commandSearch: () => void;
        commandSearchText: string;
        isCommandStart: boolean;
        commandStart: () => void;
        commandStartText: string;
        isCommandStop: boolean;
        commandStop: () => void;
        commandStopText: string;
        isCommandSwap: boolean;
        commandSwap: () => void;
        commandSwapText: string;
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        protected onCommandBrowse(): void;
        protected onCommandCancel(): void;
        protected onCommandCopy(): void;
        protected onCommandDelete(): void;
        protected onCommandDocument(): void;
        protected onCommandDocument2(): void;
        protected onCommandDocument3(): void;
        protected onCommandDocument4(): void;
        protected onCommandDocument5(): void;
        protected onCommandNew(): void;
        protected onCommandOrder(): void;
        protected onCommandRestart(): void;
        protected onCommandSave(): void;
        protected onCommandSearch(): void;
        protected onCommandStart(): void;
        protected onCommandStop(): void;
        protected onCommandSwap(): void;
        activate(): void;
        onActivate(): void;
        navigateTo(pathOrId: string | number): void;
        onNavigateTo(pathOrId: string | number): void;
        bladeClose(): void;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
    }
}
declare module AzurePortalNg {
    /** Obsolete? Check if needed... */
    interface IBladeParameter {
        action: string;
        id: number | string;
    }
    class BladeArea extends UserControlBase {
        blades: Array<AzurePortalNg.Blade>;
        parameter: AzurePortalNg.IBladeParameter;
        constructor(portalService: PortalService);
        setFirstBlade(path: string): Blade;
        addBlade(path: string, senderPath?: string): Blade;
        clearAll(): void;
        clearPath(path: string): void;
        clearLevel(level: number): void;
        clearLastLevel(): void;
        protected clearChild(path: string): void;
        protected showPanoramaIfNoBlades(): void;
        protected hidePanorama(): void;
        addBladePath(path: string): void;
        addBladeOld(path: string): void;
    }
}
declare module AzurePortalNg {
    class BladeData extends Blade {
        item: any;
        items: Array<any>;
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        getDataList(): angular.IHttpPromise<any>;
        protected onGetDataList(): angular.IHttpPromise<any>;
        getDataDetail(): angular.IHttpPromise<any>;
        protected onGetDataDetail(): angular.IHttpPromise<any>;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
    }
}
declare module AzurePortalNg {
    class BladeDetail extends BladeData {
        listener1: Function;
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        onActivate(): angular.IHttpPromise<any>;
    }
}
declare module AzurePortalNg {
    class BladeList extends BladeData {
        private _filterFor;
        filterFor: string;
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        onActivate(): angular.IHttpPromise<any>;
        onFilter(actual: Object, expected: string): boolean;
        onNavigateTo(path: string): void;
    }
}
declare module AzurePortalNg {
    class BladeNav extends BladeData {
        navItems: Array<BladeNavItem>;
        isNav: boolean;
        constructor(portalService: PortalService, path: string, title?: string, subtitle?: string, width?: number);
        onNavigateTo(path: string): void;
    }
    class BladeNavItem {
        title: string;
        bladePath: string;
        hrefPath: string;
        roles: string;
        isVisible: boolean;
        constructor(title?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean);
    }
}
declare module AzurePortalNg {
    class Debug {
        static isEnabled: boolean;
        static isWithObjects: boolean;
        static keys: Array<string>;
        constructor();
        static enable(key?: string): void;
        static disable(key?: string): void;
        static write(debugLine: string, objects?: Array<any>): boolean;
        /** Extract the key (e.g. [azureportal] from a string */
        static extractKey(text: string): string;
        /** Extract the key (e.g. [azureportal] from a string */
        static isInKeys(debugLine: string): boolean;
    }
}
declare module AzurePortalNg {
    class Panorama extends UserControlBase {
        title: string;
        isVisible: boolean;
        avatarMenu: AvatarMenu;
        startboard: Startboard;
        constructor(title: string, portalService: PortalService);
    }
}
declare module AzurePortalNg {
    class PortalService implements ng.IModule {
        animate: any;
        animation: any;
        config: any;
        constant: any;
        controller: any;
        directive: any;
        factory: any;
        filter: any;
        provider: any;
        run: any;
        service: any;
        value: any;
        decorator: any;
        name: any;
        requires: any;
        portalShell: AzurePortalNg.PortalShell;
        panorama: AzurePortalNg.Panorama;
        bladeArea: AzurePortalNg.BladeArea;
        ngDialog: NgDialog.INgDialog;
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService;
        $q: angular.IQService;
        $scope: angular.IScope;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;
        constructor($injector: angular.auto.IInjectorService);
    }
}
declare module AzurePortalNg {
    class PortalShell extends UserControlBase {
        /** Obsolete
         * start using this.panorama.title */
        title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        tiles: Tiles[];
        /** Obsolete
         * start using this.bladesNew.blades. */
        blades: any[];
        constructor(title: string, portalService: PortalService);
        initialize(): void;
        setObsoleteLayoutProperites(): void;
    }
}
declare module AzurePortalNg {
    class Startboard extends UserControlBase {
        tiles: Tiles;
        constructor(portalService: PortalService);
    }
}
declare module AzurePortalNg {
    /** The names are used in CSS for layouting, e.g. style='mini' */
    enum TileSizes {
        small = 0,
        mini = 1,
        normal = 2,
        herowide = 3,
    }
    class TileSize {
        tileSizes: TileSizes;
        width: number;
        height: number;
        constructor(tileSizes: TileSizes, width: number, height: number);
        static getTileSizes(): Array<TileSize>;
    }
    class Tile {
        portalService: PortalService;
        title: string;
        subTitle: string;
        bladePath: string;
        tileSize: TileSizes;
        size: string;
        left: string;
        top: string;
        leftN: string;
        topN: string;
        constructor(title: string, bladePath: string, portalService: PortalService);
        clicked(): void;
    }
    class Tiles {
        showTiles: boolean;
        tiles: Array<any>;
        hideTileIfOnlyOne: boolean;
        private tileSizes;
        private nextLeft;
        private nextTop;
        private columnHeightMax;
        addTile(tile: Tile): AzurePortalNg.Tile;
    }
}
declare module AzurePortalNg {
    class UserAccount {
        private _firstName;
        firstName: string;
        private _lastName;
        lastName: string;
        private _name;
        name: string;
        userName: string;
        emailAddress: string;
        constructor(username: string, firstName?: string, lastName?: string);
    }
}
declare module AzurePortalNg {
    class UserControlBase {
        portalService: PortalService;
        constructor(portalService: PortalService);
    }
}
