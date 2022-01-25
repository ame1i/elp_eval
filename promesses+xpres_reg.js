/*
string ="abc"
liste = string.split("")
console.log(liste)
map1 = liste.map(x => x.charCodeAt(0).toString(16).padStart(2,0)) //affiche la val hexa
console.log(map1)
*/
const paragraph = 'abfg';
const regex =  /[A-Z]/gi;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
