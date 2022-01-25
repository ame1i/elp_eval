fs = require('fs-extra-promise');//permet d'éditer des fichiers
request = require('request');

fs
.readFileAsync('./web.txt', 'utf-8')
.then((res)=>{console.log(res);})
.catch((res)=>{console.log(res);})


