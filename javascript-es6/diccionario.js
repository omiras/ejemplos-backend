const mensajes = {
    pending: 'Tu pedido está en preparación.',
    shipped: 'Tu pedido ha sido enviado.',
    delivered: 'Tu pedido fue entregado.',
    canceled: 'Tu pedido fue cancelado'
};

estado = "delivered";

const mensaje = mensajes[estado];
console.log("🚀 ~ mensaje:", mensaje)
