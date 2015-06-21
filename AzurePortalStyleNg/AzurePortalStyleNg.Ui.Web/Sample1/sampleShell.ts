module Sample1 {
    'use strict';

    //#region Class Definition

    class SampleShell extends AzurePortalNg.PortalShell {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super('SAMPLE 1', portalService);

            this.portalService.panorama.startboard.tiles.showTiles = true;

            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/Sample1/nav1/nav1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/Sample1/blade11/blade11.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/Sample1/blade21/blade21.html', portalService));
            this.setObsoleteLayoutProperites();

            this.httpTestData();
        }

        //#endregion

        //#region Methods

        httpTestData() {
            var customers: Array<Sample1.Customer> = new Array<Sample1.Customer>();
            customers.push(new Sample1.Customer('Harry', 'Lewis'));
            customers.push(new Sample1.Customer('Eva', 'Barker'));

            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();

            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleapp').controller('sampleShell', ['azurePortalNg.portalService', SampleShell]);
    })();


    //#endregion
}