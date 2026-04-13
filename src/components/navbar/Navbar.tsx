import { ShoppingCartIcon } from "@phosphor-icons/react"
import { UserIcon } from "@phosphor-icons/react/dist/icons/User"


function Navbar() {
    return (
        <>
            <div className='fixed top-0 left-0 z-50 flex justify-center w-full py-4 text-white bg-blue-950'>
                <div className="container flex items-center justify-between mx-6 mt-2 text-lg">
                   
                        <img
                            src="/img-logo.png"
                            alt="Logo"
                            className='w-40'
                        />
                    
                    <div className='items-center hidden gap-4 py-4 md:flex'>
                        Categorias
                        Cadastrar Categoria
                        <UserIcon size={25} weight='light' />
                        <ShoppingCartIcon size={25} weight='light' />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar