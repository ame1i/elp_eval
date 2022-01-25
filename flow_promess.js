Promise = require('bluebird');

wait = function(time) {//fonction js qui return une promesse
  return new Promise(function(resolve, reject) {
      if (time>3000){
        reject('erreur');
    }else {
    setTimeout(resolve, time);//place resolve dans le scheduler
      }
    
  });
}
wait(4000)//va causer une erreur
.then(function(){return wait(4000);})//attention metttre un retunr
.then(function(){console.log('cool');})
.catch(function(res) {console.log('erreur', res);})