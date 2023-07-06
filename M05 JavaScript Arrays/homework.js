/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[array.length-1]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const arrayMas1 = (arr) => {
      const a = [];
      arr.map((elemento)=>{
         a.push(elemento+1);
      })
      return a;
   }

   return( arrayMas1(array) )
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const newArr = [...array, elemento];
   return(newArr);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const newArr = [elemento, ...array];
   return(newArr);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   const frase = palabras.join(' ');
   return(frase);
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return(array.includes(elemento) ? true : false);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   const sumados = (arr) => {
     let cuenta = 0;
      arr.forEach(element => {
         cuenta = cuenta+element;
      });
     return cuenta;
   }

   return( sumados(arrayOfNums) );
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   const promedio = (arr) => {
      let cuenta = 0;
       arr.forEach(element => {
          cuenta = cuenta+element;
       });
      return (cuenta/arr.length);
    }
 
    return( promedio(resultadosTest) );
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return( Math.max(...arrayOfNums));
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   const arr = Array.from(arguments);

   if(arr.length>0){
      return( arr.reduce((a, b) => a*b) );
   }else{
      return 0;
   }

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   const saberSiEsMayorA18 = (arr) => {
      let n = [];
      arr.map((el)=>{
         (el>18) && n.push(el);
      })

      return(n.length);
   }

   return( saberSiEsMayorA18(array) );
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   const x = (dia) => {
     if(dia===7 || dia===1){
      return 'Es fin de semana';
     }else{
      return 'Es dia laboral';
     }
   }

   return( x(numeroDeDia) );
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const x = (numero) => {
      const numAstring = numero.toString();
      const searcher = '9';

      if(numAstring.search(searcher)===0){
         return true
      }else{
         return false
      }
   }

   return ( x(num) );

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   const todosSonLosMismos = arr => arr.every( elem => elem === arr[0] )

   return(todosSonLosMismos(array)===true ? true : false);
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   let mesesAbuscar = ['Enero', 'Marzo', 'Noviembre'];
   let mesesEncontrados = [];

   array.map((elem)=>{
      for (let i = 0; i < mesesAbuscar.length; i++) {
         elem===mesesAbuscar[i] && mesesEncontrados.push(elem);
      }
   })

   return( mesesEncontrados.length<3 ? "No se encontraron los meses pedidos" : mesesEncontrados)
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tablita6del0al10= () => {
     let arrResults = [];
     
     for (let i = 0; i <=10; i++) {
      arrResults.push(i*6)
     }

     return arrResults;
   }

   return(tablita6del0al10())
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresA100 = [];
   array.map((elem)=>{
      elem>100 && mayoresA100.push(elem);
   })

   return(mayoresA100)
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let array = [];
   let suma = num;

   for (var i = 0; i < 10; i++) {
      suma += 2;
      if (suma === i)break;
      else {
         array.push(suma);
      }
   }

   if(i < 10) {
      return 'Se interrumpió la ejecución';
   } else {
      return array;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let array = [];
   let suma = num;

   for (i = 0; i < 10; i++) {
      if (i === 5)continue;
      else {
         suma = suma + 2;
         array.push(suma);
      }
   }
   
   return array; 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
