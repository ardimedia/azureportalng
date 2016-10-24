describe('AzurePortalNg.AvatarMenu', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.AvatarMenu(portalService);
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        //var portalService = <AzurePortalNg.PortalService>azurePortalNg.service('azurePortalNg.portalService');
        //var sut = new AzurePortalNg.AvatarMenu(portalService);
        expect(sut).not.toBe(null);
        expect(sut instanceof AzurePortalNg.AvatarMenu).toBe(true);
    });
    //#endregion
});

describe('AzurePortalNg.BladeArea', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.BladeArea(portalService);
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(sut).not.toBe(null);
        expect(sut.blades).not.toBe(null);
        expect(sut.blades.length).toBe(0);
        expect(sut.portalService).not.toBe(null);
        expect(sut.portalService.bladeArea).not.toBe(null);
    });
    //#endregion
    //#region Specs for Functions
    //#region setFirstBlade
    it("setFirstBlade - set first blade", function () {
        sut.setFirstBlade('test-path');
        expect(sut.blades.length).toBe(1);
    });
    //#endregion
    //#region addBlade
    it("addBlade - add a blade", function () {
        var result = sut.addBlade('test-path');
        expect(result).not.toBe(null);
        expect(result instanceof AzurePortalNg.Blade).toBe(true);
        expect(sut.blades.length).toBe(1);
    });
    //#endregion
    //#region clearAll
    it("clearAll - clear all blades", function () {
        sut.clearAll();
        expect(sut.blades.length).toBe(0);
    });
    //#endregion
    //#region clearPath
    it("clearPath - path not found - throw exception", function () {
        var exception = function () { sut.clearPath('test-path'); };
        expect(exception).toThrow(new Error('[azureportalng.BladeArea.clearPath] path: \'test-path\' could not be removed, since path not found in bladeUrls.'));
    });
    //#endregion
    //#region clearLevel
    it("clearLevel - clear level = 0", function () {
        sut.clearLevel(0);
        expect(sut.blades.length).toBe(0);
    });
    it("clearLevel - clear level = 5", function () {
        var exception = function () { sut.clearLevel(5); };
        expect(sut.blades.length).toBe(0);
    });
    //#endregion
    //#region clearLastLevel
    it("clearLastLevel - clear last level", function () {
        sut.clearLastLevel();
        expect(sut.blades.length).toBe(0);
    });
    //#endregion
    //#endregion
});

describe('AzurePortalNg.BladeData', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.BladeData(portalService, 'test-path', 'test-title');
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(sut).not.toBe(null);
        //expect(sut.item).toBe(null);
        //expect(sut.items).not.toBe(null);
        //expect(sut.items.length).toBe(0);
    });
    //#endregion
    //#region Specs for Functions
    //#region getDataList
    //it("getDataList throws expection", function () {
    //    var exception = function () { sut.getDataList(); };
    //    expect(exception).toThrow(new Error('[azureportalng.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.'));
    //    expect(sut.statusbar).toBe('Daten laden...');
    //    expect(sut.statusbarClass).toBe('');
    //});
    //#endregion
    //#region getDataList
    //it("getDataDetail throws expection", function () {
    //    var exception = function () { sut.getDataDetail(); };
    //    expect(exception).toThrow(new Error('[azureportalng.BladeData] \'onGetDataDetail\' is an abstract function. Define one in the derived class.'));
    //    expect(sut.statusbar).toBe('Daten laden...');
    //    expect(sut.statusbarClass).toBe('');
    //});
    //#endregion
    //#endregion
});

describe('AzurePortalNg.BladeDetail', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.BladeData(portalService, 'test-path', 'test-title');
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(true).toBe(sut !== null);
    });
    //#endregion
});

