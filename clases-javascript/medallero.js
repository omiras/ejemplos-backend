/**
 * Vas a implementar una app para las olimpiadas en el cual tienes que crear objetos para representar medalleros olimpicos
*/

/**
 * Pais, numero de medallas total que ha ganado
 * 
 * Mejora: Implementa un método del objeto que permita incrementar el número de medallas
 * Mejora: Nos gustaría separar las medallas por oro, plata y bronce .. NOOOOO.. ¿es posible que exista una estructura de datos en programación que permite crear objetos según un molde?
*/

const medalleroEspaña = {
    nombre: "España",
    total: 21,

    ganarMedalla() { // función...dentro de un objeto se suele llamar método
        this.total = this.total + 1;
    }
}

// Medallero de China

const medalleroChina = {
    nombre: "China",
    total: 150,

    ganarMedalla() { // función...dentro de un objeto se suele llamar método
        this.total = this.total + 1;
    }
}

// Medallero de Japón

const medalleroJapon = {
    nombre: "Japón",
    total: 44,

    ganarMedalla() { // función...dentro de un objeto se suele llamar método
        this.total = this.total + 1;
    }
}

console.log(medalleroJapon);
console.log(medalleroJapon.constructor.name); // Object -> significa que es un objeto plano (que no viene de una clase)
