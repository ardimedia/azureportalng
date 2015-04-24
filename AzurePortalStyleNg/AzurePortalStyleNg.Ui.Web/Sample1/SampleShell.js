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
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com');
            var app = angular.module('sampleapp');
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application A', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application B', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application C', '/Sample1/blade1/blade1.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application D', '/Sample1/blade2/blade2.html', portalService));
            this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Application E', '/Sample1/blade1/blade1.html', portalService));
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
            this.portalService.$httpBackend.whenGET('/customers').respond(customers);
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