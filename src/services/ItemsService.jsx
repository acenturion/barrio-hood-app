const TIME_RESPONSE_MOCK_ITEMS = 100
const TIME_RESPONSE_MOCK_ITEM = 500
const mockItems = [
    {
        id: 1,
        title: 'Termo Stanley',
        description: 'Temrmo Stanley original 1L Blanco',
        price: 10000.50,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_689503-MLA42454895011_072020-O.webp',
        stock: 6,
        category: {
            id: 1,
            name: 'Termos'
        }
    },
    {
        id: 2,
        title: 'Termo Lumilagro',
        description: 'Termo Lumilagro 1L Color Gris',
        price: 7999.9,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_934089-MLA42441068436_072020-O.webp',
        stock: 2,
        category: {
            id: 1,
            name: 'Termos'
        }
    },
    {
        id: 3,
        title: 'Termo Imitacion',
        description: 'Termo Simil Stanley 1.5L Negro',
        price: 3000.0,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_926836-MLA46183180848_052021-O.webp',
        stock: 10,
        category: {
            id: 1,
            name: 'Termos'
        }
    },
    {
        id: 4,
        title: 'Android Smart LED TV',
        description: 'Sceptre 32" Class HD (720p) Android Smart LED TV with Google Assistant (A328BV-SR)',
        price: 3000.0,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_750880-MLA43970540786_112020-O.webp',
        stock: 4,
        category: {
            id: 2,
            name: 'Electrodomesticos'
        }
    },
    {
        id: 5,
        title: 'Oster Horno Electrico',
        description: 'Oster Extra Large Digital Countertop Oven',
        price: 3000.0,
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_812485-MLA32706739343_102019-F.webp',
        stock: 3,
        category: {
            id: 2,
            name: 'Electrodomesticos'
        }
    }
]
const getItems = (idCategoria = null) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idCategoria) {
                const parsedId = parseInt(idCategoria)
                const resultItems = mockItems.filter(mockItem => mockItem.category.id === parsedId)
                resolve(resultItems)
            } else {
                resolve(mockItems)
            }
        }, TIME_RESPONSE_MOCK_ITEMS);
    })
}

const getItem = (idItem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const searchItem = mockItems.find(mockItem => mockItem.id === idItem);
            resolve(searchItem)
        }, TIME_RESPONSE_MOCK_ITEM);
    })
}


export {getItems, getItem}
