/**
 * Crea una función que combine los dos nombres, dejando un espacio en medio
 * 
 * @param {string} name1 Primer nombre
 * @param {string} name2 Segundo nombre
 * 
 * @returns {string} Devuelve un string que son los dos nombres contactenados separados por un espacio 
 */

function combineNames(name1, name2) {

    if (!name1 || !name2) {
        throw new Error("Arguments can't be empty");
    }

    if (typeof name1!='string' || typeof name2!='string'){
        throw new Error("Both arguments must be a string.");
    }

    // Concatenamos los dos nombres con un espacio en medio
    // Usamos el operador + para unir los strings
    let fullName = name1 + ' ' + name2

    // Devolvemos el resultado de la concatenación
    return fullName

}




const pers1 = {
    name: "Peter",
    lastName: "Griffin",
    age: 33
}

console.log(combineNames(pers1.name, pers1.age));