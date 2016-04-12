angular.module('app').controller('userLogin',function($scope,$location){
  $scope.login;
  $scope.password;
  $scope.sub=function(){

if($scope.login=='amen'&& $scope.password=='mefteh'){
    $location.path('/accueil');
  }else {
    alert('login incorrect');
  }
};

});
