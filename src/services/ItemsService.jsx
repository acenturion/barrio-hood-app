const TIME_RESPONSE_MOCK = 2000
const mockItems = [
    {
        id: 1,
        title: 'Termo Stanley',
        description: 'Temrmo Stanley original 1L Blanco',
        price: 10000.50,
        pictureUrl: 'termo.png'
    },
    {
        id: 2,
        title: 'Termo Lumilagro',
        description: 'Termo Lumilagro 1L Color Gris',
        price: 7999.9,
        pictureUrl: 'termo2.png'
    },
    {
        id: 3,
        title: 'Termo Imitacion',
        description: 'Termo Simil Stanley 1.5L Negro',
        price: 3000.0,
        pictureUrl: 'termo3.png'
    },
]
const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockItems)
        }, TIME_RESPONSE_MOCK);
    })
}

const getItem = (idItem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const searchItem = mockItems.find(mockItem => mockItem.id === idItem);
            resolve(searchItem)
        }, TIME_RESPONSE_MOCK);
    })
}


export {getItems, getItem}
