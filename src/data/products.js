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
    {
        name: 'Violeta',
        author: 'Isabel Allende',
        price: 88,
        stock: 3,
        id: 47,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1658781583/img%20books/9788401027475_wlogve.jpg',
        category: 'ficción',
        idioma: 'español',
        isbn10: 9788401027475,
        description:
            'La épica y emocionante historia de una mujer cuya vida abarca los momentos históricos más relevantes del siglo XX.Desde 1920 -con la llamada «gripe española»- hasta la pandemia de 2020, la vida de Violeta será mucho más que la historia de un siglo.',
        discount: 5,
    },
    {
        name: 'Anna Kadabra 8. ',
        author: 'Pedro Mañas',
        price: 24,
        stock: 6,
        id: 74,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1658781812/img%20books/9788408251354_sxnnc7.jpg',
        category: 'infantil',
        idioma: 'español',
        isbn10: 9788408251354,
        description:
            '¿Conseguirán Anna y sus amigos la gran varita de oro? Anna y el resto de aprendices están emocionados. ¡Les toca ser los anfitriones del próximo festival de brujería! Pasarán juntos un fin de semana en la mansión encantada, conocerán a un montón de magos…y competirán con los demás clubes para intentar ganar el premio más importante: ¡la gran varita de oro!',
        discount: 5,
    },
    {
        name: 'Frida Kahlo. Una biografía',
        author: 'Maria Hesse',
        price: 90,
        stock: 4,
        id: 98,
        img: 'https://res.cloudinary.com/dvowu5hzu/image/upload/v1658781992/img%20books/9788426403438_nlyqgd.jpg',
        category: 'biografía',
        idioma: 'español',
        isbn10: 9788426403438,
        description:
            'Una preciosa biografía de la pintora mexicana Frida Kahlo ilustrada con las evocadoras imágenes de María Hesse, ganadora del Premio de la Fundación Nacional del Libro Infantil y Juvenil de Brasil. Inspirado en las vivencias de la icónica pintora mexicana, este libro ofrece un hermoso paseo ilustrado por su vida y su obra.',
        discount: 5,
    },
];
 