describe('AzurePortalNg.BladeList', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.BladeList(portalService, 'test-path', 'test-title');
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(true).toBe(sut !== null);
    });
    //#endregion
    //#region Specs for Functions
    //#region activate
    //it("activate - throw exception, since getDataList() is abstract", function () {
    //    var exception = function () { sut.activate(); };
    //    expect(exception).toThrow(new Error('[azureportalng.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.'));
    //});
    //#endregion
    //#region onFilter
    //#region onFilter Number
    it("onFilter - find search string in an number", function () {
        var result = sut.onFilter(55, '55');
        expect(result).toBe(true);
    });
    it("onFilter - do not find search string in an number", function () {
        var result = sut.onFilter(55, '51');
        expect(result).toBe(false);
    });
    it("onFilter - do not find multiple search string in an number", function () {
        var result = sut.onFilter(55, '51 5');
        expect(result).toBe(false);
    });
    //#endregion
    //#region onFilter String
    it("onFilter - find search string in an string", function () {
        var result = sut.onFilter('55', '55');
        expect(result).toBe(true);
    });
    it("onFilter - do not find search string in an string", function () {
        var result = sut.onFilter('55', '51');
        expect(result).toBe(false);
    });
    it("onFilter - find multiple search string in an string", function () {
        var result = sut.onFilter('the house is blue', 'house blue');
        expect(result).toBe(true);
    });
    it("onFilter - do not find multiple search string in an string", function () {
        var result = sut.onFilter('the house is blue', 'house red');
        expect(result).toBe(false);
    });
    //#endregion
    //#region onFilter Object
    it("onFilter - find search string in an object", function () {
        var result = sut.onFilter({ title: 'test-title' }, 'test-title');
        expect(result).toBe(true);
    });
    it("onFilter - do not find search string in an object", function () {
        var result = sut.onFilter({ title: 'test-title' }, 'test-title-not-found');
        expect(result).toBe(false);
    });
    it("onFilter - find multiple search string in an object", function () {
        var result = sut.onFilter({ title: 'test-title', note: 'blue' }, 'test-title blue');
        expect(result).toBe(true);
    });
    it("onFilter - do not find multiple search string in an object", function () {
        var result = sut.onFilter({ title: 'test-title', note: 'blue' }, 'test-title red');
        expect(result).toBe(false);
    });
    //#endregion
    //#endregion
    //#endregion
});

