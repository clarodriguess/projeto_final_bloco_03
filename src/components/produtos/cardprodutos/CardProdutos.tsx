import { Link } from "react-router-dom"
import type Produto from "../../../models/Produto"

interface CardProdutosProps {
    produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border flex flex-col rounded-sm overflow-hidden justify-between'>

            <header className='py-2 px-6 bg-gray-800 text-white font-semibold text-2xl'>
                Produto
            </header>

            <p className='p-8 text-2xl bg-gray-100 h-full'>
                {produto.nome}
            </p>

            <img
                src={produto.foto}
                className="mx-auto mt-1 h-35 max-w-70"
                alt={produto.nome}
            />
            <p className='p-8 text-base bg-gray-100 h-full'>
               {produto.categoria?.nome}
            </p>

            <p className='p-8 text-2xl bg-gray-100 h-full'>
                R$  {produto.preco}
            </p>

            <div className="flex text-gray-950">

                <Link to={`/editarproduto/${produto.id}`}
                    className='w-full font-semibold bg-gray-300 hover:bg-blue-900 hover:text-white
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarProduto/${produto.id}`}
                    className=' bg-red-300 hover:bg-red-700 hover:text-white w-full 
                    flex items-center justify-center font-semibold'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos