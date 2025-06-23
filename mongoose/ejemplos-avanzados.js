/**
 * Imaginar que somos una clínica veterinaria especializada en michis. 
 * Queremos guardar en nuestra base de datos los "pacientes"
 * Los gatos tienen un nombre, una fecha nacimiento, un color de pelo
 * Nos gustaría poder guardar estos documentos en una colección en una base de datos de MongoDB
 */

/**
 * El nombre, tendría que ser obligatorio informarlo. 
 * Como minimo, de 3 carácteres, como maximo de 30
 * Fecha de nacimiento es opcional
 * Color del pelo: "White", "Black", "Mixed"
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;


async function main() {
    await mongoose.connect("mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/mongoose-examples");

    const blogSchema = new Schema({
        title: String, // String is shorthand for {type: String}
        author: String,
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    }, {
        statics: {
            findText(text) {
                return this.find({
                    $or: [
                        { name: new RegExp(text, 'i') },
                        { "comments.body": new RegExp(text, 'i') },
                        { body:new RegExp(text, 'i') },
                    ]
                });
            }
        }
    });

    blogSchema.add({
        category: String
    });

    const Blog = mongoose.model('Blog', blogSchema);

    const document = await Blog.findText("contenido");
    console.log(document);
    

    // Blog.create({
    //     title: 'Primer post',
    //     author: 'Juan Pérez',
    //     body: 'Este es el contenido del post.',
    //     comments: [
    //         { body: 'Muy interesante', date: new Date() },
    //         { body: 'Gracias por compartir', date: new Date() }
    //     ],
    //     hidden: false,
    //     meta: {
    //         votes: 10,
    //         favs: 2
    //     },
    //     category: 'Tecnología'
    // })
    //     .then(doc => console.log('Documento creado:', doc))
    //     .catch(err => console.error(err));


}

main();

