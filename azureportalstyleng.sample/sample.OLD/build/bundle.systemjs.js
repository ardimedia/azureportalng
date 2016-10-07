var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("app.config", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function routing($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }
    exports_1("default", routing);
    return {
        setters:[],
        execute: function() {
            console.log('app.config.ts');
            //#region angular-ui-router
            // There is no need of using $inject like I did in here, there is a Webpack loader for ng-annotate
            // that you can use to let webpack annotate for you.Personally I prefer the $inject syntax.
            // The loader is not installed on my workflow, but it is a 1 minute change.
            routing.$inject = ['$urlRouterProvider', '$locationProvider'];
        }
    }
});
//#endregion
System.register("home/home.controller", ['azureportalng'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var azureportalng;
    var HomeController;
    return {
        setters:[
            function (azureportalng_1) {
                azureportalng = azureportalng_1;
            }],
        execute: function() {
            HomeController = (function (_super) {
                __extends(HomeController, _super);
                function HomeController(portalService, ammsadminDataService) {
                    _super.call(this, 'my.bvd.li', portalService);
                    console.log('HomeController constructor');
                    this.name = 'World';
                }
                HomeController.prototype.changeName = function () {
                    this.name = 'angular-tips';
                };
                return HomeController;
            }(azureportalng.PortalShell));
            exports_2("default", HomeController);
        }
    }
});
System.register("app.module", ['angular', "home/home.controller"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var angular, home_controller_1;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (home_controller_1_1) {
                home_controller_1 = home_controller_1_1;
            }],
        execute: function() {
            console.log('app.module.ts');
            angular.module('app', [])
                .controller('HomeController', home_controller_1.default);
            //angular.module('app', ['ngDialog', 'azureportalng']);
            //angular.module('app', [uirouter])
            //    .config(routing)
            //    .controller('HomeController', HomeController)
            //    .name;
            //app.config(['ngDialogProvider', function (ngDialogProvider: any): void {
            //    ngDialogProvider.setDefaults({
            //        className: 'ngdialog-theme-default',
            //        plain: false,
            //        showClose: false,
            //        closeByDocument: true,
            //        closeByEscape: true,
            //        appendTo: false
            //    });
            //}]);
            angular.element(document.body).ready(function () {
                console.log('angular.bootstrap');
                angular.bootstrap(document.body, ['app'], { strictDi: true });
            });
        }
    }
});
System.register("home/home.routes", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function routes($stateProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });
    }
    exports_4("default", routes);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("vendor", ['angular'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});
