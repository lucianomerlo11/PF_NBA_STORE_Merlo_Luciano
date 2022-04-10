const products = [
    {
        id: 1,
        category: 'indumentaria',
        name: 'Camiseta Association Swingman de Nike de Los Ángeles Lakers de LeBron James para hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-association-edition-swingman-jersey-white-lebron-james-mens_ss4_p-11976637+u-vx1wvop1rdl0woetii0v+v-6415d63a8c524a6594c054c3399e8fbe.jpg?_hv=1&w=900',
        price: '89',
        stock: 25,
        description: 'La camiseta Swingman de Los Angeles Lakers de Nike Association recrea los detalles auténticos de la camiseta que luce LeBron James con un diseño de nivel superior para los aficionados. '
    },
    {
        id: 2,
        category: 'indumentaria',
        name: 'Camiseta Brooklyn Nets Nike 75th Anniversary Edition Swingman - Negro - Kevin Durant - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/brooklyn-nets/brooklyn-nets-nike-75th-anniversary-edition-swingman-jersey-black-kevin-durant-mens_ss4_p-12096535+u-qhxycxhifnra4rbsrxwp+v-8acbe2ec00db460c8202e6880af5eac0.jpg?_hv=1&w=900',
        price: '150',
        stock: 25,
        description: 'Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha, ¡ningún aficionado a la NBA puede estar sin ella!'
    },
    {
        id: 3,
        category: 'indumentaria',
        name: 'Boston Celtics Nike Icon Swingman Camiseta de la NBA - Jayson Tatum - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-swingman-jersey-jayson-tatum-mens_ss4_p-11904831+u-rls9h59nafc4cayapi5+v-c1f71d1980544afb84393cfc87107d9e.jpg?_hv=1&w=900',
        price: '89',
        stock: 25,
        description: 'Basado en la auténtica camiseta de la NBA que lleva Jayson Tatum, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Boston Celtics'
    },
    {
        id: 4,
        category: 'indumentaria',
        name: 'Chicago Bulls Nike Icon Swingman Camiseta de la NBA - Zach Lavine - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-edition-swingman-jersey-red-zach-lavine-mens_ss4_p-11899886+u-15deup7lqpyz7zrxtgwv+v-e22db1ef01634b98a87b09c91f38fb9c.jpg?_hv=1&w=900',
        price: '89',
        stock: 25,
        description: 'Basado en la auténtica camiseta de la NBA que lleva Zach Lavine, asegúrate de estar listo para el día del partido con la camiseta Nike Icon Swingman de los Chicago Bulls'
    },
    {
        id: 5,
        category: 'indumentaria',
        name: 'Pantalones cortos Nike City Edition Swingman de los Miami Heat para hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-nike-city-edition-swingman-shorts-mens_ss4_p-12062423+u-koku1doqerjopmdzf796+v-a2f2fa1e7c52488fb5aa6399a06c53f5.jpg?_hv=1&w=900',
        price: '63,75',
        stock: 25,
        description: 'Obtenga una sensación realmente profesional con este excelente artículo de reproducción.'
    },
    {
        id: 6,
        category: 'indumentaria',
        name: 'Pantalones cortos Nike City Edition Swingman de Golden State Warriors para hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-city-edition-swingman-shorts-mens_ss4_p-12062396+u-18tbqj7p3oskrz07cwwh+v-60a7de6f201a4e85ab0ad1f8d4ad53b6.jpg?_hv=1&w=900',
        price: '63,75',
        stock: 25,
        description: 'Obtenga una sensación realmente profesional con este excelente artículo de reproducción'
    },
    {
        id: 7,
        category: 'indumentaria',
        name: 'Los Angeles Lakers Nike Standard Issue Pant - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-standard-issue-pant-mens_ss4_p-12057368+u-k75wsqqgyumb8fibww7s+v-dd3358c181bc4c889bf58167bdb6c2e3.jpg?_hv=1&w=900',
        price: '69,70',
        stock: 25,
        description: 'Renueva tu vestuario al estilo de la NBA con esta prenda esencial.'
    },
    {
        id: 8,
        category: 'indumentaria',
        name: 'San Antonio Spurs Fanatics Branded Splatter Graphic Hoodie - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/san-antonio-spurs/san-antonio-spurs-fanatics-branded-splatter-graphic-hoodie-mens_ss4_p-12088185+u-zgcv18zbnwyp2aoynozg+v-7d0e2971fcaf413b85f4646c3542ed55.jpg?_hv=1&w=900',
        price: '53',
        stock: 25,
        description: 'Una prenda que irá allá donde vayas y es increíblemente versátil.'
    },
    {
        id: 9,
        category: 'indumentaria',
        name: 'Camiseta negra de malla con cuello redondo Mitchell & Ness de los New Jersey Nets para hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-black-mesh-crew-neck-t-shirt-by-mitchell-and-ness-mens_ss4_p-12065170+u-2maa0e0zb6kobyt1598+v-2b6351113f6e47f897c4743738d543c0.jpg?_hv=1&w=900',
        price: '79',
        stock: 25,
        description: 'Adopta un estilo de la NBA premium allá donde vayas. Una prenda imprescindible para cualquier aficionado,'
    },
    {
        id: 10,
        category: 'indumentaria',
        name: 'Cortavientos Miami Heat Mitchell & Ness - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/miami-heat/miami-heat-mitchell-and-ness-windbreaker-mens_ss4_p-12055243+u-7kz7he23qv7u0iipxyai+v-af75e8b5dd5d4ceca8db47c2938fe2fd.jpg?_hv=1&w=900',
        price: '74',
        stock: 25,
        description: 'Adopta un estilo clásico inspirado en la NBA allá donde vayas.'
    },
    {
        id: 11,
        category: 'indumentaria',
        name: 'Chaqueta de peso pesado con la marca Fanatics de los Boston Celtics - Hombres',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-fanatics-branded-heavyweight-jacket-mens_ss4_p-12055220+u-v2vwc2nb4nzd9mtsu72d+v-432851ed3de344fbbd79970973dec1a0.jpg?_hv=1&w=900',
        price: '62',
        stock: 25,
        description: 'Una prenda de abrigo premium para los auténticos seguidores del baloncesto, esta chaqueta puede acompañarte a todas partes y lucir estupendamente allá donde vayas.'
    },
    {
        id: 12,
        category: 'indumentaria',
        name: 'Camiseta Dallas Mavericks Nike 75th Anniversary Edition Swingman - Azul - Luka Doncic - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/dallas-mavericks/dallas-mavericks-nike-75th-anniversary-edition-swingman-jersey-blue-luka-doncic-mens_ss4_p-12096563+u-1ctut1ykqp3gv0kgx7zm+v-5d2b1c0e220b484895544b5f8c3710f1.jpg?_hv=1&w=900',
        price: '101',
        stock: 25,
        description: 'Obtén la calidad que mereces con esta camiseta Swingman. Brillante dentro y fuera de la cancha'
    },
    {
        id: 13,
        category: 'indumentaria',
        name: 'NBA Nike Team 31 75th Anniversary All Over Print T-Shirt - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-team-31-75th-anniversary-all-over-print-t-shirt-mens_ss4_p-12053803+u-c4eefajs37wwho7y46w8+v-bd348e4713f14674b70ca4d383e220b4.jpg?_hv=1&w=900',
        price: '35',
        stock: 25,
        description: 'Sola o acompañada de una chaqueta, en casa o en la calle, esta camiseta te concederá un estilo de baloncesto real en cualquier momento y lugar'
    },
    {
        id: 14,
        category: 'indumentaria',
        name: 'Denver Nuggets Jordan Statement Swingman Jersey - Nikola Jokic - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/denver-nuggets/denver-nuggets-jordan-statement-swingman-jersey-nikola-jokic-mens_ss4_p-12041603+u-gi67nxmdk0fyvobleuid+v-a75afa05e981410f9abd6540a3d6b46b.jpg?_hv=1&w=900',
        price: '85',
        stock: 25,
        description: 'Si quieres estar más cerca de una auténtica camiseta de la NBA acertarás con esta prenda'
    },
    {
        id: 15,
        category: 'indumentaria',
        name: 'Camiseta San Antonio Spurs Manu Ginobili Hardwood Classics Road Swingman de Mitchell & Ness - Hombre',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/san-antonio-spurs/san-antonio-spurs-manu-ginobili-hardwood-classics-road-swingman-jersey-by-mitchell-and-ness-mens_ss4_p-12013870+u-ztyr1tapzw33peugdus2+v-0a98a26c14714c85a729d5483362500c.jpg?_hv=1&w=900',
        price: '106',
        stock: 25,
        description: 'Retorna a una época pasada para lucir un fantástico look vintage.'
    },
    {
        id: 16,
        category: 'indumentaria',
        name: 'Men Mitchell Ness Gray San Antonio Spurs Hardwood Classics Big Face 2.0 Shorts',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4268000/altimages/ff_4268745-64d0d3f3cd41d221db7aalt1_full.jpg&w=900',
        price: '102',
        stock: 25,
        description: 'Celebrate San Antonio Spurs history with these Hardwood Classics Big Face 2.0 shorts. These Mitchell & Ness shorts feature large'
    },
    {
        id: 17,
        category: 'indumentaria',
        name: 'NBA Nike Team 31 - Move to Zero T-Shirt - Womens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-team-31-move-to-zero-t-shirt-womens_ss4_p-12053864+u-rs6hvwn3fmf08td6116d+v-c2dafc2f66d446cdb3ca6066bd9c6687.jpg?_hv=1&w=900',
        price: '42',
        stock: 25,
        description: 'Sola o acompañada de una chaqueta, en casa o en la calle, esta camiseta te concederá un estilo de baloncesto real en cualquier momento y lugar.'
    },
    {
        id: 18,
        category: 'indumentaria',
        name: 'NBA Nike Team 31 75th Anniversary DNA Shorts - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-team-31-75th-anniversary-dna-shorts-mens_ss4_p-12053783+u-u5svx6mwjbg9fmrt4ha5+v-06ff40272ac3467598f945e905a86f94.jpg?_hv=1&w=900',
        price: '63',
        stock: 25,
        description: 'Cómodos y resistentes te concederán un estilo auténtico en el tiempo caluroso.'
    },
    {
        id: 19,
        category: 'accesorios',
        name: 'Brooklyn Nets Stance Shortcut 2 Socks - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/brooklyn-nets/brooklyn-nets-stance-shortcut-2-socks-mens_ss4_p-12015505+u-kn1mp3k71ji8s0ffi891+v-1141d13c2d714c76b73fe4e72dad8b61.jpg?_hv=1&w=900',
        price: '18',
        stock: 25,
        description: 'Unos buenos calcetines son esenciales, así que asegúrate de que transmiten un mensaje de apoyo. Confeccionados para ofrecer comodidad y estilo, estos calcetines son perfectos para llevarlos a diario y demostrar a la vez tu orgullo por tu equipo.'
    },
    {
        id: 20,
        category: 'accesorios',
        name: 'Calcetines teñidos Stance de Golden State Warriors',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-stance-dyed-socks_ss4_p-12055018+u-3vzpccom3ea9wdk2orvz+v-341d6d13d982469481d0aac0815373f6.jpg?_hv=1&w=900',
        price: '18',
        stock: 25,
        description: 'Unos buenos calcetines son esenciales, así que asegúrate de que transmiten un mensaje de apoyo. Confeccionados para ofrecer comodidad y estilo, estos calcetines son perfectos para llevarlos a diario y demostrar a la vez tu orgullo por tu equipo.'
    },
    {
        id: 21,
        category: 'accesorios',
        name: 'Boston Celtics Stance Shortcut 2 Socks - Mens',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-stance-shortcut-2-socks-mens_ss4_p-12012920+u-kd2ficon18ajjzqqyou9+v-c7187f3c489c4f61a641c7187211fcd8.jpg?_hv=1&w=900',
        price: '18',
        stock: 25,
        description: 'Unos buenos calcetines son esenciales, así que asegúrate de que transmiten un mensaje de apoyo. Confeccionados para ofrecer comodidad y estilo, estos calcetines son perfectos para llevarlos a diario y demostrar a la vez tu orgullo por tu equipo.'
    },
    {
        id: 22,
        category: 'accesorios',
        name: 'Gorra ajustable The League 9FORTY de New Era de los Boston Celtics para hombre',
        size: '',
        image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-new-era-the-league-9forty-adjustable-cap-mens_ss4_p-11888221+u-xufgmadc5lr9u4km6map+v-b9eca2b6564a433098f836493b668be7.jpg?_hv=1&w=900',
        price: '26',
        stock: 25,
        description: 'Para lucir un auténtico estilo urbano no hay nada mejor. Con detalles de tu equipo, puedes llevarlo de día y de noche, llueva o haga sol y demostrar el amor por tu equipo allá donde vayas.'
    },
    {
        id: 23,
        category: 'accesorios',
        name: 'Gorra ajustable Brooklyn Nets The League 9FORTY de New Era',
        size: '',
        image: 'https://images.footballfanatics.com/brooklyn-nets/brooklyn-nets-new-era-the-league-9forty-adjustable-cap_ss4_p-11896022+u-8wh4xk1s2wecqry69zs0+v-c47f1b8820f6417aa1174661542cc83f.jpg?_hv=1&w=900',
        price: '26',
        stock: 25,
        description: 'Para lucir un auténtico estilo urbano no hay nada mejor. Con detalles de tu equipo, puedes llevarlo de día y de noche, llueva o haga sol y demostrar el amor por tu equipo allá donde vayas.'
    },
    {
        id: 24,
        category: 'accesorios',
        name: 'Gorra New York Knicks New Era City Edition 9FIFTY',
        size: '',
        image: 'https://images.footballfanatics.com/new-york-knicks/new-york-knicks-new-era-city-edition-9fifty-cap_ss4_p-12074787+u-19kg7038c7rn6lyzvugr+v-0adccc4c80b94319896cc4e90e01a0ae.jpg?_hv=1&w=900',
        price: '26',
        stock: 25,
        description: 'Para lucir un auténtico estilo urbano no hay nada mejor. Con detalles de tu equipo, puedes llevarlo de día y de noche, llueva o haga sol y demostrar el amor por tu equipo allá donde vayas.'
    },
    {
        id: 25,
        category: 'zapatillas',
        name: 'Calzado de baloncesto Nike KD14 - Negro / Rojo universitario',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-kd14-basketball-shoe-black/university-red_ss4_p-12053879+u-qt7w1b2pjgz3ihfux7ck+v-86d00ab9a5164396b34f9694c3245e2f.jpg?_hv=1&w=900',
        price: '138',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 26,
        category: 'zapatillas',
        name: 'Calzado de baloncesto Nike Zoom Freak 3 de la NBA - Camuflaje negro',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-zoom-freak-3-basketball-shoe-black-camo_ss4_p-12062900+u-dzdwvl5qgna7db4ag51e+v-57d6d3170dba487a93c0321fc4345eaf.jpg?_hv=1&w=900',
        price: '142',
        stock: 25,
        description: 'Un clásico de la NBA actualizado, no hay nada más emblemático que estas zapatillas de caña alta. Un clásico del baloncesto durante décadas. Adopta el característico aspecto de tu equipo con estas zapatillas y lleva tu estilo de juego a otro nive'
    },
    {
        id: 27,
        category: 'zapatillas',
        name: 'Zapatillas Nike Kyrie 6 Basketball - Azul Marino/ Carmesí- Azul - Hombres',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/basketball-essentials/nike-kyrie-6-basketball-shoe-midnight-navy/laser-crimson-psychic-blue-mens_ss4_p-12006697+u-xb5fca5ifka2zy20xw2p+v-68427b329b36435bb9654d78a460a7e7.jpg?_hv=1&w=900',
        price: '162',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 28,
        category: 'zapatillas',
        name: 'Nike Nike KD XIII Basketball Shoe - Team Nets - Mens',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/basketball-essentials/nike-nike-kd-xiii-basketball-shoe-team-nets-mens_ss4_p-12018037+u-yxv1blfk6kkuamckjcjk+v-557304f1c1c84276ac7e390c9ffc50fe.jpg?_hv=1&w=900',
        price: '162',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 29,
        category: 'zapatillas',
        name: 'Zapatillas de Baloncesto Nike PG 4 - Clippers - Hombres',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/basketball-essentials/nike-pg-4-basketball-shoe-clippers-mens_ss4_p-12018026+u-dckrqgb3k5m5lgd2ipqc+v-5b963d626a6e4d039a2dc5bc01f05395.jpg?_hv=1&w=900',
        price: '132',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 30,
        category: 'zapatillas',
        name: 'Zapatillas de baloncesto Nike LeBron 18 Seasonal Multi / Fruity Pebbles',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/basketball-essentials/nba-nike-lebron-18-seasonal-multi/fruity-pebbles-basketball-shoe_ss4_p-12032978+u-1dmx6lrddgj1phy885d2+v-d5815b2f2df0474caced517aee3e60ca.jpg?_hv=1&w=900',
        price: '207',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 31,
        category: 'zapatillas',
        name: 'Zapatillas Nike KD13 Basketball - Negro/Blanco- Gris - Hombres',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/basketball-essentials/nike-kd13-basketball-shoe-black/white-wolf-grey-mens_ss4_p-12001909+u-moddvq4a18aqlrgaiq08+v-21121c848e20413f968ccf963714a16a.jpg?_hv=1&w=900',
        price: '207',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    },
    {
        id: 32,
        category: 'zapatillas',
        name: 'Calzado de baloncesto Nike KD14 - Negro / Gris niebla',
        size: ['9', '9.5', '10', '10.5', '11.5', '12'],
        image: 'https://images.footballfanatics.com/logo-gear/nba-nike-kd14-basketball-shoe-black/grey-fog_ss4_p-12053885+u-16dtzlikstwhdm17oxjq+v-f75a5dc6f83642498f628e2f03da2aa7.jpg?_hv=1&w=900',
        price: '138',
        stock: 25,
        description: 'Estas zapatillas son ideales para rendir al máximo en la cancha. Diseñadas teniendo en cuenta a los jugadores, estas zapatillas tienen un agarre y sujeción excelentes y ofrecen una comodidad premium para el uso diario.'
    }
]


export const getProducts = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(product => product.category == categoryId))
        }, 2000)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(productId)))
        }, 2000)
    })
}

export const getSizeByProductId = (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(
                products.find(product => product.id === parseInt(productId))
                )
        }, 500)
    })
}