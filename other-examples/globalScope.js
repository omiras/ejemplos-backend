function random1to10() {
  return Math.floor(Math.random() * 10) + 1;
}

globalThis.random1to10 = random1to10;

console.log(globalThis);

const usuario = {
  nombre: "Carlos",
  email: "carlos@email.com"
};

Object.defineProperty(usuario, "__validado", {
  value: true,
  enumerable: false,
  writable: true
});

console.log(usuario.__validado);         // 👉 true
console.log(Object.keys(usuario));       // 👉 ['nombre', 'email']
console.log(JSON.stringify(usuario));    // 👉 {"nombre":"Carlos","email":"carlos@email.com"}
