
const mongoose = require('mongoose');

async function run() {

 await mongoose.connect("mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/2025-relaciones-ironhack");

 

 // Documentos incrustado - los servicios de un apartamento
 // ejemplo: Apartamento.
 // DOCUMENTOS INCRUSTADOS
const apartmentSchema = new mongoose.Schema({
  name: String,
  services: {
    wifi: Boolean,
    parking: Boolean,
    
  } // Incrustación directa (simple)
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

// CREAR UN APARTAMENTO
// await Apartment.create({
//   name: "Apartamento Costa Brava",
//   services: {
//     wifi: true,
//     parking: false
//   }
// });


 // DOCUMENTOS INCRUSTADOS

// CREAR UN APARTAMENTO

 // Documento incrustado - esquemas diferentes
   // Imaginar una empresa cualquiera que tiene Clientes y Proveedores. Podria ser una buena idea separar en un Scheam aparte lo que para la empresa representa una "Dirección Postal"
// SUBESQUEMA COMPARTIDO
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zip: String,
  country: String,
}, { _id: false }); // evitamos _id en los subdocumentos

// CLIENTE
const clientSchema = new mongoose.Schema({
  name: String,
  address: addressSchema
});
const Client = mongoose.model("Client", clientSchema);

// PROVEEDOR
const supplierSchema = new mongoose.Schema({
  companyName: String,
  address: addressSchema
});
const Supplier = mongoose.model("Supplier", supplierSchema);

// CREAR CLIENTE Y PROVEEDOR
// await Client.create({
//   name: "Juan Pérez",
//   address: { street: "Calle A", city: "Madrid", zip: "28001", country: "España" }
// });

// await Supplier.create({
//   companyName: "Suministros SL",
//   address: { street: "Calle B", city: "Barcelona", zip: "08002", country: "España" }
// });


/** Documentos en diferentes colecciones relacionados por su ObjectID */
/** Ejemplo: una empresa de alquiler de coches, que tiene clientes y  */

// MODELO CLIENTE
const rentalClientSchema = new mongoose.Schema({
  name: String,
  dni: String,
});
const RentalClient = mongoose.model("RentalClient", rentalClientSchema);

// MODELO COCHE
const carSchema = new mongoose.Schema({
  model: String,
  plate: String,
  rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "RentalClient" } // relación 1:1
});
const Car = mongoose.model("Car", carSchema);

// CREAR CLIENTE Y COCHE RELACIONADO
// const carlos = await RentalClient.create({ name: "Carlos", dni: "12345678A" });
// const alejandro = await RentalClient.create({ name: "Alejandro", dni: "12345555T" });


// const carClio = await Car.create({
//   model: "Renault Clio",
//   plate: "1234AZT"
// });

// Recuperar el Clio de la base datos
const carClio = await Car.findById("686d578f5d68e57cae9ea6c0");

// Asignarle el ObjectID de Carlos
// Recuperar a Carlos de la base de datos
// const carlos = await RentalClient.findById("686d578f5d68e57cae9ea6bc");

// ¿Quién tiene alquilado el Clio?


//carClio.rentedBy = carlos._id;
//await carClio.save();




// CONSULTA CON populate
const carConCliente = await Car.findById("686d578f5d68e57cae9ea6c0").populate("rentedBy");
// console.log("Coche alquilado:", carConCliente);


/** Relacion en la que una entidad puede posser "varias" otras entidades **/
/** Por ejemplo, una persona puede tener varias propiedades. A su vez, una propiedad puede pertenecer a varias personas
 */
// --- Esquema de propietario ---
const ownerSchema = new mongoose.Schema({
  name: String,
  houses: [{ type: mongoose.Schema.Types.ObjectId, ref: "House" }]
});
const Owner = mongoose.model("Owner", ownerSchema);

// --- Esquema de casa ---
const houseSchema = new mongoose.Schema({
  address: String,
  owners: [{ type: mongoose.Schema.Types.ObjectId, ref: "Owner" }]
});
const House = mongoose.model("House", houseSchema);

// Crear propietarios
// const alice = await Owner.create({ name: "Alice" });
// const bob = await Owner.create({ name: "Bob" });

// // Crear casas
// const house1 = await House.create({ address: "123 Elm Street" });
// const house2 = await House.create({ address: "456 Oak Avenue" });

// Relacionarlos

// ¿quién o quiénes son los propietarios de la casa de Elm Street?
const houseElm = await House.findById('686d656c234977154f89b235').populate("owners");
const houseOak = await House.findById('686d656c234977154f89b237').populate("owners");


// Recuperar a 
const bob = await Owner.findById("686d656c234977154f89b233");
// Recuperar a Alicia
const alice = await Owner.findById("686d656c234977154f89b231");

alice.houses.push(houseElm._id);
bob.houses.push(houseElm._id, houseOak._id);

await alice.save();
await bob.save();



await mongoose.disconnect();
}

run();