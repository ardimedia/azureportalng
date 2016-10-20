import * as angular from 'angular';
import ShellController from './shell/shell.controller';

console.log('app.module');

let app = angular.module('app', []) // 'ng-dialog', 'azureportalng'
    .controller('ShellController', ShellController);

export default app;