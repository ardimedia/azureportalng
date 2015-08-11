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
        expect(sut.item).toBe(null);
        expect(sut.items).not.toBe(null);
        expect(sut.items.length).toBe(0);
    });
    //#endregion
    //#region Specs for Functions
    //#region getDataList
    it("getDataList throws expection", function () {
        var exception = function () { sut.getDataList(); };
        expect(exception).toThrow(new Error('[AzurePortalNg.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.'));
        expect(sut.statusbar).toBe('Daten laden...');
        expect(sut.statusbarClass).toBe('');
    });
    //#endregion
    //#region getDataList
    it("getDataDetail throws expection", function () {
        var exception = function () { sut.getDataDetail(); };
        expect(exception).toThrow(new Error('[AzurePortalNg.BladeArea] \'onGetDataDetail\' is an abstract function. Define one in the derived class.'));
        expect(sut.statusbar).toBe('Daten laden...');
        expect(sut.statusbarClass).toBe('');
    });
    //#endregion
    //#endregion
});
//# sourceMappingURL=BladeDataTest.js.map