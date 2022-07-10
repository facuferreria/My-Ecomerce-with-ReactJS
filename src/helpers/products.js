let productosDeportivos = [
    {
        id: '1', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg',
        bigImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: '2', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg',
        bigImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: '3', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg',
        bigImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: '4', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg',
        bigImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-1.jpg',
        sizes: [39, 40, 41, 42, 43, 44, 45]
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