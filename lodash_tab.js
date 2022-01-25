// attention il faut faire npm install lodash dans le dossier ou se situe le fichier qui utilise lodash
//let fruits = ['apple', 'banana', "patate", "citron"];
_ = require('lodash');
console.log(_);
_.forEach([1,2,3], function(elem){ console.log(elem)})
_.sortBy([1, 5, 2]);
