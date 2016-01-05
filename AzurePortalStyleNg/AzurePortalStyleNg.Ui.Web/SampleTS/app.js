//#region Register Angular Module
(function () {
    'use strict';
    var app = angular.module('sampleTsApp', ['azureportalng', 'ngResource', 'ngDialog', 'ngMockE2E']);
    app.config([function () {
            //AzurePortalNg.Debug.enable('[samplets-debug]');
            AzurePortalNg.Debug.isEnabled = false;
            AzurePortalNg.Debug.isWithObjects = false;
        }]);
    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleTsApp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});
})();
//#endregion
//# sourceMappingURL=sampleTsApp.js.map
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
//# sourceMappingURL=sampleTsShell.js.map
var SampleTS;
(function (SampleTS) {
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
    SampleTS.Customer = Customer;
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=Customer.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade11 = (function (_super) {
        __extends(Blade11, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Blade11(portalService) {
            _super.call(this, portalService, '/SampleTS/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 1-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade11.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade2/blade2.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade11.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade11;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('blade11', ['azurePortalNg.portalService', Blade11]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade11.js.map
(function () {
    'use strict';
    angular.module('sampleTsApp').directive('blade11Blade', [blade11Blade]);
    function blade11Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade11',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade11blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade2 = (function (_super) {
        __extends(Blade2, _super);
        //#region Properties
        //#endregion
        //#region Constructors
        function Blade2(portalService) {
            _super.call(this, portalService, '/SampleTS/blade2/blade2.html', 'Blade 2', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2-1';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade 1';
            this.statusbar = 'Blade 2...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade2.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade21/blade21.html', this.path);
        };
        Blade2.prototype.onCommandSave = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade1/blade1.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade2.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade2;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('blade2', ['azurePortalNg.portalService', Blade2]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade2.js.map
(function () {
    'use strict';
    angular.module('sampleTsApp').directive('blade2Blade', [blade2Blade]);
    function blade2Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade2',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade2blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        //#region Constructors
        function Blade21(portalService) {
            _super.call(this, portalService, '/SampleTS/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 2-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/SampleTS/blade2/blade2.html', this.path);
        };
        //#endregion
        //#region Data Access
        Blade21.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade21;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('blade21', ['azurePortalNg.portalService', Blade21]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=blade21.js.map
(function () {
    'use strict';
    angular.module('sampleTsApp').directive('blade21Blade', [blade21Blade]);
    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=blade21blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    'use strict';
    //#region Class Definition
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        //#region Constructors
        function Detail1(portalService) {
            _super.call(this, portalService, '/SampleTS/detail1/detail1.html', 'Detail-1', 'TypeScript based', 415);
            this.activate();
        }
        //#endregion
        //#region Methods
        Detail1.prototype.onActivate = function () {
            var customer = this.portalService.parameter.item;
            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            }
            else if (this.portalService.parameter.action === 'selected') {
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
        };
        return Detail1;
    })(AzurePortalNg.BladeDetail);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=Detail1.js.map
(function () {
    'use strict';
    angular.module('sampleTsApp').directive('detail1Blade', [detail1Blade]);
    function detail1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'detail1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=detail1blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    //#region Class Definition
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);
            this.activate();
        }
        //#endregion
        //#region Methods
        List1.prototype.onActivate = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onActivate\' called.', [this]);
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        List1.prototype.onCommandNew = function () {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new SampleTS.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        };
        List1.prototype.onNavigateTo = function (customer) {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onNavigateTo\' called.', [this, customer]);
            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        };
        return List1;
    })(AzurePortalNg.BladeList);
    //#endregion
    //#region Angular Registration
    (function () {
        angular.module('sampleTsApp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=List1.js.map
(function () {
    'use strict';
    angular.module('sampleTsApp').directive('list1Blade', [list1Blade]);
    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }
})();
//# sourceMappingURL=list1blade.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTS;
(function (SampleTS) {
    //#region Class Definition
    var Nav1 = (function (_super) {
        __extends(Nav1, _super);
        //#region Constructors
        function Nav1(portalService) {
            _super.call(this, portalService, '/SampleTS/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            AzurePortalNg.Debug.write('[samplets-debug] \'Nav1\' constructor called.', [this]);
            this.navItems = [
                new AzurePortalNg.BladeNavItem('Navigation 1 (BladeNav)', '/SampleTS/nav1/nav1.html'),
                new AzurePortalNg.BladeNavItem('Blade 1-1 (BladeList)', '/SampleTS/blade11/blade11.html', null, null, true, this.callback1, this),
                new AzurePortalNg.BladeNavItem('Blade 2 (BladeList)', '/SampleTS/blade2/blade2.html'),
                new AzurePortalNg.BladeNavItem('Blade 2-1 (BladeList)', '/SampleTS/blade21/blade21.html'),
                new AzurePortalNg.BladeNavItem('List 1 (BladeList)', '/SampleTS/list1/list1.html'),
                new AzurePortalNg.BladeNavItem('Detail 1 (BladeDetail)', '/SampleTS/detail1/detail1.html'),
                new AzurePortalNg.BladeNavItem(),
                new AzurePortalNg.BladeNavItem('no path'),
                new AzurePortalNg.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
            ];
            this.statusbar = 'Nav 1 loaded.';
        }
        //#endregion
        //#region Methods
        Nav1.prototype.onNavigateTo = function (path) {
            AzurePortalNg.Debug.write('[samplets-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') {
                return;
            }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        };
        Nav1.prototype.callback1 = function () {
            console.log(this);
        };
        return Nav1;
    })(AzurePortalNg.BladeNav);
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('nav1', ['azurePortalNg.portalService', Nav1]);
    })();
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=nav1.js.map