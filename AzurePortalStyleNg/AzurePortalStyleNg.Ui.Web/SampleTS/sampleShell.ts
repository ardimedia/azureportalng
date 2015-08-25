module SampleTS {
    'use strict';

    //#region Class Definition

    class SampleShell extends AzurePortalNg.PortalShell {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super('SAMPLE TypeScript', portalService);

            this.portalService.panorama.startboard.tiles.showTiles = true;

            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 2', '/SampleTS/nav2/nav2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/SampleTS/blade11/blade11.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/SampleTS/blade2/blade2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/SampleTS/blade21/blade21.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('List 1', '/SampleTS/list1/list1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Detail 1', '/SampleTS/detail1/detail1.html', portalService));
            tile.subTitle = 'TypeScript based';

            this.setObsoleteLayoutProperites();

            this.httpTestData();
        }

        //#endregion

        //#region Methods

        httpTestData() {
            var customers: Array<SampleTS.Customer> = new Array<SampleTS.Customer>();
            customers.push(new SampleTS.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new SampleTS.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new SampleTS.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new SampleTS.Customer(1004, 'Julia', 'Singer'));

            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/SampleTS\/.*/).passThrough();

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