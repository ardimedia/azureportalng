module Sample1 {
    'use strict';

    //#region Class Definition

    class SampleShell extends AzurePortalNg.PortalShell {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super('SAMPLE', portalService);

            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application A', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application B', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application C', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application D', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application E', '/Sample1/blade1/blade1.html', portalService));
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