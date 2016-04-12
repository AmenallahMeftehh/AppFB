angular.module('app').controller('userController',function($scope,userService){

$scope.user = function(status)
{
userService.addstatut(status);
};
$scope.user={};
$scope.user.nom="Amen Allah Mefteh";
$scope.user.image="image.jpg";
$scope.user.statut=["Je suis heureux","Journée inoubliable","Quelle ambiance"];
$scope.user.album=["IMG_0291.JPG","IMG_0317.JPG","IMG_0348.JPG","img1.jpg","image2.jpg","image3.jpg"];
$scope.user.universite="ESPRIT";
$scope.user.age="26 ans";
$scope.user.situation="celibataire";
});
