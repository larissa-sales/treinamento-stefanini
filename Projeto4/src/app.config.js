routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let bahiaState = {
        name: 'bahia',
        url: '/bahia',
        templateUrl: './modulos/bahia/bahia.view.html',
        controller: 'BahiaController',
        controllerAs: 'vm'
      }
      $stateProvider.state(bahiaState);
      
      $urlRouterProvider.otherwise('/home')  
}