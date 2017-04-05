import uirouter from 'angular-ui-router';
import './components/bootstrap/bootstrap.module';

angular
  .module('tgh', [
    uirouter,
    'tgh.component.bootstrap',
    'ngSanitize'
  ]).config(($urlRouterProvider, $locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/home');
  });
