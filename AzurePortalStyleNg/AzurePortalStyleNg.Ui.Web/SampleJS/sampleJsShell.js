var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var SampleJs;
(function (SampleJs) {
    'use strict';

    var SampleTsShell = (function (_super) {
        __extends(SampleTsShell, _super);

        //#region Class Definition
        function SampleTsShell(portalService) {
            _super.call(this, 'SAMPLE JavaScript', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new AzurePortalNg.UserAccount('useraccount@mail.com', 'first', 'last');

            var tile1 = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Navigation 1', '/SampleJs/nav1/nav1.html', portalService));
            tile1.subTitle = 'Javascript based';

            var tile2 = this.portalService.panorama.startboard.tiles.addTile(new AzurePortalNg.Tile('Blade 1', '/SampleJs/blade1/blade1.html', portalService));
            tile2.subTitle = 'JavaScript based';

            this.setObsoleteLayoutProperites();
            this.httpTestData();
        }
        //#endregion

        //#region Methods
        SampleTsShell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new SampleJs.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new SampleJs.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new SampleJs.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new SampleJs.Customer(1004, 'Julia', 'Singer'));
            this.portalService.$httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET(/\/SampleJs\/.*/).passThrough();
            this.portalService.$httpBackend.whenGET('/customers')
                .respond(customers);
        };
        //#endregion

        return SampleTsShell;
    })(AzurePortalNg.PortalShell);

    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleJsApp').controller('sampleShell', ['azurePortalNg.portalService', SampleTsShell]);
    })();
    //#endregion

})(SampleJs || (SampleJs = {}));
