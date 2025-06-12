class Medallero {
    constructor(nombrePais) {
        // Usamos la palabra reservada this para definir las propiedades qeu va a tener este objeto
        // Además, las podemos inicializar
        this.nombrePais = nombrePais;
        this.totalMedallas = 0;
    }

    ganarMedalla() {
        this.totalMedallas += 1; 
    }
}

// Quiero crear objetos que tengan un nombre de pais y al inicio vamos a decir que tienen 0 medallas

// new --> Palabra reservada usada para crear una instancia del objeto que le ponemos a la derecha
// Crear una instancia de la clase Medallero (objeto) y guardar una referencia en la variable medalleroEspaña
const medalleroEspaña = new Medallero("España");
medalleroEspaña.ganarMedalla();
medalleroEspaña.ganarMedalla();
const medalleroChina = new Medallero("China");
medalleroChina.ganarMedalla();
console.log(medalleroChina);
console.log(medalleroEspaña);
