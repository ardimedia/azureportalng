var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var SampleShell = (function (_super) {
        __extends(SampleShell, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function SampleShell(portalService) {
            _super.call(this, 'SAMPLE 1', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/Sample1/nav1/nav1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 2', '/Sample1/nav2/nav2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1-1', '/Sample1/blade11/blade11.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 2-1', '/Sample1/blade21/blade21.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('List 1', '/Sample1/list1/list1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Detail 1', '/Sample1/detail1/detail1.html', portalService));
            this.setObsoleteLayoutProperites();
            this.httpTestData();
        }
        //#endregion
        //#region Methods
        SampleShell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Sample1.Customer('Harry', 'Lewis'));
            customers.push(new Sample1.Customer('Eva', 'Barker'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        };
        return SampleShell;
    })(AzurePortalNg.PortalShell);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('sampleShell', ['azurePortalNg.portalService', SampleShell]);
    })();
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=sampleShell.js.map