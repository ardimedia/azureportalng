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
            _super.call(this, 'SAMPLE', portalService);
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
        SampleShell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Customer('Harry', 'Lewis'));
            customers.push(new Customer('Eva', 'Barker'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        };
        return SampleShell;
    })(AzurePortalNg.PortalShell);
    var Customer = (function () {
        function Customer(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    })();
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleapp').controller('sampleShell', ['azurePortalNg.portalService', SampleShell]);
    })();
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=sampleShell.js.map