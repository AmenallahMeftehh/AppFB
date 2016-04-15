angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/login',{
  templateUrl:'pages/login.html',
  controller:'userLogin'
})
.when('/accueil',{
  templateUrl:'pages/accueil.html',
  controller:'userController'
})
.when('/profil',{
  templateUrl:'pages/profil.html',
  controller:'userController'
})
.otherwise({
    redirectTo: '/index'
          })

}]);
