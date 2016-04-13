angular.module('app').controller('ChatController',function(){
this.messages=[];
this.sender="Amen Allah";
this.sendMessage=function(message){
  var messageData={
    from:this.sender,
    text:message
  };
  this.messages.push(messageData);
}


})
