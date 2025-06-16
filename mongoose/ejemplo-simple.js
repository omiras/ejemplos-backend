/**
 * Imaginar que somos una clínica veterinaria especializada en michis. 
 * Queremos guardar en nuestra base de datos los "pacientes"
 * Los gatos tienen un nombre, una fecha nacimiento, un color de pelo
 * Nos gustaría poder guardar estos documentos en una colección en una base de datos de MongoDB
 */

/**
 * El nombre, tendría que ser obligatorio informarlo. 
 * Como minimo, de 3 carácteres, como maximo de 30
 * Fecha de nacimiento es opcional
 * Color del pelo: "White", "Black", "Mixed"
 */

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/vleterinary-guixos");

    // Definimos que nuestros gatos tienen un nombre
    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "El gato tiene que tener un nombre"],
            minlength: 3,
            maxlength: 30
        },
        birthDate: Date,
        furColor: {
            type: String,
            enum: ["Black", "White", "Mixed"]
        }
    });

    // Tenemos que asociar este schema a un modelo
    // Podemos entender el modelo como la "clase" que nos va a permitir
    // instanciar objetos del tipo 'kitty'
    const Kitten = mongoose.model('Kitten', kittySchema);

    // Tenemos una clase que se llama 'Kitten' que nos va permitir crear objetos siguienda el patrón de kittySchema

    // Mongoose nos provee de un método de la clase que nos permite hacer un 'find' para buscar documentos
    const documents = await Kitten.find({furColor: "Black"});

    console.log(documents);

    // Crear una instancia de la clase 'Kitten'
    // const cat = new Kitten({
    //     name: "Sardinas",
    //     birthDate: new Date("2010-07-01"),
    //     furColor: "Black"
    // });

    // // método para poder guardar este documento en la base de datos
    // try {
    //     await cat.save();
    //     console.log("Gato insertado correctamente");

    // } catch (err) {
    //     console.log(err.message);
    // }

}

main();