describe('AzurePortalNg.Blade', function () {
    //#region Tests initialize
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.Blade(portalService, 'test-path', 'test-title');
    }));
    //#endregion
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(sut).not.toBe(null);
        expect(sut.blade).not.toBe(null);
        expect(sut.blade.title).toBe('test-title');
        expect(sut.blade.subTitle).toBe('');
        expect(sut.navGrid).not.toBe(null);
        expect(sut.navGrid.portalService).not.toBe(null);
        expect(sut.navGrid.items).not.toBe(null);
        expect(sut.navGrid.items.length).toBe(0);
        expect(sut.navGrid.navigateTo).not.toBe(null);
        expect(sut.path).not.toBe(null);
        expect(sut.title).toBe('test-title');
        expect(sut.subTitle).toBe('');
        expect(sut.width.width).toBe('200px');
        expect(sut.widthStackLayout.width).toBe('150px');
        expect(sut.isInnerHtml).toBe(true);
        expect(sut.statusbar).toBe('');
        expect(sut.statusbarClass).toBe('');
        expect(sut.isCommandBrowse).toBe(false);
        expect(sut.isCommandCancel).toBe(false);
        expect(sut.isCommandCopy).toBe(false);
        expect(sut.isCommandDelete).toBe(false);
        expect(sut.isCommandDocument).toBe(false);
        expect(sut.isCommandDocument2).toBe(false);
        expect(sut.isCommandDocument3).toBe(false);
        expect(sut.isCommandDocument4).toBe(false);
        expect(sut.isCommandDocument5).toBe(false);
        expect(sut.isCommandNew).toBe(false);
        expect(sut.isCommandOrder).toBe(false);
        expect(sut.isCommandRestart).toBe(false);
        expect(sut.isCommandSave).toBe(false);
        expect(sut.isCommandSearch).toBe(false);
        expect(sut.isCommandStart).toBe(false);
        expect(sut.isCommandStop).toBe(false);
        expect(sut.isCommandSwap).toBe(false);
        expect(sut.commandBrowse).not.toBe(null);
        expect(sut.commandCancel).not.toBe(null);
        expect(sut.commandCopy).not.toBe(null);
        expect(sut.commandDelete).not.toBe(null);
        expect(sut.commandDocument).not.toBe(null);
        expect(sut.commandDocument2).not.toBe(null);
        expect(sut.commandDocument3).not.toBe(null);
        expect(sut.commandDocument4).not.toBe(null);
        expect(sut.commandDocument5).not.toBe(null);
        expect(sut.commandNew).not.toBe(null);
        expect(sut.commandOrder).not.toBe(null);
        expect(sut.commandRestart).not.toBe(null);
        expect(sut.commandSave).not.toBe(null);
        expect(sut.commandSearch).not.toBe(null);
        expect(sut.commandStart).not.toBe(null);
        expect(sut.commandStop).not.toBe(null);
        expect(sut.commandSwap).not.toBe(null);
        expect(sut.commandBrowseText).toBe('');
        expect(sut.commandCancelText).toBe('');
        expect(sut.commandCopyText).toBe('');
        expect(sut.commandDeleteText).toBe('');
        expect(sut.commandDocumentText).toBe('');
        expect(sut.commandDocument2Text).toBe('');
        expect(sut.commandDocument3Text).toBe('');
        expect(sut.commandDocument4Text).toBe('');
        expect(sut.commandDocument5Text).toBe('');
        expect(sut.commandNewText).toBe('');
        expect(sut.commandOrderText).toBe('');
        expect(sut.commandRestartText).toBe('');
        expect(sut.commandSaveText).toBe('');
        expect(sut.commandSearchText).toBe('');
        expect(sut.commandStartText).toBe('');
        expect(sut.commandStopText).toBe('');
        expect(sut.commandSwapText).toBe('');
    });
    it("Constructor with parameter [width = 300] successful", function () {
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', '', '', 300);
        // widthStackLayout must be 50 less then provided [width]
        expect(sut.widthStackLayout.width).toBe('250px');
    });
    it("Constructor with parameter [width => 50] throws no expection", function () {
        var sut = new AzurePortalNg.Blade(portalService, 'test-path', '', '', 50);
        expect(sut).not.toBe(null);
    });
    it("Constructor with parameter [width < 50] throws expection", function () {
        var sut = function () { new AzurePortalNg.Blade(portalService, 'test-path', '', '', 49); };
        expect(sut).toThrow();
    });
    //#endregion
    //#region Specs for Functions
    //#region activate
    it("activate successful", function () {
        sut.activate();
        expect(sut).not.toBe(null);
    });
    //#endregion
    //#region navigateTo
    it("navigateTo throws expection - abstract function", function () {
        var exception = function () { sut.navigateTo('test-path'); };
        expect(exception).toThrow(new Error('[azureportalng.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.'));
    });
    //#endregion
    //#region close
    it("close throws exception - path could not be removed", function () {
        var exception = function () { sut.close(); };
        expect(exception).toThrow(new Error('[azureportalng.Blade] path: \'test-path\' could not be removed, since no \'this.portalService.bladeArea\' available.'));
    });
    //#endregion
    //#endregion
});

