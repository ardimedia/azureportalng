describe('AzurePortalNg.BladeList', function () {

    var sut: AzurePortalNg.BladeList;
    var portalService: AzurePortalNg.PortalService;

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