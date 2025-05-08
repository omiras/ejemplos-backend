const usuario =   {
    firstName: 'Kirby',
    lastName: 'Doyle',
    id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
    isActive: false,
    balance: '$3,570.06',
    gender: 'male'
  };

  // Crear un objeto nuevo solo con el firstName y el lastName

const { firstName, lastName } = usuario;

const copiaUsuario = {
    firstName, // firstName: firstName
    lastName, // lastName: lastName
    genre: "Male"
}
console.log("🚀 ~ copiaUsuario:", copiaUsuario)

