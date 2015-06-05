module Sample1 {
    'use strict';

    //#region Class Definition

    class SampleShell extends AzurePortalNg.PortalShell {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super('SAMPLE', portalService);
            AzurePortalNg.Debug.isEnabled = true;
            AzurePortalNg.Debug.isWithObjects = false;

            this.portalService.panorama.startboard.tiles.showTiles = true;
            console.log(this.portalService.panorama.startboard.tiles.showTiles);

            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('NAV', '/Sample1/nav/nav.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('blade1', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('blade2', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('blade11', '/Sample1/blade11/blade11.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('blade22', '/Sample1/blade22/blade22.html', portalService));
            this.setObsoleteLayoutProperites();

            this.httpTestData();
        }

        //#endregion

        //#region Methods

        httpTestData() {
            var customers: Array<Customer> = new Array<Customer>();
            customers.push(new Customer('Harry', 'Lewis'));
            customers.push(new Customer('Eva', 'Barker'));

            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();

            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        }

        //#endregion
    }

    class Customer {
        constructor(public firstName, public lastName) { }
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleapp').controller('sampleShell', ['azurePortalNg.portalService', SampleShell]);
    })();


    //#endregion

}