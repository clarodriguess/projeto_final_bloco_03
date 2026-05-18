import { Link } from "react-router-dom"
import type Produto from "../../../models/Produto"

interface CardProdutosProps {
    produto: Produto
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border-2 border-gray-500 flex flex-col rounded-lg overflow-hidden justify-between'>

            <header className='py-2 bg-gray-800 text-white font-light text-md text-center uppercase'>
                Produto
            </header>
            <p className='text-base bg-gray-200 text-center'>
               {produto.categoria?.nome}
            </p>

            <p className='p-6 text-2xl h-full'>
                {produto.nome}
            </p>

            <img
                src={produto.foto}
                className="mx-auto h-35 max-w-70"
                alt={produto.nome}
            />
            
            <p className='p-4 text-2xl h-full text-center font-bold'>
                R$ {produto.preco}
            </p>

            <div className="flex text-gray-950">

                <Link to={`/editarproduto/${produto.id}`}
                    className='w-full font-semibold bg-gray-300 hover:bg-sky-950 hover:text-white
                        flex items-center justify-center py-2'>
                    <button>EDITAR</button>
                </Link>

                <Link to={`/deletarProduto/${produto.id}`}
                    className=' bg-orange-200 hover:bg-red-800 hover:text-white w-full 
                    flex items-center justify-center font-semibold '>
                    <button>DELETAR</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos