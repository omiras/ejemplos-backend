async function obtenerChiste() {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');

    if (!res.ok) {
        console.log("Algo ocurrido al consumir la API, prueba más tarde");
        return;
    }

    const data = await res.json();
    console.log('Chiste de Chuck Norris:', data.value);
  } catch (err) {
    console.error('No se pudo obtener el chiste:', err.message);
  }
}

obtenerChiste();
