import * as angular from 'angular';
import app from './app.module';

console.log('app.bootstrap');

angular.bootstrap(document.body, ['app'], { strictDi: true });

export default { app };