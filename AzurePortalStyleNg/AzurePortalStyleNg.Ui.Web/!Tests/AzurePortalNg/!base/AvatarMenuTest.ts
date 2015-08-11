describe('AzurePortalNg.AvatarMenu', function () {

    var sut: AzurePortalNg.AvatarMenu;
    var portalService: AzurePortalNg.PortalService;

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