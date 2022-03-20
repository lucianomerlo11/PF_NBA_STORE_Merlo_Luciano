const CamisetasData = [
    {
        id: '1',
        name:  'Camiseta Association Swingman de Nike de Los Ángeles Lakers de LeBron James para hombre',
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-association-edition-swingman-jersey-white-lebron-james-mens_ss4_p-11976637+u-vx1wvop1rdl0woetii0v+v-6415d63a8c524a6594c054c3399e8fbe.jpg?_hv=1&w=900',
        price: '89', 
        stock: 25, 
        description: 'La camiseta Swingman de Los Angeles Lakers de Nike Association recrea los detalles auténticos de la camiseta que luce LeBron James con un diseño de nivel superior para los aficionados. '
    },
    {
        id: '2',
        name:  'Camiseta Brooklyn Nets Nike 75th Anniversary Edition Swingman - Negro - Kevin Durant - Hombre',
        image: 'https://images.footballfanatics.com/brooklyn-nets/brooklyn-nets-nike-75th-anniversary-edition-swingman-jersey-black-kevin-durant-mens_ss4_p-12096535+u-qhxycxhifnra4rbsrxwp+v-8acbe2ec00db460c8202e6880af5eac0.jpg?_hv=1&w=900', 
        price: '150', 
        stock: 25, 
        description: 'Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha, ¡ningún aficionado a la NBA puede estar sin ella!'
    },
    {
        id: '3',
        name:  'Boston Celtics Nike Icon Swingman Camiseta de la NBA - Jayson Tatum - Hombre',
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-swingman-jersey-jayson-tatum-mens_ss4_p-11904831+u-rls9h59nafc4cayapi5+v-c1f71d1980544afb84393cfc87107d9e.jpg?_hv=1&w=900', 
        price: '89', 
        stock: 25, 
        description: 'Basado en la auténtica camiseta de la NBA que lleva Jayson Tatum, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Boston Celtics'
    },
    {
        id: '4',
        name: 'Chicago Bulls Nike Icon Swingman Camiseta de la NBA - Zach Lavine - Hombre',
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-edition-swingman-jersey-red-zach-lavine-mens_ss4_p-11899886+u-15deup7lqpyz7zrxtgwv+v-e22db1ef01634b98a87b09c91f38fb9c.jpg?_hv=1&w=900', 
        price: '89', 
        stock: 25, 
        description: 'Basado en la auténtica camiseta de la NBA que lleva Zach Lavine, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Chicago Bulls'
    }
]


export const getCamisetas = () => {
    return(new Promise((resolve, rejected) => {
        setTimeout(()=>{
            resolve(CamisetasData)
        }, 2000)
    }))
}

