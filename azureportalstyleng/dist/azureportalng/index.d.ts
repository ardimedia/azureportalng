declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class AvatarMenu extends azureportalng.UserControlBase {
	    constructor(portalService: azureportalng.PortalService);
	    userAccount: azureportalng.UserAccount;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	import * as azureportalng from 'azureportalng';
	export class Blade extends azureportalng.UserControlBase {
	    constructor(portalService: azureportalng.PortalService, path: string, title: string, subtitle?: string, width?: number);
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
declare module 'azureportalng' {
	/// <reference types="angular-resource" />
	import * as azureportalng from 'azureportalng';
	export class BladeArea extends azureportalng.UserControlBase {
	    constructor(portalService: azureportalng.PortalService);
	    listener1: any;
	    blades: Array<azureportalng.Blade>;
	    raiseAddBladeEvent(args: azureportalng.IAddBladeEventArgs): void;
	    setFirstBlade(path: string): azureportalng.Blade;
	    /** obsolete */
	    addBlade(path: string, senderPath?: string): azureportalng.Blade;
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
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class BladeData extends azureportalng.Blade {
	    constructor(portalService: azureportalng.PortalService, path: string, title: string, subtitle?: string, width?: number);
	    processException(data: azureportalng.IException): void;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	import * as angular from 'angular';
	import * as azureportalng from 'azureportalng';
	export class BladeDetail extends azureportalng.BladeData {
	    item: any;
	    constructor(portalService: azureportalng.PortalService, path: string, title: string, subtitle?: string, width?: number);
	    activate(): void;
	    onActivate(): angular.IHttpPromise<any>;
	    onActivated(): void;
	    onCommandCancel(): void;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	import * as angular from 'angular';
	import * as azureportalng from 'azureportalng';
	export class BladeList extends azureportalng.BladeData {
	    items: any[];
	    constructor(portalService: azureportalng.PortalService, path: string, title: string, subtitle?: string, width?: number);
	    activate(): void;
	    onActivate(): angular.IHttpPromise<any>;
	    loadItems(f: angular.IHttpPromise<any>): void;
	    onFilter(actual: Object, expected: string): boolean;
	    /** Obsolete */
	    setObsoleteLayoutProperites(): void;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular-resource" />
	import * as azureportalng from 'azureportalng';
	export class BladeNav extends azureportalng.BladeData {
	    navItems: Array<azureportalng.BladeNavItem>;
	    isNav: boolean;
	    constructor(portalService: azureportalng.PortalService, path: string, title?: string, subtitle?: string, width?: number);
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class BladeNavItem {
	    title: string;
	    bladePath: string;
	    hrefPath: string;
	    roles: string;
	    isVisible: boolean;
	    callback: () => any;
	    bladeNav: azureportalng.BladeNav;
	    constructor(title?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: azureportalng.BladeNav);
	    onNavItemClick(): void;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	import * as angular from 'angular';
	export class DataService {
	    $http: angular.IHttpService;
	    $q: angular.IQService;
	    constructor($http: angular.IHttpService, $q: angular.IQService);
	    getData(url: string): angular.IHttpPromise<any[]>;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular-resource" />
	export class Debug {
	    static isEnabled: boolean;
	    static isWithObjects: boolean;
	    static keys: Array<string>;
	    static enable(key?: string): void;
	    static disable(key?: string): void;
	    static write(debugLine: string, objects?: Array<any>): boolean;
	    /** Extract the key (e.g. [azureportal] from a string */
	    static extractKey(text: string): string;
	    /** Extract the key (e.g. [azureportal] from a string */
	    static isInKeys(debugLine: string): boolean;
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class Exception {
	    static convertFromWebApiException(ex: azureportalng.IException): void;
	    static onConvertFromWebApiException(ex: azureportalng.IException): void;
	}

}
declare module 'azureportalng' {
	export interface IAddBladeEventArgs {
	    path: string;
	    pathSender: string;
	}

}
declare module 'azureportalng' {
	export interface IBladeParameter {
	    action: string;
	    item?: any;
	    itemId: number;
	}

}
declare module 'azureportalng' {
	export interface IException {
	    ExceptionType: string;
	    ClassName: string;
	    Message: string;
	    Data: Object;
	    Type: string;
	    Messages?: string[];
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class Panorama extends azureportalng.UserControlBase {
	    title: string;
	    isVisible: boolean;
	    avatarMenu: azureportalng.AvatarMenu;
	    startboard: azureportalng.Startboard;
	    constructor(title: string, portalService: azureportalng.PortalService);
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	/// <reference types="angular-resource" />
	/// <reference types="angular-mocks" />
	import * as angular from 'angular';
	import * as ngdialog from 'ng-dialog';
	import * as azureportalng from 'azureportalng';
	export class PortalService implements angular.IModule {
	    constructor($injector: angular.auto.IInjectorService);
	    parameter: azureportalng.IBladeParameter;
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
	    portalShell: azureportalng.PortalShell;
	    panorama: azureportalng.Panorama;
	    bladeArea: azureportalng.BladeArea;
	    ngdialog: ngdialog.IDialogService;
	    $http: angular.IHttpService;
	    $httpBackend: angular.IHttpBackendService;
	    $injector: angular.auto.IInjectorService;
	    $q: angular.IQService;
	    $rootScope: angular.IRootScopeService;
	    $window: angular.IWindowService;
	    $scope: angular.IScope;
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class PortalShell extends azureportalng.UserControlBase {
	    /** Obsolete
	     * start using this.panorama.title */
	    title: string;
	    /** Obsolete
	     * start using this.panorama.avatarMenu.userAccount */
	    user: {};
	    /** Obsolete
	     * start using this.panorama.startboard.tiles */
	    tiles: azureportalng.Tiles[];
	    /** Obsolete
	     * start using this.bladesNew.blades. */
	    blades: any[];
	    constructor(title: string, portalService: azureportalng.PortalService);
	    initialize(): void;
	    setObsoleteLayoutProperites(): void;
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class Startboard extends azureportalng.UserControlBase {
	    constructor(portalService: azureportalng.PortalService);
	    tiles: azureportalng.Tiles;
	}

}
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class Tile {
	    portalService: azureportalng.PortalService;
	    title: string;
	    subTitle: string;
	    bladePath: string;
	    tileSize: azureportalng.TileSizes;
	    size: string;
	    left: string;
	    top: string;
	    leftN: string;
	    topN: string;
	    constructor(title: string, bladePath: string, portalService: azureportalng.PortalService);
	    clicked(): void;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular-resource" />
	import * as azureportalng from 'azureportalng';
	export class Tiles {
	    showTiles: boolean;
	    tiles: Array<any>;
	    hideTileIfOnlyOne: boolean;
	    private tileSizes;
	    private nextLeft;
	    private nextTop;
	    private columnHeightMax;
	    addTile(tile: azureportalng.Tile): azureportalng.Tile;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular-resource" />
	import * as azureportalng from 'azureportalng';
	export class TileSize {
	    tileSizes: azureportalng.TileSizes;
	    width: number;
	    height: number;
	    constructor(tileSizes: azureportalng.TileSizes, width: number, height: number);
	    static getTileSizes(): Array<TileSize>;
	}

}
declare module 'azureportalng' {
	/** The names are used in CSS for layouting, e.g. style='mini' */
	export enum TileSizes {
	    small = 0,
	    mini = 1,
	    normal = 2,
	    herowide = 3,
	}

}
declare module 'azureportalng' {
	export class UserAccount {
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
declare module 'azureportalng' {
	import * as azureportalng from 'azureportalng';
	export class UserControlBase {
	    portalService: azureportalng.PortalService;
	    constructor(portalService: azureportalng.PortalService);
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	import * as angular from 'angular';
	export class AzurePortalHome implements angular.IDirective {
	    templateUrl: string;
	    constructor();
	    static factory(): angular.IDirectiveFactory;
	}

}
declare module 'azureportalng' {
	/// <reference types="angular" />
	/// <reference types="angular-resource" />
	/**
	 * @license AzurePortalNg v0.3.0-beta
	 * License: ICS
	 */
	import * as angular from 'angular';
	export var azureportalng: angular.IModule; var _default: {
	    azureportalng: angular.IModule;
	};
	export default _default;

}
