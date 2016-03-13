var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Sample1Shell = (function (_super) {
        __extends(Sample1Shell, _super);
        //#region Constructors
        function Sample1Shell(portalService) {
            _super.call(this, 'SAMPLE TypeScript', portalService);
            console.log('constructor Sample1Shell');
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/Sample1/nav1/nav1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/Sample1/blade11/blade11.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/Sample1/blade2/blade2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/Sample1/blade21/blade21.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('List 1', '/Sample1/list1/list1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Detail 1', '/Sample1/detail1/detail1.html', portalService));
            tile.subTitle = 'TypeScript based';
            this.setObsoleteLayoutProperites();
            this.httpTestData();
        }
        //#endregion
        //#region Methods
        Sample1Shell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/sample1\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
            this.portalService.$httpBackend.whenGET('/customer/1001')
                .respond(customers[0]);
            this.portalService.$httpBackend.whenGET('/customer/1002')
                .respond(customers[1]);
            this.portalService.$httpBackend.whenGET('/customer/1003')
                .respond(customers[2]);
            this.portalService.$httpBackend.whenGET('/customer/1004')
                .respond(customers[3]);
        };
        return Sample1Shell;
    }(AzurePortalNg.PortalShell));
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sample1App').controller('sampleShell1', ['azurePortalNg.portalService', Sample1Shell]);
    })();
})(Sample1 || (Sample1 = {}));
