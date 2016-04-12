angular.module('app').factory('userService',function(){
var user={
  nom:"Amen Allah Mefteh",
  image:'image.jpg',
  statut:["Je suis heureux","Journée inoubliable","Quelle ambiance"],
  Université:'ESPRIT',
  album:["IMG_0291.JPG","IMG_0317.JPG","IMG_0348.JPG"]
};
var getstatut = function(){
  return user.statut;
}
var addstatut=function(status){
  console.log('ajout');
  user.statut.push(status);

}
return{
  addstatut:addstatut,
  getstatut:getstatut
};

});