describe('AzurePortalNg.Debug', function () {
    beforeEach(function () {
        Debug.isEnabled = false;
        Debug.isWithObjects = false;
        Debug.keys = new Array();
    });
    //#region Specs for Constructor
    it("Constructor successful.", function () {
        var sut = AzurePortalNg.Debug;
        expect(sut.isEnabled).toBe(false);
        expect(sut.isWithObjects).toBe(false);
        expect(typeof sut.keys).toBe(typeof []);
        expect(sut.keys.length).toBe(0);
    });
    //#endregion
    //#region Spes for Functions
    //#region Function: extractKey
    it("extractKey('[key1] abc') must return [key1]", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1] abc');
        expect(result).toBe('[key1]');
    });
    it("extractKey('') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('');
        expect(result).toBe('');
    });
    it("extractKey(' [key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey(' [key1] abc');
        expect(result).toBe('');
    });
    it("extractKey('[key1 abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('[key1 abc');
        expect(result).toBe('');
    });
    it("extractKey('key1] abc') must return an empty string", function () {
        var sut = AzurePortalNg.Debug;
        var result = sut.extractKey('key1] abc');
        expect(result).toBe('');
    });
    //#endregion
    //#region Function: enable
    it("enable('') must enable debugging with no keys", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(0);
    });
    it("enable('[key1]') must enable debugging with key = '[key1]'", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
        expect(sut.keys[0]).toBe('[key1]');
    });
    it("enable('[key1]') must enable debugging with key = '[key1]' and .enable('[key2]')", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');
        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(2);
        expect(sut.keys[0]).toBe('[key1]');
        expect(sut.keys[1]).toBe('[key2]');
    });
    //#endregion
    //#region Function: disable
    it("disable('') must disable debugging. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        expect(sut.isEnabled).toBe(false);
        expect(sut.keys.length).toBe(0);
    });
    it("disable('') must not disable debugging. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.enable('[key1]');
        sut.disable('');
        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
    });
    it("disable('[key1]') must disable debugging and remove key = '[key1]'. No more keys are defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('[key1]');
        expect(sut.isEnabled).toBe(false);
        expect(sut.keys.length).toBe(0);
    });
    it("disable('[key1]') must not disable debugging but remove key = '[key1]'. Some keys are still defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.enable('[key2]');
        sut.disable('[key1]');
        expect(sut.isEnabled).toBe(true);
        expect(sut.keys.length).toBe(1);
    });
    //#endregion
    //#region Function: isInKeys
    it("isInKeys('') will not be logged", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.isInKeys('');
        expect(result).toBe(false);
    });
    it("isInKeys('[key1]') will not be logged. No keys defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.isInKeys('[key1]');
        expect(result).toBe(false);
    });
    it("isInKeys('[key1]') will be logged. [key1] is defined", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('');
        var result = sut.isInKeys('[key1]');
        expect(result).toBe(true);
    });
    //#endregion
    //#region Function: write
    it("write('') will not be logged in the console", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('');
        sut.disable('');
        var result = sut.write('');
        expect(result).toBe(false);
    });
    it("write('[key1] TestRunner test output') will be logged in the console", function () {
        var sut = AzurePortalNg.Debug;
        sut.enable('[key1]');
        sut.disable('');
        var result = sut.write('[key1] TestRunner test output successfull');
        expect(result).toBe(true);
    });
    //#endregion
    //#endregion
});

describe('AzurePortalNg.PortalService', function () {
    var sut;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        sut = $injector.get('azurePortalNg.portalService');
    }));
    //#region Specs for Constructor
    it("Constructor successful", function () {
        expect(sut).not.toBe(null);
        expect(sut).not.toBe(undefined);
        expect(sut instanceof AzurePortalNg.PortalService).toBe(true);
        // NOT TO BE NULL
        expect(sut).not.toBe(undefined);
        expect(sut.$httpBackend).not.toBe(undefined);
        expect(sut.$injector).not.toBe(undefined);
        expect(sut.$q).not.toBe(undefined);
        expect(sut.$rootScope).not.toBe(undefined);
        expect(sut.$window).not.toBe(undefined);
        // BE NULL
        expect(sut.animation).toBe(undefined);
        expect(sut.config).toBe(undefined);
        expect(sut.constant).toBe(undefined);
        expect(sut.controller).toBe(undefined);
        expect(sut.decorator).toBe(undefined);
        expect(sut.directive).toBe(undefined);
        expect(sut.factory).toBe(undefined);
        expect(sut.filter).toBe(undefined);
        expect(sut.name).toBe(undefined);
        expect(sut.provider).toBe(undefined);
        expect(sut.requires).toBe(undefined);
        expect(sut.run).toBe(undefined);
        expect(sut.service).toBe(undefined);
        expect(sut.value).toBe(undefined);
        // NOT TO BE NULL
        expect(sut.ngDialog).not.toBe(undefined);
        // BE NULL
        expect(sut.bladeArea).toBe(undefined);
        expect(sut.panorama).toBe(undefined);
        expect(sut.portalShell).toBe(undefined);
    });
    //#endregion
});

describe('AzurePortalNg.UserControlBase', function () {
    var sut;
    var portalService;
    beforeEach(angular.mock.module('azureportalng'));
    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortalNg.UserControlBase(portalService);
    }));
    //#region Specs for Constructor
    it("constructed successfully", function () {
        expect(sut).not.toBe(null);
        expect(sut.portalService).not.toBe(null);
    });
    //#endregion
});