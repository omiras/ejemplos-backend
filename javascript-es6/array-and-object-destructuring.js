let arr = ["John", "Smith", 45]
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
// No estamos creado un array. los [] a la izquierda del operador de asignación nos indican que estamos usando la desestructuración de arrays
let [firstName, surname, age] = arr;

console.log(firstName); // John
console.log(surname);  // Smith
console.log(age); // 45

// Puedo declarar varias variables a la vez?
let nombre = "Zulema", edad = 24, peso = 60;
console.log(edad);

// Desestructuración de objetos

const reservaAirbnb = {
    idReserva: "reserva123", // Identificador único de la reserva
    estadoReserva: "Confirmada", // Estado actual de la reserva (ejemplo: Confirmada, Pendiente, Cancelada)
    metodoContacto: "Email", // Método preferido de contacto con el huésped (ejemplo: Email, Teléfono)
    necesidadesEspeciales: ["Cama adicional", "Silla de ruedas"], // Lista de necesidades especiales solicitadas por el huésped
    preferencias: {
        tipoCama: "Cama matrimonial", // Preferencia de tipo de cama del huésped
        vistas: "Vistas al mar", // Preferencia de vistas desde la propiedad
        plantaPreferida: "Planta baja" // Preferencia de planta dentro del edificio
    },
    documentos: {
        tipoDocumento: "Pasaporte",
        numeroDocumento: "AB123456", // Número de documento de identidad del huésped
        paisEmision: "España", // País de emisión del documento
        fechaExpiracion: "2026-05-01" // Fecha de expiración del documento
    },
    preferenciasAlimentacion: {
        vegetariano: false, // Si el huésped tiene preferencias vegetarianas
        alergias: [], // Lista de alergias alimentarias del huésped
        requerimientosEspeciales: "Sin gluten" // Requerimientos dietéticos especiales
    },
    transporte: {
        aeropuerto: "Sí", // Si se requiere transporte desde/hacia el aeropuerto
        tipoTransporte: "Transfer privado", // Tipo de transporte solicitado (ejemplo: Transfer privado, Taxi)
        numeroVuelo: "AB1234" // Número de vuelo del huésped, si aplica
    },
    extras: ["Botella de vino de bienvenida", "Tour guiado por la ciudad"], // Servicios o extras adicionales solicitados por el huésped
    notasAdicionales: "Por favor confirmar la disponibilidad de parking para un vehículo grande." // Notas adicionales o requerimientos especiales del huésped
};

// DE este objeto me quiero quedar con el id de la reserva, si está confirmada, con todas las preferencias del cliente y su número de vuelo

// const idReserva = reservaAirbnb.idReserva;
// const estaConfirmada = reservaAirbnb.estadoReserva;
// const preferencias = reservaAirbnb.preferencias;
// const numVuelo = reservaAirbnb.transporte.numeroVuelo;

const { idReserva, estadoReserva, preferencias, transporte: { numeroVuelo } } = reservaAirbnb;
console.log("idReserva: ", idReserva)
console.log("estadoReserva: ", estadoReserva);
console.log("preferencias: ", preferencias);
console.log("numeroVuelo", numeroVuelo);