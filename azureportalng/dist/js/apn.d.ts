/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference types="angular-resource" />
/// <reference types="angular" />
declare var azurePortalNg: any;
declare namespace AzurePortalNg {
    interface IAddBladeEventArgs {
        path: string;
        pathSender: string;
    }
}
declare namespace AzurePortalNg {
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
declare namespace AzurePortalNg {
    /** If a Web Api through an exception, the following interface should be available
    */
    interface IException {
        ExceptionType: string;
        ClassName: string;
        Message: string;
        Data: Object;
        Type: string;
        Messages?: string[];
    }
    class Exception {
        static convertFromWebApiException(ex: IException): void;
        static onConvertFromWebApiException(ex: IException): void;
    }
}
declare namespace AzurePortalNg {
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
declare namespace AzurePortalNg {
    interface IBladeParameter {
        action: string;
        item?: any;
        itemId: number;
    }
    class PortalService {
        parameter: IBladeParameter;
        animate: any;
        animation: any;
        component: any;
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
        portalShell: PortalShell;
        panorama: Panorama;
        bladeArea: BladeArea;
        ngDialog: any;
        $http: any;
        $httpBackend: any;
        $injector: any;
        $q: any;
        $rootScope: any;
        $window: any;
        $scope: any;
        constructor($injector: any);
    }
}
declare namespace AzurePortalNg {
    class UserControlBase {
        portalService: PortalService;
        constructor(portalService: PortalService);
    }
}
declare namespace AzurePortalNg {
    class AvatarMenu extends UserControlBase {
        userAccount: UserAccount;
        constructor(portalService: PortalService);
    }
}
declare namespace AzurePortalNg {
    class Startboard extends UserControlBase {
        tiles: Tiles;
        constructor(portalService: PortalService);
    }
}
declare namespace AzurePortalNg {
    class Panorama extends UserControlBase {
        title: string;
        isVisible: boolean;
        avatarMenu: AvatarMenu;
        startboard: Startboard;
        constructor(title: string, portalService: PortalService);
    }
}
declare namespace AzurePortalNg {
    class Blade extends UserControlBase {
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        listener1: Function;
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
        activate(): void;
        onActivate(): void;
        navigateTo(arg: any): void;
        onNavigateTo(arg: any): void;
        /** close blade. */
        close(): void;
        onCommandBrowse(): void;
        onCommandCancel(): void;
        onCommandCopy(): void;
        onCommandDelete(): void;
        onCommandDocument(): void;
        onCommandDocument2(): void;
        onCommandDocument3(): void;
        onCommandDocument4(): void;
        onCommandDocument5(): void;
        onCommandNew(): void;
        onCommandOrder(): void;
        onCommandRestart(): void;
        onCommandSave(): void;
        onCommandSearch(): void;
        onCommandStart(): void;
        onCommandStop(): void;
        onCommandSwap(): void;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
        /** Obsolete */
        bladeClose(): void;
    }
}
declare namespace AzurePortalNg {
    class BladeArea extends UserControlBase {
        private listener1;
        blades: Array<AzurePortalNg.Blade>;
        constructor(portalService: PortalService);
        raiseAddBladeEvent(args: IAddBladeEventArgs): void;
        setFirstBlade(path: string): Blade;
        /** obsolete */
        addBlade(path: string, senderPath?: string): Blade;
        clearAll(): void;
        clearPath(path: string): void;
        clearLevel(level: number): void;
        clearLastLevel(): void;
        clearChild(path: string): void;
        showPanoramaIfNoBlades(): void;
        hidePanorama(): void;
        /** You need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
        close(): void;
        addBladePath(path: string): void;
        addBladeOld(path: string): void;
    }
}
declare namespace AzurePortalNg {
    class BladeData extends Blade {
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        processException(data: IException): void;
    }
}
declare namespace AzurePortalNg {
    class BladeDetail extends BladeData {
        item: any;
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        activate(): void;
        onActivate(): any;
        onActivated(): void;
        onCommandCancel(): void;
    }
}
declare namespace AzurePortalNg {
    class BladeList extends BladeData {
        items: any[];
        constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
        activate(): void;
        onActivate(): any;
        loadItems(f: any): void;
        onFilter(actual: Object, expected: string): boolean;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
    }
}
declare namespace AzurePortalNg {
    class BladeNav extends BladeData {
        navItems: Array<BladeNavItem>;
        isNav: boolean;
        constructor(portalService: PortalService, path: string, title?: string, subtitle?: string, width?: number);
    }
    class BladeNavItem {
        title: string;
        bladePath: string;
        hrefPath: string;
        roles: string;
        isVisible: boolean;
        callback: () => any;
        bladeNav: AzurePortalNg.BladeNav;
        constructor(title?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: AzurePortalNg.BladeNav);
        onNavItemClick(): void;
    }
}
declare namespace AzurePortalNg {
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
declare namespace AzurePortalNg {
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
declare namespace AzurePortalNg {
}
