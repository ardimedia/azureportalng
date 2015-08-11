describe('AzurePortalNg.UserControlBase', function () {

    var sut: AzurePortalNg.UserControlBase;
    var portalService: AzurePortalNg.PortalService;

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