/* Referencias a los contenedores */
let contenedor_e1 = document.getElementById("ejercicio_1");

/* EJERCICIO 1 */
const ArrayEjemplo = [
    {
        nombre: 'Adriana Paola',
        edad: 18,
    }
]

/* PUSH */
ArrayEjemplo.push({ nombre: 'Melanie', edad: 19 });
ArrayEjemplo.forEach(Array => {
    console.log(Array.nombre);
});

/* REDUCE (Utilizado para encontrar la persona màs joven dentro del array)*/
const personaMasJoven = ArrayEjemplo.reduce((personaMasJoven, persona) => {
    if (!personaMasJoven || persona.edad < personaMasJoven.edad) {
        return persona;
    }
    return personaMasJoven;
}, null);
console.log("La persona más joven es:", personaMasJoven.nombre, "con", personaMasJoven.edad, "años.");

/* FILTER */
const ArrayEjemploNombres = [];
ArrayEjemplo.forEach(Array => {
    ArrayEjemploNombres.push(Array.nombre);
});
console.log(resultFilter = ArrayEjemploNombres.filter((word) => word.length > 9));