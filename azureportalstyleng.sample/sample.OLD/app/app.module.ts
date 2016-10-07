import * as angular from 'angular';
//import uirouter from 'angular-ui-router';

//import 'bootstrap/dist/css/bootstrap.css';

//import routing from './app.config';
import HomeController from './home/home.controller';

console.log('app.module.ts');

angular.module('app', [])
    .controller('HomeController', HomeController)

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
