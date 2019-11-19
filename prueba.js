/* PUNTO 2 PRUEBA TECNICA MAKE IT REAL */

// function count(str, char){
//     for (let index = 0; index < str.length; index++) {
//         let contador = 0;

//        //console.log(str[index]);
//        if (str[index] === char) {
//            contador++;
//        }
       
//        return contador;
//     }
// }

// let cadena = "PruebaTecnica"
// let caracter = 'l'

// let cuenta = count(cadena, caracter)
// console.log(`El caracter ${caracter} se encuentra ${cuenta} veces en la cadena de caracteres ${cadena}`);

/* PUNTO 3 PRUEBA TECNICA MAKE IT REAL */

// function filter(arrays){
//     let new_array = [];
//     arrays.forEach((array, index) => {
//         if (array > 10) {
//             new_array.push(array)
//         }
//     });
//     return new_array

// }

// let vector = [12, 16, 27, 1, 0, 8, 74, 2]
// let result = filter(vector)
// console.log(result);


/* PUNTO 4 PRUEBA TECNICA MAKE IT REAL */

function hypotenuse(a, b){

    //Alternativa 01
    let calculate_1 = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

     //Alternativa 02
    let calculate_2 = Math.sqrt((a*a) + (b*b))
    return calculate_2;
}

let pitagoras = hypotenuse(4, 6);
console.log("El valor de la hipotenusa es: " + Math.round(pitagoras * 100) / 100);