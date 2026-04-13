import { ShoppingCartIcon } from "@phosphor-icons/react"
import { UserIcon } from "@phosphor-icons/react/dist/icons/User"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className='fixed top-0 left-0 z-50 flex justify-center w-full py-2 text-white bg-blue-950 '>
                <div className="container flex items-center justify-between mx-6 mt-2 text-lg">
                    
                    <Link to='/home'>
                        <img
                            src="/img-logo.png"
                            alt="Logo"
                            className="w-35"
                        />
                    </Link>
                    
                    <div className='items-center hidden gap-4 py-4 md:flex font-light '>
                        
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} weight='light' />
                        <ShoppingCartIcon size={32} weight='light' />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar