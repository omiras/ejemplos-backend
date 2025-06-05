// importar el módulo
const { MongoClient } = require('mongodb');

// Crear una instancia de MongoDB Client para conectarnos más tarde
const client = new MongoClient("mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/");

// Crear una función asíncrona
async function run() {
    // conectamos a nuestra base de 
    try {
        await client.connect();

        // Recuperar todos los restaurantes cuya cocina sea del tipo Italian
        // Seleccionar base de datos
        const db = client.db("sample_restaurants");

        // Seleccionar la colección
        const collection = db.collection("restaurants");

        // Realizar al consulta
        // Recuperar los restaurantes en una variable, para más tarde...
        // ....pasarlo al EJS y renderizar un HTML
        // ....pasarlo como respuesta JSON de /api/restaurants?cuisine=italian
        const results = await collection.find({cuisine: "Italian"}, {projection: {name: 1, borough: 1, _id: 0}}).limit(2).toArray(); // Necesitamos transformar los resultados a una array para poder manejarlo

        console.log(results);

    } catch (err) {
        console.log(err.message);
    }

}

run();
