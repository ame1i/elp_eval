/*res = 0
for (i=0; i<100; i++) {
    res = Math.cos(res)
    console.log(res)}
*/
//exercice 1.3 de manière récursive

i=0
/*recursion = fonction (valeur) {
    console.log(Math.cos(valeur))
    i=i+1
    recursion(res)
}
console.log(i)
recursion(4)
*/
calculCos = function (val) {
    console.log(Math.cos(val))
    i=i+1
        calculCos(Math.cos(val))
    setTimeout(calculCos, 0, Math.cos(val))
}
console.log(i)
calculCos(1)
