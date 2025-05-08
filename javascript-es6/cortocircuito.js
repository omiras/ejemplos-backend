let erroresValidaciones = false;

// quiero ejecutar lo de la derecha si se cumple todo lo de la izaquierda
!erroresValidaciones && !erroresSintaxis && console.log("Enviar el formulario");

const mensajes = {
    pending: 'Tu pedido está en preparación.',
    shipped: 'Tu pedido ha sido enviado.',
    delivered: 'Tu pedido fue entregado.',
  };

  let estado = "pending";
  
  // quiero asegurarme un valor por defecto siempre
  const mensaje = mensajes[estado] || 'Estado desconocido del pedido.';
  console.log("🚀 ~ mensaje:", mensaje)



