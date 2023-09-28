var nom = (prompt("Ingrese su nombre: "));
alert("Bienvenido a la página de JavaScript "+ nom);
var res1 = prompt("1. ¿Cuánta agua hay en la Tierra?\n A:Alrededor de un 41% de la superficie terrestre es agua.\n B:Alrededor de un 51% de la superficie terrestre es agua. \n C:Alrededor de un 71% de la superficie terrestre es agua.")

if(res1=="C"){
    res1 = 1;
}else{
    res1 = 0;
}
var res2 = prompt("2. ¿Qué océano es el más grande?\n A:El Pacífico.\n B: El Atlántico.\n C:El Índico.")
if(res2=="A"){
    res2 = 1;
}else{
    res2 = 0;
}
var res3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\n A:11 Km\n B:23 Km\n C:31 Km")
if(res2=="C"){
    res2 = 1;
}else{
    res2 = 0;
}

var total = res1+res2+res3;
if(total >= 2){
    document.write("<h1>Felicidades </h1>"+ nom + "“<h1>. Lo has hecho bien</h1>")
}else{
    document.write("</h1> Lo pudiste hacer mejor </h1>"+nom)
}
