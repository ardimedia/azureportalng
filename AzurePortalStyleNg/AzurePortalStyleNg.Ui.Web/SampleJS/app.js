//#region Register Angular Module

(function () {
    'use strict';
    var app = angular.module('sampleJsApp', ['azureportalng', 'ngResource', 'ngDialog', 'ngMockE2E']);

    app.config([function () {
        AzurePortalNg.Debug.isEnabled = true;
        AzurePortalNg.Debug.isWithObjects = false;
    }]);

    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleJsApp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});
})();

//#endregion

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

var SampleJs;
(function (SampleJs) {
    'use strict';
    //#region Class Definition
    var Customer = (function () {
        function Customer(customerPkId, firstName, lastName) {
            this.customerPkId = customerPkId;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    })();
    SampleJs.Customer = Customer;
})(SampleJs || (SampleJs = {}));
//# sourceMappingURL=Customer.js.map
(function () {
    'use strict';

    angular.module('sampleJsApp').controller('blade1', ['$scope', '$http', 'azurePortalNg.bladeArea', blade1]);

    function blade1($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Blade 1',
            subTitle: 'JavaScript based',
            isCommandDocument: true,
            commandDocument: onCommandDocument,
            commandDocumentText: 'Blade 1-1',
            isNavGrid: true,
            statusbar: 'Blade 1...',
            navGrid: {
                items: [
                    { title: 'Navigation 1', bladePath: '/SampleJs/nav1/nav1.html' },
                    { title: 'Blade 1', bladePath: '/SampleJs/blade1/blade1.html' },
                    { title: '', bladePath: '' },
                    { title: 'no path', bladePath: '' },
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path) {
            bladeService.addBladePath(path);
        }

        function onCommandDocument() {
            bladeService.addBladePath('/SampleJs/blade11/blade11.html');
        }
    }
})();

(function () {
    'use strict';

    angular.module('sampleJsApp').controller('nav1', ['$scope', '$http', 'azurePortalNg.portalService', nav1]);

    function nav1($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            title: 'Navigation 1',
            subTitle: 'Javascript based',
            isNavGrid: true,
            statusbar: 'Nav 1...',
            navGrid: {
                items: [
                    { title: 'Navigation 1', bladePath: '/SampleJs/nav1/nav1.html' },
                    { title: 'Blade 1', bladePath: '/SampleJs/blade1/blade1.html' },
                    {}, // empty line
                    { title: 'no path' }, // line with not link
                    { title: 'go to microsoft.com', hrefPath: 'http://www.microsoft.com' }, // line with external link
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;

        function navigateTo(path) {
            bladeService.bladeArea.clearLevel(2);
            bladeService.bladeArea.addBlade(path);//.addBladePath(path);
        }

        function dummy() { }
    }
})();