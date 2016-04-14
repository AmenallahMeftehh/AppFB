angular.module('app').controller('userLogin',function($scope,$location){
  $scope.user={login:'admin',password:'amen'};

  $scope.sub=function(login,password){
if($scope.user.login==login && $scope.user.password==password){
    $location.path('/accueil');
  }else {
    alert('login ou/et password incorrect');
  }
};

});
