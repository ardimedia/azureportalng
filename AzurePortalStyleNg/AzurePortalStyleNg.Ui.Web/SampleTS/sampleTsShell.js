var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var SampleTsShell = (function (_super) {
        __extends(SampleTsShell, _super);
        //#region Constructors
        function SampleTsShell(portalService) {
            _super.call(this, 'SAMPLE TypeScript', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');
            var tile = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/SampleTS/nav1/nav1.html', portalService));
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
        SampleTsShell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new SampleTS.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new SampleTS.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new SampleTS.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new SampleTS.Customer(1004, 'Julia', 'Singer'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/SampleTS\/.*/).passThrough();
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
        return SampleTsShell;
    })(AzurePortalNg.PortalShell);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('sampleShell', ['azurePortalNg.portalService', SampleTsShell]);
    })();
})(SampleTS || (SampleTS = {}));
