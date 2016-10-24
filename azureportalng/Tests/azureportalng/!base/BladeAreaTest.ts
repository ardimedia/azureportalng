describe('AzurePortalNg.BladeArea', function () {

    var sut: AzurePortalNg.BladeArea;
    var portalService: AzurePortalNg.PortalService;

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