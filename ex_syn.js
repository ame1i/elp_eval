function test(f) { // Ne pas toucher à cette fonction
  setTimeout(function () {
    for (var i = 0; i < 20; i++) { 
      console.log("coucou", i);
    }
    f();
  })
}

function toto(){//modele d'execution le pus rapide
  console.log("Debut")
  test(function(message) {

    console.log("-> Terminé");
  });

  console.log("Fin")
  setTimeout(toto)
}
toto()