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

      let parentState = {
        name: 'parent',
        url: '/parent',
        templateUrl: './modulos/parent/parent.view.html',
        controller: 'ParentController',
        controllerAs: 'vm'
      }
      $stateProvider.state(parentState);

      let cadastroState = {
          name: 'cadastro',
          url: '/cadastro',
          templateUrl: './modulos/cadastro/cadastro.view.html',
          controller: 'CadastroController',
          controllerAs: 'vm'
        }
        $stateProvider.state(cadastroState);

      $urlRouterProvider.otherwise('/home')
}
