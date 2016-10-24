namespace Sample1 {

    class Sample1Shell extends AzurePortalNg.PortalShell {
        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super('SAMPLE TypeScript', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;

            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/app/nav1/nav1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/app/blade11/blade11.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/app/blade2/blade2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/app/blade21/blade21.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('List 1', '/app/list1/list1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Detail 1', '/app/detail1/detail1.html', portalService));
            tile.subTitle = 'TypeScript based';

            this.setObsoleteLayoutProperites();

            this.httpTestData();
        }

        //#endregion

        //#region Methods

        httpTestData() {
            var customers: Array<Sample1.Customer> = new Array<Sample1.Customer>();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));

            //this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            //this.portalService.$httpBackend.whenGET(/\/sample1\/.*/).passThrough();
            //this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();

            //this.portalService.$httpBackend.whenGET('/customers')
            //    .respond(customers);

            //this.portalService.$httpBackend.whenGET('/customer/1001')
            //    .respond(customers[0]);

            //this.portalService.$httpBackend.whenGET('/customer/1002')
            //    .respond(customers[1]);

            //this.portalService.$httpBackend.whenGET('/customer/1003')
            //    .respond(customers[2]);

            //this.portalService.$httpBackend.whenGET('/customer/1004')
            //    .respond(customers[3]);
        }

        //#endregion
    }

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sample1App').controller('sampleShell1', ['azurePortalNg.portalService', Sample1Shell]);
    })();

    //#endregion
}