function a(x, y) {
   console.log("les variables-->", x, y);
   res = x * y;
   return res;
}
	 
console.log(a(2,4))
function test(x,y){
   if (a(x,y) == x*y){
      //console.log()
      return true

   }
   return

}
console.log(test(2,4))
//la fonction est disponible par l'intermédiaire de la variable a de la manière suivante : a(paramètre)