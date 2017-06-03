angular
  .module('App',['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'home/_index.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('home');
  }])
