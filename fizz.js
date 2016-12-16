var numeros = 100;
var divisible = false;

for(var i = 0;i <= 100;i++){
  
  if (crearModulo(i, 3)) {
    document.write("fizz");
    divisible = true
  }

  if(crearModulo(i, 5)){
    document.write("buzz");
    divisible = true;    
  }

  if( (!crearModulo(i, 3)) && (!crearModulo(i,5)) ){
    document.write(i);    
  }

  document.write("<br/>");
}


function crearModulo(num,divisor){
  if (num%divisor == 0) {
    return true;
  } else{
    return false;
  }
}