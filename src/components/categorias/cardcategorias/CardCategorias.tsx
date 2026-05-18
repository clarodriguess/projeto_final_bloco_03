


import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

//um laco de repeticao q vai percorrer a lista de categorias e criar um card para cada categoria
interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border border-gray-400  flex flex-col rounded-lg overflow-hidden justify-between'>

            <header className='px-4 py-2 bg-gray-800 text-white font-light text-md uppercase'>
                Categoria
            </header>

            <p className='pt-6 text-2xl bg-gray-100 h-full font-bold text-center'>
                {categoria.nome}
            </p>

            <p className='p-4 text-sm bg-gray-100 h-full text-center'>
                {categoria.descricao}
            </p>

            <div className="flex text-gray-950">

                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full font-semibold bg-gray-300 hover:bg-sky-950 hover:text-white
                        flex items-center justify-center py-2'>
                    <button>EDITAR</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                className=' bg-orange-200 hover:bg-red-800 hover:text-white w-full 
                    flex items-center justify-center font-semibold '>
                    <button>DELETAR</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias