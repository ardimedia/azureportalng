import * as angular from 'angular';

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

export class AzurePortalHome implements angular.IDirective {
    templateUrl = '/azureportalng/directives/home/home.html';

    constructor() {
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new AzurePortalHome();
        directive.$inject = [];
        return directive;
    }
}
