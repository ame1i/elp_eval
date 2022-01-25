/*
Moteur de recherche
robots qui cherchent le contenu des pages
type de dev 
*/
fs = require('fs');//permet d'éditer des fichiers
request = require('request');

fs.readFile('./web.txt', 'utf8', function(err, res) {//function == callback
  if (err) {//réaction simple
    console.trace()
    console.log(err.stack);
    return
  }
  request.get(res, function(err, res) {//requete quand obtenu le contenu le thread renvoie la ft err res
    pages = res.body.match(/https{0,1}:\/\/([^'"]*)/g);//scraper : analyser une page web
    pages.forEach(function (elem) {
      request.get(elem.substring(0,elem.length-1), function(err, res) {
        if (res) {
          pages = res.body.match(/https{0,1}:\/\/([^'"]*)["']/g);// http s ou pas , \/ ==/,g autant de fois que je le trouve
          if (pages) {
            pages.forEach(function(elem) {
              console.log('->', elem)
            })
          }
        }
      })
    })
  })
})
console.log(`toto`)