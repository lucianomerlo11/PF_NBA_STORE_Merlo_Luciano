const pages = ["Indumentaria", "Zapatillas", "Accesorios"]

const ItemListContainerComponent = () => {
    return (
        <ul className='navbar-nav'>
            {pages.map(page => 
                <li className='nav-item' key={page}>
                    <a className='nav-link active' aria-current='page' href='#'>{page}</a>
                </li>
            )}
        </ul>
    )
}

export default ItemListContainerComponent;