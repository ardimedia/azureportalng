import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';

export default function routes($stateProvider: uirouter.IStateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
