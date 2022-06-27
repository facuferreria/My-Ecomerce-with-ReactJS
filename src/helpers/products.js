export let productosDeportivos = [
    {
        id: '1', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: '../img/zapas-running-negras.jpg'
    },
    {
        id: '2', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: '../img/zapas-running-negras.jpg'
    },
    {
        id: '3', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: '../img/zapas-running-negras.jpg'
    },
    {
        id: '4', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: '../img/zapas-running-negras.jpg'
    },
    {
        id: '5', 
        name: 'ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA',
        description: 'ZAPATILLAS RUNNING',
        price: 13999,
        pictureImg: '../img/zapas-running-negras.jpg'
    },
    
];

const promesaDeportes = new Promise((resolve, reject) => {
    let condition = true;
    condition ? resolve(productosDeportivos) : reject("ERROR 404 Not Found")
});