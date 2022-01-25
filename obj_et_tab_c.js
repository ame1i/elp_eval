/* js ne cherche pas la performance mais la flexibilité
chose est un dictionnaire comme dans python
est une association clé:valeur
*/
let chose = { "hello" : "coucou", 3:10}
chose["3"];

chose.hello;
delete chose.hello;
chose
for (o in chose) {
  console.log( o + '->' + chose[o])
}
/* pourquoi une hashmap est un objet ?
(un objet a 
    communication par message
    une structure qui permet de definir, des attributs en interne et des méthodes
    on peut proteger l'objet avec private/publique = encapsulation on peut le réaliser si on encapsule le dico dans une fonction)


*/