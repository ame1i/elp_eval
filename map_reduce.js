//La manipulation de tableau se fait avec deux opérateurs de référence. map et reduce. 
//Calculez la moyenne d'un tableau en utilisant la fonction reduce.
lst = [1, 5 , 8 , 7 , 6 , 8 , 5 ,7]
//effet de bord: qn modifie le tab en meme temsp que lecture
/*
const sum = lst.reduce((total, amount) => total + amount);
res= sum/lst.length
console.log(res);
*/
//diminuer effet de bords

//console.log(lst.reduce((cumu)))//pas terminé
//map reduce , retirez 2 points à chaque elem + moy
function soustraire(item, index, arr){
    return arr[index] = item-2;
}
lst.forEach(soustraire)

console.log(lst)

const sum2 = lst.reduce((total, amount) => total + amount);
res2= sum2/lst.length
console.log(res2);