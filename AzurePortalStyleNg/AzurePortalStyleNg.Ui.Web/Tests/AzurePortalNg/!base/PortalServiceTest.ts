describe('AzurePortalNg.PortalService', function () {

    var sut: AzurePortalNg.PortalService;

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