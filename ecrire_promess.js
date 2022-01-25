Promise = require('bluebird');

wait = function(time) {//fonction js qui return une promesse
  return new Promise(function(resolve) {
    setTimeout(resolve, time);//place resolve dans le scheduler
  });
}

wait(3000).then(() => console.log('Bonjour'))