"use strict";
//(function () {
//    'use strict';
//    angular.module('azureportalng')
//        .directive('azurePortalHome', ['$window', '$interpolate', azurePortalHome]);
//    function azurePortalHome($window, $interpolate): angular.IDirective {
//        return <angular.IDirective>{
//            scope: { vm: '=options' },
//            templateUrl: '/azureportalng/directives/home/home.html',
//            link: function (scope, element, attrs, controller) {
//            }
//        };
//    }
//})();
var AzurePortalHome = (function () {
    function AzurePortalHome() {
        this.templateUrl = '/azureportalng/directives/home/home.html';
    }
    AzurePortalHome.factory = function () {
        var directive = function () { return new AzurePortalHome(); };
        directive.$inject = [];
        return directive;
    };
    return AzurePortalHome;
}());
exports.AzurePortalHome = AzurePortalHome;
