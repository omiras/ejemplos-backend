// El template string viene a formatear un string de forma sencilla normalmente con la inclusión de valores que vienen de variables

let edad = 21;

// Si tienés más de 18 años puedes entrar en la discoteca
const message = `- Hola señor, tengo ${edad} años
- ${edad >= 18 ? 'Sí, puedes    pasar' : 'No, vuelve cuando cumplas 18.'}`
console.log(message)

