let productosDeportivos = [
    {
        id: '1', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg'
    },
    {
        id: '2', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg'
    },
    {
        id: '3', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg'
    },
    {
        id: '4', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-coreracer-negra-100010fx3581001-2.jpg'
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