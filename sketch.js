//miercoles 20 de julio --> haremos que una elipse siga al mouse

//APUNTES Y VARIABLES
//declarar--> para usar una variable hay que declararla , así la maquina sabe que existe.
//var x; (x equivale a algo lo que sea)
var diametro;

//depsués de delcarar la variable, podemos ASIGNAR un valor

diametro=50; //asignamos valor a "variable" la puedo pisar escribiendo más abajo un nuevo valor

//hay 2 tipos de variables: locales y las globales
// las variables globales viven fuera de una función
//las variables locales viven dentro de la función
//Variable Global, es más peligrosa y la repite infinitas veces y se carga muchas veces
//la variable local es más facil de controlar. esta se carga solo una vez y lueo desaparece.


//LAS FUNCIONES TAMBIEN SE DECLARAN
function nombreFuncion(){
  //acá van todas las funciones e instrucciones
  //finalmente podemos crear la función y luego mverla de posicion para que corra Tan solo mencionado la por el 
  //nombre de la funcion mas parentesis y más el punto y coma ej: NombreFuncion();
}

//La funcion setup se ejecuta una vez
function setup() {
  //canvas es el lienzo  
  createCanvas(500, 400);
  //background of course, es el color de fondo :)
  background(0,194, 160);
}


//todo lo que está dentro de DRAW lo ejectutará 60 veces x segundo 
function draw() {
  //declarar vardiable ancho borde --> esta sería una variable LOCAL
  var anchoBorde;
  //asignar un valor
  anchoBorde = 10; // O podemos directamente en la linea que declaramos la 
  //variable poner un igual y dar valor sería VAR ANCHOBORDE = 10;
   
  //dibujar una elipse (posX, Pos Y, Widht & Height) para dibujar una elipse
  //Medidas en px
  //ellipse(100, 100, 40, 40); //el código es para poner un circulo estático
  
  //CamelCase es escirbir palabras en mayuscula y minúsculas
  
  //noFill(); //No tiene relleno PRIMERO DEBEMOS DAR LOS PARAMETROS O CARACTERISTICAS DEL ELEMENTO
  //Esto lee de arriba hacia abjo, por ende, si escribo una función antes, la desarrollará antes.
  
  background(0,194, 160);//pegar nuevamente el fondo, es para que no quede la "estela" de la esfera
  
//las comenté por que abajo hice una función para esto  strokeWeight(10);//tamaño del borde(px)
//las comenté por que abajo hice una función para esto  stroke(210,0,100); //sólo el color del borde (rgb)
//las comenté por que abajo hice una función para esto  fill(255,222,0); //relleno del circulo
  
  estilo2()
  ellipse(100, 100, 30, 30);//Con este código,sigue el circulo al mouse
  
  estilo1()
  ellipse(mouseX, mouseY, diametro, diametro);//asignar el valor de la variable en vez de un valor real
 
 //esto seria una asignacion nueva a la variable global  
//-->ESTO LO comenté por ahora--> diametro = diametro + 1; //irá ejecutando 60 veces por segundo por ende irá creciendo cada 1 segundo +1

estilo3()  
rectMode(RADIUS);  // Set rectMode to RADIUS
//fill(255);  // Set fill to white
rect(100, 150, 80, 80);  // Draw white rect using RADIUS mode los primeros valores son X-Y

rectMode(CENTER);  // Set rectMode to CENTER
fill(205, 0, 205);  // Set fill to gray
rect(100, 150, 80, 80);  // Draw gray rect using CENTER mode  
translate(width/3, height/2);
rotate(PI/5.0);
rect(-30, -30, 82, 82);


  
  
  
}//cierre de mi funcion draw

//declaracion de funcion de estilo de elipse
function estilo1(){
  strokeWeight(10);//tamaño del borde(px)
  stroke(210,0,100); //sólo el color del borde (rgb)
  fill(255,222,0); //relleno del circulo
}

function estilo2(){
  strokeWeight(1);//tamaño del borde(px)
  stroke(256,100,100); //sólo el color del borde (rgb)
  fill(165,202,0); //relleno del circulo
}

function estilo3(){
  strokeWeight(4);//tamaño del borde(px)
  stroke(0,155,255); //sólo el color del borde (rgb)
  fill(255,0,0); //relleno del circulo
}

