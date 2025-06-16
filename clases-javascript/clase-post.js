class Post {
    constructor(title, mainImage, author) {
        this.title = title;
        this.mainImage = mainImage;
        this.author = author;
    }
}

const chatGPT = new Post("Chat GPT", "https://cdn.image.jpg", "Marta Peirano");
const apagon = new Post("El Apagón", "https://", "Lucas Garcia");

const otroArticulo = new Post("", "https://", "Pepe");
apagon.salvarEnBaseDeDatos();