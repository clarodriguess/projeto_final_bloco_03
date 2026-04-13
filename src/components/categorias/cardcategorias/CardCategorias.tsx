


import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

//um laco de repeticao q vai percorrer a lista de categorias e criar um card para cada categoria
interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-sm overflow-hidden justify-between'>

            <header className='py-2 px-6 bg-gray-800 text-white font-semibold text-2xl'>
                Categoria
            </header>

            <p className='p-8 text-2xl bg-gray-100 h-full'>
                {categoria.nome}
            </p>

            <div className="flex text-gray-950">

                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full font-semibold bg-gray-300 hover:bg-blue-900 hover:text-white
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                className=' bg-red-300 hover:bg-red-700 hover:text-white w-full 
                    flex items-center justify-center font-semibold'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias