describe('AzurePortalNg.BladeDetail', function () {

    var sut: AzurePortalNg.BladeData;
    var portalService: AzurePortalNg.PortalService;

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