const products = [
    //====================={ Productos del hogar }=====================
        {"id": 1, "name": "Silla de oficina", "quantity": 1, "group": "Productos del hogar", "unitprice": 2000, "price": 2000, "img": "https://i.ibb.co/P9Ytc2W/1-Silla-de-oficina.png"},
        {"id": 2, "name": "Lámpara", "quantity": 1, "group": "Productos del hogar", "unitprice": 1000, "price": 1000, "img": "https://i.ibb.co/XbxfrJC/2-L-mpara-de-escritorio.png"},
        {"id": 3, "name": "Litera", "quantity": 1, "group": "Productos del hogar", "unitprice": 5500, "price": 5500, "img": "https://i.ibb.co/LSJ4YdL/3-Litera.jpg"},
        {"id": 4, "name": "Silla gamer", "quantity": 1, "group": "Productos del hogar", "unitprice": 8000, "price": 8000, "img": "https://i.ibb.co/41b3yGG/4-Silla-gamer.jpg"},
        {"id": 5, "name": "Mueble", "quantity": 1, "group": "Productos del hogar", "unitprice": 1500, "price": 1500, "img": "https://i.ibb.co/4N8rc0Y/5-Mueble.jpg"},
        {"id": 6, "name": "Juego de comedor", "quantity": 1, "group": "Productos del hogar", "unitprice": 2500, "price": 2500, "img": "https://i.ibb.co/ZJLBJLR/6-Juego-de-comedor.jpg"},
        {"id": 7, "name": "Estantería", "quantity": 1, "group": "Productos del hogar", "unitprice": 1500, "price": 1500, "img": "https://i.ibb.co/KDVhnMh/7-Estanter-a.jpg"},
        {"id": 8, "name": "Closet", "quantity": 1, "group": "Productos del hogar", "unitprice": 3000, "price": 3000, "img": "https://i.ibb.co/gz5sBMF/8-Closet.jpg"},
        {"id": 9, "name": "Nevera", "quantity": 1, "group": "Productos del hogar", "unitprice": 5000, "price": 5000, "img": "https://i.ibb.co/sRjynQH/9-Nevera.jpg"},
        {"id": 10, "name": "Alfombra", "quantity": 1, "group": "Productos del hogar", "unitprice": 500, "price": 500, "img": "https://i.ibb.co/vdx3JGq/10-Alfombra.jpg"},
        {"id": 11, "name": "Cama", "quantity": 1, "group": "Productos del hogar", "unitprice": 3500, "price": 3500, "img": "https://i.ibb.co/1LJdzgT/11-Cama.jpg"},
    //====================={ Productos del hogar }=====================


    //====================={ Productos de cocina }=====================
        {"id": 12, "name": "Licuadora", "quantity": 1, "group": "Productos de cocina", "unitprice": 2000, "price": 2000, "img": "https://i.ibb.co/Pzy8d9N/12-Licuadora.jpg"},
        {"id": 13, "name": "Microondas", "quantity": 1, "group": "Productos de cocina", "unitprice": 3400, "price": 3400, "img": "https://i.ibb.co/0XW7K3J/13-Microondas.jpg"},
        {"id": 14, "name": "Horno", "quantity": 1, "group": "Productos de cocina", "unitprice": 2300, "price": 2300, "img": "https://i.ibb.co/2gwMcpY/14-Horno.jpg"},
        {"id": 15, "name": "Juego de cubiertos", "quantity": 1, "group": "Productos de cocina", "unitprice": 1600, "price": 1600, "img": "https://i.ibb.co/PQn11WB/15-Juego-de-cubiertos.jpg"},
        {"id": 16, "name": "Juego de utensilios", "quantity": 1, "group": "Productos de cocina", "unitprice": 4700, "price": 4700, "img": "https://i.ibb.co/SKzjmrP/16-Juego-de-utencilios.jpg"},
        {"id": 17, "name": "Batidora", "quantity": 1, "group": "Productos de cocina", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/yhfJCXj/17-Batidora.jpg"},
        {"id": 18, "name": "Cafetera", "quantity": 1, "group": "Productos de cocina", "unitprice": 5400, "price": 5400, "img": "https://i.ibb.co/HYFpnNB/18-Cafetera.jpg"},
        {"id": 19, "name": "Mortero", "quantity": 1, "group": "Productos de cocina", "unitprice": 2000, "price": 2000, "img": "https://i.ibb.co/3BJjkpk/19-Mortero.jpg"},
        {"id": 20, "name": "Sartén", "quantity": 1, "group": "Productos de cocina", "unitprice": 500, "price": 500, "img": "https://i.ibb.co/V9tDB2j/20-Sart-n.jpg"},
        {"id": 21, "name": "Olla", "quantity": 1, "group": "Productos de cocina", "unitprice": 1000, "price": 1000, "img": "https://i.ibb.co/GsnGDNg/21-Olla.png"},
        {"id": 22, "name": "Rallador", "quantity": 1, "group": "Productos de cocina", "unitprice": 300, "price": 300, "img": "https://i.ibb.co/DGCS7zT/22-Rallador.jpg"},
    //====================={ Productos de cocina }=====================


    //====================={ Electrodomésticos }=====================
        {"id": 23, "name": "Smartwatch", "quantity": 1, "group": "Electrodomésticos", "unitprice": 2000, "price": 2000, "img": "https://i.ibb.co/0rzKD6R/23-Smartwatch.png"},
        {"id": 24,"name": "Regleta", "quantity": 1, "group": "Electrodomésticos", "unitprice": 3400, "price": 3400, "img": "https://i.ibb.co/vj2Mnpx/24-Regleta.jpg"},
        {"id": 25,"name": "Audífonos", "quantity": 1, "group": "Electrodomésticos", "unitprice": 2200, "price": 2200, "img": "https://i.ibb.co/HdF31BK/25-Aud-fonos.png"},
        {"id": 26, "name": "Aro De Luz Led", "quantity": 1, "group": "Electrodomésticos", "unitprice": 1600, "price": 1600, "img": "https://i.ibb.co/HDyLvzT/26-Aro-De-Luz-Led.png"},
        {"id": 27, "name": "Joystick", "quantity": 1, "group": "Electrodomésticos", "unitprice": 4700, "price": 4700, "img": "https://i.ibb.co/3mPjPvq/27-Joystick.png"},
        {"id": 28, "name": "Cornetas", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/YpgpjWL/28-Cornetas.png"},
        {"id": 29, "name": "Batería Portátil", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/yybmqN3/29-Bater-a-Port-til.jpg"},
        {"id": 30, "name": "SmartTV", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/7j8dYDz/30-Smart-TV.jpg"},
        {"id": 31, "name": "Cámara", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/RcXH3mP/31-C-mara.jpg"},
        {"id": 32, "name": "Calefactor", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/cYTkZ1q/32-Calefactor.jpg"},
        {"id": 33, "name": "Pendrive", "quantity": 1, "group": "Electrodomésticos", "unitprice": 6400, "price": 6400, "img": "https://i.ibb.co/y4BB6RX/33-Pendrive.jpg"}
    //====================={ Electrodomésticos }=====================
];


//=========={ Promesa del array de productos }==========
export const getProducts = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000)
    })
}
//=========={ Promesa del array de productos }==========

