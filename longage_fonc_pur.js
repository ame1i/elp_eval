function create() {
    let reponse = 23;//notion de closure, qu'est ce qu'il se passe si on modifie reponse
    return function (x) { return x + reponse; }
  }
  let a = create()
  console.log(a(12))
// je ne comprends pas la question, en fait le code fonctionne déjà
// les fonctions peuvent retourner des fonctions, cela forme une certaine recursivité
//qu'est ce qu'est this dans ce cas de figure?
/*reponse
La fonction est un objet on rajoute une structure de donnée
pour l'utiliser*/
