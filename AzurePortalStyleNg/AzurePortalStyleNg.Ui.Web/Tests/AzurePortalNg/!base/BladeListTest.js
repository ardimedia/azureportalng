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
    it("activate - throw exception, since getDataList() is abstract", function () {
        var exception = function () { sut.activate(); };
        expect(exception).toThrow(new Error('[AzurePortalNg.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.'));
    });
    //#endregion
    //#region onFilter
    it("onFilter - find search string", function () {
        var result = sut.onFilter({ title: 'test-title' }, 'test-title');
        expect(result).toBe(true);
        expect(sut.filterFor).toBe('test-title');
    });
    it("onFilter - do not find search string", function () {
        var result = sut.onFilter({ title: 'test-title' }, 'test-title-not-found');
        expect(result).toBe(false);
        expect(sut.filterFor).toBe('test-title-not-found');
    });
    //#endregion
    //#endregion
});
//# sourceMappingURL=BladeListTest.js.map