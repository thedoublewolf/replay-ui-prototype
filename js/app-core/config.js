let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/app-layout/home.tpl.html'
    }); 
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;