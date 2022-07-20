let productosDeportivos = [
    {
        id: '1', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 5,
        categoria: "deportivo"
    },
    {
        id: '2', 
        name: 'ZAPATILLAS RUNNING ADIDAS GALAXY 5 AZUL',
        description: 'ZAPATILLAS RUNNING',
        price: 11999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/100010fw5705001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 7,
        categoria: "deportivo"
    },
    {
        id: '3', 
        name: 'ZAPATILLAS TOPPER X FORCER NEGRA',
        description: 'TENNIS',
        price: 12999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-topper-x-forcer-negra-800010021872001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 14,
        categoria: "deportivo"
    },
    {
        id: '4', 
        name: 'BOTINES DE FUTBOL TOPPER SAN CIRO 5 TF BLANCO',
        description: 'FUTBOL',
        price: 9899,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-topper-san-ciro-5-tf-blanco-21722836-800010026399001-1-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 10,
        categoria: "deportivo"
    },

    {
        id: '5', 
        name: 'BOTAS CONVERSE CHUCK TAYLOR ALL STAR CORE HI NEGRA',
        description: 'PARA SALIR',
        price: 14999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/2/0/200010157197001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 10,
        categoria: "salida"
    },
    {
        id: '6', 
        name: 'BOTAS JOHN FOOS PATH BLANCA',
        description: 'PARA SALIR',
        price: 12999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botas-john-foos-path-blanca-305011062109001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 10,
        categoria: "salida"
    },
    {
        id: '7', 
        name: 'ZAPATILLA JOHN FOOS MEET NEW NEGRA',
        description: 'PARA SALIR',
        price: 11995,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/3/0/305011761324001-1_1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 10,
        categoria: "salida"
    },
    {
        id: '8', 
        name: 'ZAPATILLA CONVERSE CHUCK TAYLOR ALL STAR CORE OX BLANCA',
        description: 'PARA SALIR',
        price: 14995,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/2/0/200010156994001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45],
        stock: 10,
        categoria: "salida"
    },
];

export const promesaDeportes = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(productosDeportivos)
        }, 2000);
        
    } else {
        reject("ERROR 404 Not Found")
    }
});