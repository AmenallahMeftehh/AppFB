angular.module('app').controller('userController',function($scope,userService){
$scope.user=userService.user;
$scope.user = function(status)
{
userService.addstatut(status);
};


});
