const products = [
    {
        name: 'Después',
        author: 'Stephen King',
        price: 200,
        stock: 4,
        id: 1,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655325471/img%20books/Later_005__uyrl5g.jpg',
        category: 'ficción',
        idioma: 'español',
        isbn10: 1789096499,
        description:
            'Jamie Conklin; el único hijo de una madre soltera; solo quiere tener una infancia normal. Sin embargo; nació con una habilidad sobrenatural que su madre le insta a mantener en secreto y que le permite ver aquello que nadie puede y enterarse de lo que el resto del mundo ignora.',

        discount: 50,
    },
    {
        name: 'Los Compas vs Hackers',
        author: 'Mikecrack',
        price: 222,
        stock: 10,
        id: 11,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655326172/img%20books/695132_defr1i.jpg',
        category: 'infantil',
        idioma: 'español',
        isbn10: 9789508702005,
        description:
            'Los Compas disfrutan de un vuelo tranquilo a Tropicubo cuando de repente una tormenta los obliga a hacer un aterrizaje forzoso.¡Se han salvado de milagro! Pero algo raro sucede¿ Están en la misteriosa base secreta de unos malvados hackers¿ El Área Puerro 51.',

        discount: 25,
    },
    {
        name: 'Al final mueren los dos',
        author: 'Adam Silvera',
        price: 300,
        stock: 4,
        id: 2,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655326392/img%20books/646539_j0fnsl.jpg',
        category: 'ficción',
        idioma: 'español',
        isbn10: 9789874132017,
        description:
            'Imagina un mundo en el que una organización les avisa a las personas la inminencia de su muerte. Imagina que empezó la cuenta regresiva. Imagina cómo vivirías tu vida� en solo un día. ¿Estarías listo para decir adiós? Al final mueren los dos es un canto a la fuerza arrolladora de la vida; que transformará para siempre tu forma de comprender el tiempo; la amistad y el amor.',
        discount: 10,
    },
    {
        name: 'Roma soy yo',
        author: 'Santiago Posteguillo',
        price: 333,
        stock: 4,
        id: 22,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655326517/img%20books/693001_elbzwv.jpg',
        category: 'biografía',
        idioma: 'español',
        isbn10: 9789877802894,
        description:
            'Roma; año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción; pero ha contratado a los mejores abogados; ha comprado al jurado y es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal; hasta que de pronto; contra todo pronóstico; un joven patricio de tan solo veintitrés años acepta llevar la acusación; defender al pueblo de Roma y desafiar el poder de las élites.',
        discount: 10,
    },
    {
        name: 'No salgas de noche',
        author: 'Stacy Willingham',
        price: 80,
        stock: 20,
        id: 4,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655326671/img%20books/694057_tnwdzd.jpg',
        category: 'ficción',
        idioma: 'español',
        isbn10: 9789878474229,
        description:
            'Toda su vida ha intentado superar el tortuoso pasado de su familia: ser la hija de un asesino en serie. Ahora se encuentra preparando su boda, todo ha quedado atrás… aunque parece que no será tan fácil. Un asesino imitador ha surgido 20 años después. ¿todo se repite?',
        discount: 15,
    },
    {
        name: 'Harry Potter y la piedra filosofal',
        author: 'J.K. Rowling',
        price: 88,
        stock: 5,
        id: 44,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1655326769/img%20books/677655_lpattg.jpg',
        category: 'ficción',
        idioma: 'español',
        isbn10: 9789878000404,
        description:
            'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo; hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento; la suerte de Harry da un vuelco espectacular.',
        discount: 5,
    },
];
 

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

